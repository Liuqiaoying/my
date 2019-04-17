<template>
    <section class="pager">
        <div class="pager-slot-wrap">
            <slot/>
        </div>
        <el-pagination
            v-if="visiable"
            :background="background"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="pageDto.pageNum"
            :page-sizes="pageDto.pageSizes"
            :page-size="pageDto.pageSize"
            :layout="layout"
            :total="pageDto.count">
        </el-pagination>
    </section>
</template>

<script>
function getTotalPages(pageSize, count) {
    let totalPages = pageSize < 1 ? 1 : Math.ceil(count / pageSize)
    return totalPages || 0
}

/**
 * 基于element-ui的分页组件，配置服务端的pageDto
 *
 * @author lixiaobin
 * @see http://gitlab.huatuop.com/wuyan/common-frontend/blob/master/src/components/Pager.vue
 */
export default {
    props: {
        // 分页显示样式，默认显示总数、分页大小、上一页、分页num、下一页，跳转器
        layout: {
            default: 'total, sizes, prev, pager, next, jumper'
        },
        // pageDto
        value: {
            type: Object,
            default: function() {
                return {
                    'count': 0,
                    'curPageCount': 1,
                    'pageNum': 0,
                    'pageSize': 20,
                    'totalPageNum': 1
                }
            }
        },
        // 分页器是否带背景
        background: {
            type: Boolean,
            default: true
        }
    },
    computed: {
        visiable() {
            if (!this.value) {
                return false
            }
            else {
                return getTotalPages(this.pageDto.pageSize, this.pageDto.count) > 0
            }
        }
    },
    data () {
        return {
            // 当前的pageDto
            pageDto: this.value
        }
    },
    methods: {
        /**
         * 分页大小发生改变
         *
         * @param {value} 当前的分页大小
         */
        handleSizeChange(val) {
            this.$emit('sizechange', val)
        },
        /**
         * 分页码发生改变处理
         *
         * @param {value} 当前的分页码
         */
        handleCurrentChange(val) {
            this.$emit('currentchange', val)
        }
    }
}
</script>
<style lang="scss">
    .pager{
        position: relative;
    }
    .pager-slot-wrap{
        position: absolute;
        left: 10px;
        top: -10px;
    }
    .pager-legend {
        margin-top: 14px;
        color: #666;
        .svg-icon {
            display: inline-block;
            vertical-align: middle;
        }
        i {
            font-style: normal;
            display: inline-block;
            vertical-align: middle;
            margin-left: 2px;
            margin-right: 20px;
        }
    }
</style>
