<template>
    <div class="main-container menu-config"
        v-loading="loading">
        <container-title title="菜单管理" />
        <div class="main-container-content">
            <div class="tree-list node-tree">
                <ul v-if="nodeData && nodeData.name">
                    <node
                        :node="nodeData"
                        @add="add"
                        module-name="menu"
                        @removeactiveids="removeActiveIds"
                        @edit="eidt"
                        @del="del"
                        @select="select">
                    </node>
                </ul>
                <div v-if="nodeData && !nodeData.name" class="none-list">没有菜单数据</div>
            </div>
        </div>
        <add
            v-if="$store.state.menu.addMenuState"
            @save="fetchList"></add>
    </div>
</template>

<script>

import Node from './components/Node.vue'
import { getList, del } from './request'
import Add from './components/Add.vue'

export default {
    components: {
        Node,
        Add
    },
    data() {
        return {
            nodeData: null,
            activeIds: [0],
            expandIds: [0],
            loading: false
        }
    },
    created() {
        this.fetchList()
    },
    methods: {
        /**
          * 删除节点
          */
        del(item) {
            this.$confirm(
                `确认要删除？删除成功后，该操作无法恢复`,
                '提示',
                {
                    type: 'warning'
                }
            )
                .then(() => {
                    del({
                        id:
                            item.id
                    })
                        .then(() => {
                            this.$store.dispatch('updateGlobalConfig')
                            this.$message({
                                message: '删除成功',
                                type: 'success'
                            })
                            this.fetchList()
                        })
                })
        },

        /**
         * 树刷新后，回填active状态
         */
        fillActiveIds(node) {
            if (this.activeIds.indexOf(node.id) > -1) {
                this.$set(node, '$active', 1)
                if (node.children) {
                    node.children.forEach((item) => {
                        this.fillActiveIds(item)
                    })
                }
            }
        },

        /**
         * 树刷新后，回填expand状态
         */
        fillExpandIds(node) {
            if (this.expandIds.indexOf(node.id) > -1) {
                this.$set(node, '$expand', 1)
                if (node.children) {
                    node.children.forEach((item) => {
                        this.fillExpandIds(item)
                    })
                }
            }
        },

        fetchList() {
            this.loading = true
            getList()
                .then((res) => {
                    this.nodeData = {
                        id: 0,
                        name: '菜单树',
                        level: 0,
                        children: res.data
                    }
                    this.loading = false
                    this.fillActiveIds(this.nodeData)
                    this.fillExpandIds(this.nodeData)
                }, () => {
                    this.nodeData = {}
                    this.loading = false
                })
        },

        /**
         * 新增/编辑校区
         */
        add(node) {
            this.$store.commit('SHOW_ADD_MENU', node)
        },

        eidt(node) {
            this.$store.commit('SHOW_EDIT_MENU', node)
        },

        /**
         * 移除active ids
         */
        removeActiveIds(ids) {
            ids.forEach((item) => {
                let index = this.activeIds.indexOf(item)
                if (index > -1) {
                    this.activeIds.splice(index, 1)
                }
            })
        },

        /**
         * 选择节点
         */
        select(node, isActive, isExpand) {
            if (isActive) {
                this.activeIds.push(node.id)
            } else {
                let index = this.activeIds.indexOf(node.id)
                if (index > -1) {
                    this.activeIds.splice(index, 1)
                }
            }
            if (isExpand) {
                this.expandIds.push(node.id)
            } else {
                let index = this.expandIds.indexOf(node.id)
                if (index > -1) {
                    this.expandIds.splice(index, 1)
                }
            }
        },

        save() {
            this.refresh()
        }
    },

}
</script>
