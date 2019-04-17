<template>
    <div class="empty">
        <img width="22" src="//htwuhan.oss-cn-beijing.aliyuncs.com/tool/cry.svg">&nbsp;{{text}}
    </div>
</template>

<script>
/**
 * @file table通用空页面
 */
export default {
    props: {
        text: {
            default: '暂无数据'
        }
    }
}
</script>
