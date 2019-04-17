<template>
    <div>
        <el-dialog
            title="设置角色筛选项"
            :close-on-click-modal="false"
            :visible.sync="$store.state.role.setFilterState"
            class="add-filter set-menu-dialog">
            <el-form
                label-position="right"
                label-width="100px"
                :model="form"
                ref="form"
                v-loading="loading"
                :rules="rules" class="demo-ruleForm">
                <p><label>当前角色：</label>{{role.name || '--'}}</p>
                <div class="clearfix list-filters">
                    <div
                        v-for="(item, index) in filterList"
                        class="list-filter"
                        :key="index">
                        {{item.name}}
                        <ul class="menu-item">
                            <li
                                v-for="(filter,index) in item.all"
                                :key="index">
                                <span class="el-icon-caret-right"
                                    :class="{expanded: filter.expand}"
                                    @click="expand(filter)"
                                    v-if="filter.values && filter.values.length"></span>
                                    <span v-else>&nbsp;</span>
                                <el-checkbox class="checkbox"
                                    @change="changeChecked(filter)"
                                    v-model.trim="filter.checked">
                                    {{filter.desc}}
                                </el-checkbox>
                                <transition name="md-fade-bottom">
                                    <ul v-if="filter.values && filter.expand">
                                        <li v-for="option in filter.values"
                                            :key="option.name"
                                            style="margin-left: 16px;">
                                            <el-checkbox
                                            @change="changeChecked(option, filter)"
                                            :label="option.desc"
                                            v-model.trim="option.checked"></el-checkbox>
                                        </li>
                                    </ul>
                                </transition>
                            </li>
                        </ul>
                    </div>
                </div>
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

// import config from '../config'
import { listFilterMod, listFilterDetails } from '../request'

export default {
    props: {},
    data() {
        return {
            loading: false,
            rules: {},
            filterList: [],
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
        this.getListFilterDetails()
    },
    methods: {
        /**
         * 展开收起
         */
        expand(node) {
            let expand = !node.expand
            this.$set(node, 'expand', expand)
        },
        /**
         * 改变checkbox选中状态
         */
        changeChecked(node, parent) {
            // 字段发生改变
            if (node.name) {
                let checked = node.checked
                // 下拉框选项
                if (node.values) {
                    node.values.forEach((option) => {
                        this.$set(option, 'checked', checked)
                    })
                }
            } else {
                // option选项发生改变
                if (parent.values.every((option) => {
                    return !option.checked
                })) {
                    this.$set(parent, 'checked', false)
                } else {
                    this.$set(parent, 'checked', true)
                }
            }
        },
        /**
         * 获取listFilter详情
         */
        getListFilterDetails() {
            listFilterDetails({
                roleId: this.role.id
            })
                .then((res) => {
                    this.filterList = this.adaptList(res.data)
                })
        },
        /**
         * 适配字段
         */
        adaptList(data) {
            for (let key in data) {
                let all = data[key].all
                let using = data[key].using
                let usingFields = using.map((item) => {
                    return item.name
                })
                all.forEach((item) => {
                    let name = item.name
                    // 如果筛选项在使用，就把筛选项选中
                    if (usingFields.indexOf(name) > -1) {
                        item.checked = true
                    }
                    // 下拉选项，设置下拉选项是否选中
                    if (item.values) {
                        // 找到对应using中的选项
                        let uf = null
                        // 查找uf
                        using.some((m) => {
                            if (m.name == name) {
                                uf = m
                                return true
                            } else {
                                return false
                            }
                        })
                        if (uf) {
                            // 已选中的values
                            let selectedOptions = uf.values.map((option) => {
                                return option.value
                            })
                            item.values.forEach((option) => {
                                if (selectedOptions.indexOf(option.value) > -1) {
                                    option.checked = true
                                }
                            })
                        }
                    }
                })
            }
            return data
        },

        /**
         * 获取选中的
         */
        getSelectFiled() {
            let result = []
            for (let key in this.filterList) {
                let filter = {
                    filterType: key,
                    fields: []
                }
                let all = this.filterList[key].all
                all.forEach((item) => {
                    if (item.checked) {
                        let field = {
                            name: item.name
                        }
                        // 下拉框，values也要传到field中
                        if (item.values) {
                            let values = []
                            item.values.forEach((option) => {
                                if (option.checked) {
                                    values.push({
                                        value: option.value,
                                        desc: option.desc
                                    })
                                }
                            })
                            field.values = values
                        }
                        filter.fields.push(field)
                    }
                })
                result.push(filter)
            }
            return result
        },

        /**
         * 提交权限设置
         */
        submit() {
            this.$refs.form.validate((valid) => {
                if (valid) {
                    let params = {
                        roleId: this.role.id,
                        filters: this.getSelectFiled()
                    }
                    this.loading = true
                    listFilterMod(params)
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
        },
        /**
         * 关闭筛选项设置
         */
        close() {
            this.$store.commit('HIDE_SET_FILTER')
        }
    }
}
</script>
