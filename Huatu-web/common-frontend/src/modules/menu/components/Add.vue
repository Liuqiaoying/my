<template>
    <div>
        <el-dialog
            :title="!menu.id ? command + '一级菜单': command + '子菜单'"
            :close-on-click-modal="false"
            :visible.sync="$store.state.menu.addMenuState"
            class="add-menu">
            <el-form
                label-position="top"
                :model="form"
                ref="form"
                v-loading="loading"
                :rules="menuRules"
                class="demo-ruleForm">
                <el-form-item label="菜单名称" prop="name" required>
                    <el-input v-model.trim="form.name" placeholder="菜单名称" :maxlength="10">
                    </el-input>
                </el-form-item>
                <el-form-item label="备注" prop="remark">
                    <el-input
                        v-model.trim="form.remark"
                        type="textarea"
                        :maxlength="200"
                        :autosize="{minRows: 4,maxRows: 5}"
                        placeholder="备注"></el-input>
                </el-form-item>
                <el-row :gutter="20">
                    <el-col :span="8" class="module"
                        v-for="(item, key) in moduleList"
                        :key="key">
                        <span class="el-tree-node__expand-icon el-icon-caret-right"
                            :class="{expanded: item.expand}"
                            @click="expand(item)"></span>&nbsp;&nbsp;
                        <el-checkbox class="checkbox"
                            :indeterminate="item.isIndeterminate"
                            @change="changeModuleSelected(item)"
                            v-model.trim="item.checked">{{item.desc}}</el-checkbox>
                        <transition name="md-fade-bottom">
                            <ul v-show="item.expand">
                                <li v-for="(sub, index) in item.permissions"
                                    :key="index">
                                    <el-checkbox-group v-model.trim="item.checkedList">
                                        <el-checkbox
                                            class="checkbox"
                                            :title="sub.desc"
                                            @change="changeSubModule(item, sub)"
                                            :label="''+sub.permission">{{sub.desc}}</el-checkbox>
                                    </el-checkbox-group>
                                </li>
                            </ul>
                        </transition>
                    </el-col>
                </el-row>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click.native.prevent="close">取消</el-button>
                <el-button type="primary" :disabled="loading" @click.native.prevent="submit">保存</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import config from '../config'
import {
    mod,
    add,
    showModules
} from '../request'
export default {
    props: {},
    data() {
        return {
            form: {
                remark: '',
                name: ''
            },
            menuRules: config.menuRules,
            loading: false,
            moduleList: [],
            command: '添加'
        }
    },
    computed: {
        menu() {
            return this.$store.state.menu.menu
        },
        isEdit() {
            return this.$store.state.menu.isEdit
        }
    },
    created() {
        this.showModules()
        if (this.isEdit) {
            let menu = this.menu
            this.command = '编辑'
            this.form.name = menu.name
            this.form.remark = menu.remark
        }
    },
    methods: {
        /**
         * 改变模块的选择状态
         */
        changeModuleSelected(item) {
            item.isIndeterminate = false
            if (item.checked) {
                item.checkedList = []
                item.permissions.forEach((m) => {
                    item.checkedList.push(String(m.permission))
                })
            } else {
                item.checkedList = []
            }
        },
        /**
         * 改变子模块的选中状态
         */
        changeSubModule(parent, sub) {
            let checkedList = parent.checkedList
            if (checkedList.length) {
                if (checkedList.length === parent.permissions.length) {
                    this.$set(parent, 'isIndeterminate', false)
                    this.$set(parent, 'checked', true)
                } else {
                    this.$set(parent, 'isIndeterminate', true)
                    this.$set(parent, 'checked', false)
                }
            } else {
                this.$set(parent, 'isIndeterminate', false)
                this.$set(parent, 'checked', false)
            }
        },
        expand(node) {
            node.expand = !node.expand
        },
        /**
         * 显示系统的模块
         */
        showModules() {
            showModules().then(res => {
                let data = res.data
                for (let key in data) {
                    if (data.hasOwnProperty(key)) {
                        data[key].checked = false
                        data[key].expand = false
                        data[key].checkedList = []
                    }
                }
                this.moduleList = data
                // 编辑回填模块权限
                if (this.isEdit) {
                    for (let key in this.menu.permissions) {
                        // 模化所属权限值
                        let modulePermissionValue = this.menu.permissions[key]
                        let module = this.moduleList[key]
                        if (this.menu.permissions.hasOwnProperty(key)) {
                            // 查找模块列表中所有的子模块权限
                            let permissions = module.permissions.map((m) => {
                                return m.permission
                            })
                            // 如果用 modulePermissionValue & 子模块有权限，说明这个子模块有权限，要勾上
                            permissions.forEach(permission => {
                                if (modulePermissionValue & permission) {
                                    this.moduleList[key].checkedList.push(String(permission))
                                    // 有权限的模块都展开
                                    this.moduleList[key].expand = true
                                }
                            })
                            // 如果子模块全选了，就把父模块选中
                            if (
                                permissions.every(n => {
                                    return module.checkedList.indexOf(String(n)) > -1
                                })
                            ) {
                                this.moduleList[key].checked = true
                            } else if (
                                permissions.some(n => {
                                    return module.checkedList.indexOf(String(n)) > -1
                                })
                            ) {
                                this.moduleList[key].isIndeterminate = true
                            }
                        }
                    }
                }
            })
        },
        // 获取选中的modules
        getPermissions() {
            let permissions = {}
            let moduleList = this.moduleList
            for (let key in moduleList) {
                if (moduleList.hasOwnProperty(key)) {
                    if (moduleList[key].checkedList.length) {
                        permissions[key] = moduleList[key].checkedList.reduce((a, b) => {
                            return a | b
                        })
                    }
                }
            }
            return permissions
        },
        /**
         * 保存菜单信息
         */
        submit() {
            this.$refs.form.validate(valid => {
                if (valid) {
                    this.loading = true
                    let form = this.form
                    let menu = this.menu
                    let request = this.isEdit ? mod : add
                    let params = {
                        name: form.name,
                        remark: form.remark,
                        pid: this.isEdit ? menu.pid : menu.id,
                        level: this.isEdit ? menu.level : menu.level + 1,
                        permissions: JSON.stringify(this.getPermissions())
                    }
                    if (this.isEdit) {
                        Object.assign(params, {
                            id: menu.id
                        })
                    }
                    request(params).then(
                        res => {
                            this.$message({
                                type: 'success',
                                message: '保存成功'
                            })
                            setTimeout(() => { this.loading = false })
                            this.$emit('save')
                            this.close()
                        },
                        () => {
                            setTimeout(() => { this.loading = false })
                        }
                    )
                }
            })
        },
        /**
         * 取消新增/编辑 菜单
         */
        close() {
            this.$store.commit('HIDE_ADD_MENU')
        }
    }
}
</script>
