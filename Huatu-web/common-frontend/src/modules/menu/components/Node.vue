<template>
    <li v-if="node">
        <div class="item"
            :style="{'marginLeft': level * 28 + 'px'}"
            :class="{active: node.$active, expanded:node.$expand}"
            @click.stop="selectNode(node)">
            <i
                v-if="node.children && node.children.length"
                class="left-triangle pointer"></i>
            <span
                :title="node.name"
                class="pointer">{{node.name}}</span>
            <span class="operate">
                    <!--分部没有添加节点-->
                    <el-tooltip placement="top" content="添加">
                        <icon
                            class="icon"
                            name="add"
                            scale="1.5"
                            v-if="hasAuth(moduleName, 'add') && node.type != 1"
                            @click.native.stop="add(node)"></icon>
                    </el-tooltip>
                    <el-tooltip v-if="node.type !== -1" placement="top" content="编辑">
                        <icon
                            class="icon icon-bt-edit"
                            v-if="hasAuth(moduleName, 'mod')"
                            name="edit"
                            scale="1.5"
                            @click.native.stop="edit(node, true)"></icon>
                    </el-tooltip>
                    <el-tooltip v-if="node.type !== -1" placement="top" content="删除">
                        <icon
                            class="icon icon-delete"
                            name="delete"
                            scale="1.5"
                            @click.native.stop="del(node)">
                        </icon>
                    </el-tooltip>
                </span>
        </div>
        <ul v-if="node.$expand">
            <node v-for="(item, index) in node.children"
                :key="item.id"
                :module-name="moduleName"
                :level="level + 1"
                :node="item"
                :parent="node"></node>
        </ul>
    </li>
</template>

<script>
import deepClone from 'library/functions/deepClone'
export default {
    name: 'node',
    props: {
        // 操作哪个模块，比如组织架构&菜单，判断权限不一样
        moduleName: {
        },
        node: {
            type: Object
        },
        level: {
            default: 0
        },
        parent: {
            type: Object
        }
    },
    methods: {
        getTopNode() {
            let topNodeItem = this
            while (!topNodeItem.$parent.nodeData) {
                topNodeItem = topNodeItem.$parent
            }
            return topNodeItem
        },
        edit(item) {
            let topNode = this.getTopNode()
            let node = deepClone(item)
            node.children = null
            topNode.$emit('edit', node)
        },
        del(item) {
            let topNode = this.getTopNode()
            topNode.$emit('del', item)
        },
        /**
         * 添加组织架构
         */
        add(item) {
            let topNode = this.getTopNode()
            let node = deepClone(item)
            // 回填的时候，不要显示children, 把children清掉
            node.children = null
            topNode.$emit('add', node)
        },
        /**
         * 选择节点
         */
        selectNode(node) {
            let topNode = this.getTopNode()
            // 将父级下的所有子节点的active取消掉
            let ids = []
            let rmeoveActive = (nodes) => {
                nodes.forEach(item => {
                    this.$set(item, '$active', 0)
                    ids.push(item.id)
                    if (item.children && item.children.length) {
                        rmeoveActive(item.children)
                    }
                })
            }
            if (node.children && node.children.length) {
                rmeoveActive(node.children)
            }
            topNode.$emit('removeactiveids', ids)
            topNode.$emit('select', node, node.$active ? 0 : 1, node.$expand ? 0 : 1)
            this.$set(node, '$expand', node.$expand ? 0 : 1)
            this.$set(node, '$active', node.$active ? 0 : 1)
        }
    }
}
</script>
