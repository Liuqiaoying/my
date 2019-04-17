<template>
    <div>
        <div class="menu-item" :title="node.name">
            <span class="el-icon-caret-right"
                :class="{expanded: node.expand}"
                @click="expand(node)"
                v-if="node.children && node.children.length"></span>
            <el-checkbox class="checkbox"
                :indeterminate="node.isIndeterminate"
                @change="changeChecked(node)"
                v-model.trim="node.checked">
                {{node.name}}
            </el-checkbox>
        </div>
        <transition name="md-fade-bottom">
            <div style="margin-left: 36px;"
                v-if="node.children && node.children.length && node.expand">
                <menu-list
                    v-for="(item,index) in node.children"
                    :key="index"
                    :parent="node"
                    :node="item">
                </menu-list>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'menuList',
    props: {
        node: {
            type: Object,
            default() {
                return {}
            }
        },
        parent: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    methods: {
        expand(node) {
            node.expand = !node.expand
        },
        changeChecked(node) {
            let topItem = this.getTop()
            topItem.$emit('checkedchange', node)
            // 改变父节点的状态
            let parent = this.parent
            let children = parent.children
            // 子节点选中的个数
            let selectedLength = 0
            if (children && children.length) {
                children.forEach((item) => {
                    if (item.checked) {
                        selectedLength++
                    }
                })
                // 设置父节点的选中状态
                if (selectedLength == children.length) {
                    this.$set(parent, 'isIndeterminate', false)
                    this.$set(parent, 'checked', true)
                } else if (selectedLength > 0) {
                    this.$set(parent, 'isIndeterminate', true)
                    this.$set(parent, 'checked', false)
                } else {
                    this.$set(parent, 'isIndeterminate', false)
                    this.$set(parent, 'checked', false)
                }
            }
        },
        getTop() {
            let topNodeItem = this
            while (!topNodeItem.$parent.span) {
                topNodeItem = topNodeItem.$parent
            }
            return topNodeItem
        }
    }
}
</script>
