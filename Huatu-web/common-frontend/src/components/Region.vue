<template>
    <div>
        <el-cascader
            :options="options"
            :placeholder="placeholder"
            :clearable="clearable"
            :class="{'has-origin': this.value}"
            :show-all-levels="showAllLevels"
            @change="change"
            :disabled="disabled"
            @active-item-change="handleItemChange"
            :props="props"
            v-model.trim="defaultValue"
            :style="{width: typeof width === 'number' ? (width + 'px') : '100%'}"
        ></el-cascader>
    </div>
</template>

<script>

import { postWithJson } from 'library/utils/serviceUtil'


export default {
    props: {
        width: {
        },
        disabled: {
            default: false
        },
        clearable: {
            default: true
        },
        placeholder: {
            default: '请选择城市'
        },
        showAllLevels: {
            default: true
        },
        level: {
            default: 2
        },
        value: {

        }
    },
    data() {
        return {
            defaultValue: this.value,
            options: [],
            props: {
                label: 'name',
                value: 'id',
                children: 'children'
            }
        }
    },
    watch: {
        value(data) {
            this.defaultValue = data
            this.init()
        }
    },
    mounted() {
        this.init()
    },
    methods: {
        init () {
            let defaultValue = Array.prototype.slice.call(this.defaultValue)
            let getNodeData = (node, level) => {
                this.areaSearch(node, level)
                    .then((data) => {
                    // 获取下一个节点
                        let nodeId = defaultValue.shift()
                        let targetNode = this.getNodeById(nodeId, node.children)

                        if (nodeId && level < this.level) {
                        // 递归查找二级以上的节点
                            getNodeData(targetNode, level + 1)
                        }
                    })
            }
            // 获取一级数据
            this.areaSearch(null, 1)
                .then(() => {
                    if (defaultValue.length) {
                        let nodeId = defaultValue.shift()
                        let targetNode = this.getNodeById(nodeId, this.options)
                        // 获取二级数据
                        getNodeData(targetNode, 2)
                    }
                })
        },
        /**
         * 搜索地域数据
         *
         * @param {Object} node 搜索目标数据的父节点对象
         * @param {number} level 搜索的层级
         */
        areaSearch(node = {}, level) {
            let params = {}
            let id = node && node.id
            if (id) {
                Object.assign(params, {
                    id
                })
            }
            // /common/area/detail.json
            return postWithJson('/common/area/children.json', params)
                .then((res) => {
                    let data = res.data
                    // 当前级别数据不是目标级别，给当前级别的数据加children
                    if (level < this.level) {
                        data.forEach((item) => {
                            item.children = []
                        })
                    }
                    if (id) {
                        this.$set(node, 'children', data)
                    } else {
                        this.options = data
                    }
                    return data
                }).catch(() => {})
        },

        /**
         * 返回节点id所在节点对象中的index
         *
         * @param {number} id 节点id
         * @param {Object} nodes 节点对象
         *
         * @returns {Object} node
         */
        getNodeById(id, nodes) {
            let result = null
            let options = nodes || this.options
            options
                .some((item, index) => {
                    if (item.id === id) {
                        result = item
                        return true
                    }
                    return false
                })
            return result
        },
        /**
         * 要据省份id获取省份item
         */
        getLevelItemById(id) {
            let result = null
            this.options
                .some((item, index) => {
                    if (item.id === id) {
                        result = item
                        return true
                    }
                    return false
                })
            return result
        },
        /**
         * 节点信息发生改变处理
         */
        handleItemChange(val) {
            let length = val.length
            let node = null
            let parents = this.options
            val.forEach((item) => {
                node = this.getNodeById(item, parents)
                parents = node.children
            })
            this.areaSearch(node, length + 1)
        },
        /**
         * 选择城市
         */
        change(value) {
            // console.log('change', value)
            this.$emit('input', value)
            this.$emit('change', value)
        }
    }
}
</script>
