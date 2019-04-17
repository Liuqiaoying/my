<template>
    <div>
        <el-dialog
            :title="role ? '修改角色': '添加角色'"
            :close-on-click-modal="false"
            width="620px"
            :visible.sync="$store.state.role.addRoleState"
            class="add-menu">
            <el-form
                label-position="top"
                :model="form"
                ref="form"
                v-loading="loading"
                :rules="rules"
                class="demo-ruleForm">
                <el-form-item label="角色名称" prop="name">
                    <el-input
                        v-model.trim="form.name"
                        :maxlength="20"
                        placeholder="请输入角色名称">
                    </el-input>
                </el-form-item>
                <el-form-item
                    label="角色描述"
                    prop="remark">
                    <el-input
                        v-model.trim="form.remark"
                        type="textarea"
                        :maxlength="50"
                        :autosize="{minRows: 4, maxRows: 5}"
                        placeholder="请输入角色描述，字符在50个以内"></el-input>
                </el-form-item>
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
import config from '../config'
import { mod, add } from '../request'
export default {
    props: {},
    data() {
        return {
            loading: false,
            rules: config.addRoleRules,
            form: {
                remark: '',
                name: ''
            }
        }
    },
    computed: {
        role() {
            return this.$store.state.role.role
        }
    },
    mounted() {
        let role = this.role
        if (role) {
            this.form.remark = role.remark
            this.form.name = role.name
        }
    },
    methods: {
        /**
         * 关闭筛选项设置
         */
        close() {
            this.$store.commit('HIDE_ADD_ROLE')
        },
        /**
         * 提交
         */
        submit() {
            this.$refs.form.validate((valid) => {
                if (valid) {
                    let form = this.form
                    let role = this.role
                    let params = {
                        name: form.name,
                        remark: form.remark
                    }
                    if (role) {
                        Object.assign(params, {
                            id: role.id
                        })
                    }
                    let request = role ? mod : add
                    this.loading = true
                    request(params)
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
    }
}
</script>
