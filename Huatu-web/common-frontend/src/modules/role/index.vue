<template>
    <div class="main-container"
        v-loading="loading">
        <container-title title="角色管理">
            <el-button
                slot="right"
                icon="el-icon-plus"
                type="primary"
                class="action"
                v-if="ownAuth([{'name':'role', 'auth': 'add'}])"
                @click="addRole">
                添加角色
            </el-button>
        </container-title>
        <div class="main-container-content">
                <el-form
                    class="list-filter"
                    @submit.native.prevent
                    :inline="true">
                    <el-form-item label-width="0">
                        <el-input
                            placeholder="请输入角色名称"
                            :maxlength="30"
                            @keyup.enter.native="refresh"
                            style="width: 300px;"
                            v-model.trim="filter.query">
                            <i slot="suffix"
                                @click="refresh"
                                class="el-input__icon el-icon-search pointer">
                            </i>
                        </el-input>
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
                    prop="name"
                    align="center"
                    :show-overflow-tooltip="true"
                    label="角色名称">
                </el-table-column>
                <el-table-column
                    prop="remark"
                    align="center"
                    :show-overflow-tooltip="true"
                    label="角色描述">
                    <template slot-scope="scope">
                        {{scope.row.remark || '-'}}
                    </template>
                </el-table-column>
                <el-table-column align="center" label="操作">
                    <template slot-scope="scope">
                        <div class="btn-group">
                            <a href="javascript:;"
                                @click="setRolePermission(scope.row)"
                                v-if="hasAuth('roleMenu', 'mod')">设置权限</a>
                            <a href="javascript:;"
                                v-if="!scope.row.isSystem && hasAuth('role', 'mod')"
                                @click="edit(scope.row)">编辑</a>
                            <a href="javascript:;"
                                v-if="!scope.row.isSystem && hasAuth('role', 'del')"
                                class="forbidden"
                                @click="del(scope.row)">删除</a>
                        </div>
                    </template>
                </el-table-column>
            </el-table>
            <pager
                @currentchange="changePage"
                @sizechange="changeSize"
                v-model.trim="pageDto">
            </pager>
        </div>
        <add
            @save="fetchList"
            v-if="$store.state.role.addRoleState">
        </add>
        <set-permission
            @save="fetchList"
            v-if="$store.state.role.setPermissionState"
        ></set-permission>
    </div>
</template>

<script>

import Add from './components/Add'
import SetPermission from './components/SetPermission'
import OrganizationFilter from 'library/components/OrganizationFilter'
import { roleList, del } from './request'
import listPageDto from 'library/mixins/listPageDto'

export default {
    components: {
        Add,
        SetPermission,
        OrganizationFilter
    },
    mixins: [listPageDto],
    data() {
        return {
            loading: false,
            filter: {
                query: ''
            },
            list: []
        }
    },
    mounted() {
        this.fetchList()
    },
    methods: {
        /**
         * 添加角色
         */
        addRole() {
            this.$store.commit('SHOW_ADD_ROLE')
        },
        /**
         * 设置角色权限
         *
         * @param {Object} 当前操作角色
         */
        setRolePermission(role) {
            this.$store.commit('SHOW_SET_PERMISSION', role)
        },
        /**
         * 设置角色筛选项控制
         *
         * @param {Object} 当前操作角色
         */
        setRoleFilter(role) {
            this.$store.commit('SHOW_SET_FILTER', role)
        },
        /**
         * 编辑角色
         *
         * @param {Object} 当前操作角色
         */
        edit(role) {
            this.$store.commit('SHOW_ADD_ROLE', role)
        },
        /**
         * 编辑角色
         *
         * @param {Object} role
         */
        del(role) {
            this.$confirm('确认删除该角色?', '提示', {
                type: 'warning'
            })
                .then(() => {
                    del({
                        id: role.id
                    })
                        .then(() => {
                            toast('删除成功', 'success')
                            this.fetchList()
                        })
                })
        },
        refresh() {
            this.pageDto.pageNum = 1
            this.fetchList()
        },
        /**
         * 获取角色列表
         */
        fetchList() {
            let pageDto = this.pageDto
            let filter = this.filter
            this.loading = true
            roleList({
                query: filter.query,
                pageDto: {
                    pageNum: pageDto.pageNum,
                    pageSize: pageDto.pageSize
                }
            })
                .then((res) => {
                    this.list = res.data
                    Object.assign(this.pageDto, res.pageDto)
                    this.loading = false
                }, () => {
                    this.loading = false
                })
        }
    },
}
</script>
