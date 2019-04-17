<template>
    <div class="error-page-container">
        <div class="error-page">
            <img src="//htwuhan.oss-cn-beijing.aliyuncs.com/tool/500.png">
            <div>图兔很抱歉地告诉您：你没有权限访问，请稍后再试</div>
            <div><button onclick="javascript:history.back(-1);">返回</button></div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'page403'
}
</script>

<style lang="scss" scoped>
    .error-page-container {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
    .error-page {
        text-align: center;
        display: table-cell;
        vertical-align: middle;
        text-align: center;
        font-family: PingFangSC-Regular;
        font-size: 20px;
        color: #797D88;
        letter-spacing: 0;
        line-height: 28px;
        > div {
            margin-top: 30px;
        }
        button {
            background: #4E7CFF;
            border-radius: 4px;
            width: 98px;
            height: 40px;
            border: 0;
            color: #fff;
            font-size: 14px;
            outline: none;
            cursor: pointer;
            &:hover {
                background-color: lighten(#4E7CFF, 10%);
            }
        }
    }
</style>
