<template>
    <div>
        <el-dialog
            title="设置角色权限"
            :close-on-click-modal="false"
            :visible.sync="$store.state.role.setPermissionState"
            class="set-menu-dialog">
            <el-form
                label-position="top"
                :model="form"
                ref="form"
                v-loading="loading"
                class="set-permission-form"
                :rules="rules">
                <p><label>当前角色：</label>{{role.name || '--'}}</p>
                <p><label>使用权限：</label></p>
                <!-- <el-form-item label="使用权限" prop="name"> -->
                    <el-row :gutter="20">
                        <el-col :span="8"
                            v-for="(item, index) in menuList"
                            :key="index">
                            <menu-list
                                @checkedchange="changePermission"
                                :node="item"></menu-list>
                        </el-col>
                    </el-row>
                <!-- </el-form-item> -->
            </el-form>
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
import { roleMenuMod, roleMenuDetail } from '../request'
import { getList } from '../../menu/request'
import MenuList from './MenuList'

export default {
    components: {
        MenuList
    },
    data() {
        return {
            loading: false,
            rules: {},
            menuList: [],
            form: {
                remark: '',
                name: ''
            }
        }
    },
    computed: {
        role() {
            return this.$store.state.role.role || {}
        }
    },
    mounted() {
        this.fetchMenuList()
            .then(() => {
                this.getRoleMenuDetail()
            })
    },
    methods: {
        // 回填module ids
        fillModuleIds(ids) {
            function setChecked(node) {
                if (ids.indexOf(node.id) > -1) {
                    node.checked = true
                }
                if (node.children && node.children.length) {
                    node.children.forEach((item) => {
                        setChecked(item)
                        // 子节点选中，就把父节点展开
                        if (ids.indexOf(item.id) > -1) {
                            node.expand = true
                        }
                    })
                }
            }
            this.menuList.forEach((module) => {
                setChecked(module)
            })
        },
        /**
         * 获取角色的权限菜单
         */
        getRoleMenuDetail() {
            roleMenuDetail({
                roleId: this.role.id
            })
                .then((res) => {
                    this.fillModuleIds(res.data.menuIds)
                })
        },
        /**
         * 关闭筛选项设置
         */
        close() {
            this.$store.commit('HIDE_SET_PERMISSION')
        },
        /**
         * 获取权限菜单列表
         */
        fetchMenuList() {
            return getList()
                .then((res) => {
                    let data = res.data
                    function setChecked(item) {
                        item.checked = false
                        item.expand = false
                        if (item.children && item.children.length) {
                            item.children.forEach((child) => {
                                setChecked(child)
                            })
                        }
                    }
                    data.forEach((item) => {
                        setChecked(item)
                    })
                    this.menuList = data
                })
        },
        /**
         * 修改权限
         */
        changePermission(node) {
            let checked = node.checked
            // 把当前节点的子节点都设置成checke状态
            function setChecked(node) {
                node.checked = checked
                if (node.children && node.children.length) {
                    node.children.forEach((item) => {
                        setChecked(item)
                    })
                }
            }
            setChecked(node)
        },
        /**
         * 获取所有选中的子模块
         */
        getSelectModuleIds() {
            let ids = []
            function getModuleId(node) {
                if (node.checked) {
                    ids.push(node.id)
                }
                if (node.children && node.children.length) {
                    node.children.forEach((item) => {
                        getModuleId(item)
                    })
                }
            }
            this.menuList.forEach((module) => {
                getModuleId(module)
            })
            return ids
        },
        /**
         * 提交权限设置
         */
        submit() {
            this.$refs.form.validate((valid) => {
                if (valid) {
                    let params = {
                        roleId: this.role.id,
                        menuIds: this.getSelectModuleIds()
                    }
                    this.loading = true
                    roleMenuMod(params)
                        .then((res) => {
                            this.$message({
                                type: 'success',
                                message: '保存成功'
                            })
                            setTimeout(() => { this.loading = false })
                            this.$emit('save')
                            this.close()
                        }, () => {
                            setTimeout(() => { this.loading = false })
                        })
                }
            })
        }
    },
}
</script>
