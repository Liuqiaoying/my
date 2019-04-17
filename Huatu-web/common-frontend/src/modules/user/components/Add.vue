<template>
    <div>
        <el-dialog
            :title="user ? '编辑用户' : '添加用户'"
            :close-on-click-modal="false"
            width="680px"
            :visible.sync="$store.state.user.addUserState"
            class="add-menu">
            <div>
                <el-form
                    ref="form"
                    :rules="rules"
                    :model="userRole"
                    v-loading="loading"
                    label-position="top">
                    <el-form-item label="用户账号" prop="userId">
                        <user-filter
                            v-model="userRole.userId"
                            :options="userOption"
                            :disabled="user ? true: false"
                            :width="280"></user-filter>
                    </el-form-item>
                    <div @click="add" class="add-btn">
                        <icon name="add" scale="1.5"></icon>
                        <span>添加更多角色</span>
                    </div>
                    <div
                        class="user-filter-container"
                        v-for="(item, index) of userRole.roles"
                        :key="item.key">
                        <el-form-item
                            :prop="'roles.' + index + '.roleId'"
                            :rules="{required: true, message: '角色不能为空'}"
                            label="角色">
                            <el-select
                                v-model="item.roleId"
                                :width="280"
                                filterable
                                @change="changeRole(item)"
                                style="width: 280px">
                                <el-option
                                    v-for="role in userRoleList"
                                    :key="role.id"
                                    :label="role.name"
                                    :value="role.id"
                                    ></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="组织架构">
                            <organization-filter
                                :width="280"
                                :from="item.key"
                                :clear-on-change="true"
                                @change="handleChange"
                                v-model="item.currentNode"></organization-filter>
                            <div class="user-role-organization-tags">
                                <el-tag
                                    style="margin: 0 10px 10px 0;"
                                    v-for="(node, index) of item.selectedNodes"
                                    :key="index"
                                    @close="handleTagClose(item.selectedNodes, index)"
                                    closable>
                                    <el-tooltip
                                        v-if="node.currentLabels.join('-').length > 40"
                                        class="item"
                                        effect="dark"
                                        :content="node.currentLabels.join('-')"
                                        placement="bottom">
                                       <span>
                                        {{ node.currentLabels.join('-').length > 40 ?
                                           `${node.currentLabels[0]}-...-${node.currentLabels[node.currentLabels.length - 1]}` :
                                            node.currentLabels.join('-')
                                        }}
                                       </span>
                                    </el-tooltip>
                                    <span v-else>
                                        {{ node.currentLabels.join('-') }}
                                    </span>
                                </el-tag>
                            </div>
                        </el-form-item>
                        <div @click="del(userRole.roles, index)" class="user-role-delete" style="color:#679afa;cursor:pointer;">
                            <icon name="delete" scale="1.5"></icon>
                        </div>
                     </div>
                </el-form>
            </div>
            <span slot="footer" class="dialog-footer">
                    <el-button @click.native.prevent="close">取消</el-button>
                    <el-button
                        type="primary"
                        :disabled="loading"
                        @click.native.prevent="submit">
                        保存
                    </el-button>
                </span>
        </el-dialog>
    </div>
</template>

<script>
import { last, map } from 'lodash'
import isRepeat from 'library/functions/isRepeat'
import config from '../config'
import { mod, userRoleDetail } from '../request'
import userFilter from 'library/components/UserFilter'
import OrganizationFilter from 'library/components/OrganizationFilter'
import { roleList } from '../../role/request'

