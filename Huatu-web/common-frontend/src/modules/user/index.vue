<template>
    <div class="main-container"
        v-loading="loading">
        <container-title title="用户管理">
            <div slot="right">
                <el-button
                    @click="userControl('add')"
                    icon="el-icon-plus"
                    type="primary">新增用户</el-button>
            </div>
        </container-title>
        <div class="main-container-content">
            <el-form
                class="list-filter none-padding"
                @submit.native.prevent
                :inline="true">
                <el-form-item
                    label="组织架构">
                    <organization-filter
                        placeholder="请选择组织架构"
                        @change="refresh"
                        v-model.trim="filter.nodeId"></organization-filter>
                </el-form-item>
                <el-form-item
                    label="员工">
                    <user-filter
                        clearable
                        @change="refresh"
                        v-model="filter.staffId"/>
                </el-form-item>
                <el-form-item
                    label="角色">
                    <el-select
                        clearable
                        filterable
                        placeholder="请选择角色"
                        v-model="filter.roleId"
                        @change="refresh">
                        <el-option
                            v-for="role in userRoleList"
                            :key="role.id"
                            :label="role.name"
                            :value="role.id"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <el-table
                ref="table"
                border
                :data="list"
                :highlight-current-row="true">
                <div class="empty" slot="empty">
                    <empty/>
                </div>
                <el-table-column
                    prop="chineseName"
                    align="center"
                    :show-overflow-tooltip="true"
                    label="姓名">
                </el-table-column>
                <el-table-column
                    prop="roles"
                    align="center"
                    :formatter="roleFormatter"
                    :show-overflow-tooltip="true"
                    label="角色">
                </el-table-column>
                <el-table-column
                    prop="staffNo"
                    align="center"
                    :show-overflow-tooltip="true"
                    label="工号">
                </el-table-column>
                <el-table-column
                    v-if="hasAuth('userRole', 'mod')"
                    align="center"
                    label="操作">
                    <template slot-scope="scope">
                        <el-button
                        type="text"
                        @click="userControl('edit', scope.row)">修改</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <pager
            @currentchange="changePage"
            @sizechange="changeSize"
            v-model="pageDto">
            </pager>
        </div>
        <add
            @save="fetchList"
            v-if="$store.state.user.addUserState">
        </add>
</div>
</template>

<script>

import { map } from 'lodash'
import OrganizationFilter from 'library/components/OrganizationFilter'
import UserFilter from 'library/components/UserFilter'
import listPageDto from 'library/mixins/listPageDto'
import Add from './components/Add'
import { userList } from './request'
import { roleList } from '../role/request'

export default {
    components: {
        Add,
        OrganizationFilter,
        UserFilter
    },
    mixins: [listPageDto],
    data() {
        return {
            loading: false,
            pageDto: {},
            filter: {
                nodeId: [],
                staffId: '',
                roleId: ''
            },
            list: [],
            userRoleList: []
        }
    },
    mounted() {
        this.fetchUserRole()
        this.fetchList()
    },
    methods: {
        userControl(type, value = null) {
            this.$store.commit('SHOW_USER_EDIT', value)
        },
        refresh() {
            this.pageDto.pageNum = 1
            this.fetchList()
        },
        /**
         * 获取用户列表
         */
        fetchList() {
            let pageDto = this.pageDto
            let filter = this.filter
            let nodeId  = filter.nodeId
            nodeId = nodeId.length ? nodeId[nodeId.length - 1] : null
            this.loading = true
            userList({
                nodeId,
                staffId: filter.staffId || null,
                roleId: this.filter.roleId === '' ? null : this.filter.roleId,
                pageDto: {
                    pageNum: pageDto.pageNum,
                    pageSize: pageDto.pageSize
                }
            }).then((res) => {
                this.list = res.data
                Object.assign(this.pageDto, res.pageDto)
                setTimeout(() => { this.loading = false })
            }, () => {
                setTimeout(() => { this.loading = false })
            })
        },

        /**
         * 获取角色列表
         */
        async fetchUserRole() {
            // 角色列表
            let { data } = await roleList({
                pageSize: 2000,
                pageNum: 1
            })
            this.userRoleList = data
        },
        /**
         * 格式化 角色
         */
        roleFormatter(row, col, cell) {
            return cell && cell.length ? map(cell, 'name').join(', ') : '--'
        }
    }
}
</script>