export default {
    components: {
        OrganizationFilter,
        userFilter
    },
    props: {},
    data() {
        return {
            loading: false,
            userOption: [],
            rules: config.rules,
            guid: 1,
            userRoleList: [
                {
                    id: '',
                    name: ''
                }
            ],
            userRole: {
                userId: '',
                roles: [
                    {
                        roleId: '',
                        currentNode: [],
                        key: 0,
                        selectedNodes: []
                    }
                ]
            }
        }
    },
    computed: {
        user() {
            return this.$store.state.user.user
        }
    },
    mounted() {
        this.fetchUserRole()
        let user = this.user
        if (user) {
            this.userOption = [
                {
                    id: user.staffId,
                    name: user.chineseName
                }
            ]
            this.userRole.userId = user.staffId
            // 获取用户的角色信息
            userRoleDetail({
                staffId: user.staffId
            })
                .then((res) => {
                    let roles = res.data
                    if (roles) {
                        let targetRoles = roles.map((role, index) => {
                            let key = this.generateRoleKey(index)
                            let selectedNodes = []
                            if (role.nodes) {
                                selectedNodes = role.nodes.map((node) => {
                                    return {
                                        value: node.ids,
                                        currentLabels: node.names || ([].concat(node.name)),
                                        key: key
                                    }
                                })
                            }
                            return {
                                roleId: role.roleId,
                                key: key,
                                currentNode: [],
                                selectedNodes: selectedNodes,
                            }
                        })
                        this.userRole.roles = targetRoles
                    }
                })
        }
    },
    methods: {
        /**
         * 添加角色
         */
        add() {
            this.userRole.roles.unshift({
                roleId: '',
                currentNode: [],
                key: this.generateRoleKey(),
                selectedNodes: []
            })
        },
        /**
         * 改变角色
         */
        changeRole(item) {
            let roles = this.userRole.roles
            let ids = roles.map((role) => {
                return role.roleId
            })
            if (isRepeat(ids)) {
                toast('角色不能重复')
                this.$set(item, 'roleId', '')
            }
        },
        /**
         * 生成角色唯一key
         *
         * @return {number}
         */
        generateRoleKey(index) {
            return this.guid++
        },

        del(roles, index) {
            if (roles.length === 1) {
                toast('请至少添加一个角色')
                return
            }
            roles.splice(index, 1)
        },

        getRoleByKey(key) {
            let result = null
            this.userRole.roles.some(item => {
                if (item.key === key) {
                    result = item
                    return true
                }
                return false
            })
            return result
        },

        handleChange(event) {
            if (!event.value.length) {
                return
            }
            const hasDuplicateNode = this.getRoleByKey(event.from).selectedNodes.some((item) => {
                return JSON.stringify(event.value) === JSON.stringify(item.value)
            })
            if (hasDuplicateNode) {
                toast('请不要选择相同的组织架构节点')
                return
            }
            this.getRoleByKey(event.from).selectedNodes.push(event)
        },

        handleTagClose(selectedNodes, index) {
            selectedNodes.splice(index, 1)
        },

        /**
         * 关闭
         */
        close() {
            this.$store.commit('HIDE_USER_EDIT')
        },

        /**
         * 提交
         */
        submit() {
            this.$refs.form.validate((valid) => {
                let userRole = this.userRole
                if (valid) {
                    let params = {
                        staffId: typeof userRole.userId === 'number'
                            ? userRole.userId
                            : userRole.userId[userRole.userId.length - 1],
                        roles: this.userRole.roles.map((role) => {
                            return {
                                roleId: role.roleId,
                                nodeIds: map(role.selectedNodes, node => last(node.value))
                            }
                        })
                    }
                    this.loading = true
                    mod(params)
                        .then(() => {
                            this.$emit('save')
                            this.close()
                            toast('保存成功', 'success')
                            this.loading = false
                        }, () => {
                            this.loading = false
                        })
                }
            })
        },

        fetchUserRole() {
            // 角色列表
            roleList({
                pageSize: 2000,
                pageNum: 1
            })
                .then(({ data }) => {
                    this.userRoleList = data
                })
        }
    }
}
</script>

<style lang="scss">
    .user-filter-container {
        background-color: #f7f7f7;
        padding: 10px;
        margin-top: 10px;
        position: relative;
    }
    .user-role-delete {
        color: #679afa;
        position: absolute;
        top: 20px;
        right: 20px;
        & :active {
            color: rgba(103,154,250,0.5)
        }
    }
    .user-role-organization-tags {
        padding-top: 10px;
        display: flex;
        flex-wrap: wrap;
    }
    .user-role-organization-chooesd {
        height: 23px;
        padding-left: 6px;
        padding-right: 6px;
        background-color: #679afa;
        border-radius: 3px;
    }
</style>
