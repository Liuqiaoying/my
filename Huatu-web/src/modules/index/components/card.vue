<template>
    <div class="card">
        <div class="title">{{ title }}面试</div>
        <div><span class="option">公告</span> | <span class="option">名单</span> | <span class="option">考情</span> | <span class="option">课程</span></div>
    </div>
</template>
<script>
export default {
    props: {
        title: String
    },
    data() {
        return {
            contents: [
                '公告 | ','名单 | ','考情 | ','课程 '
            ]
        }
    }
}
</script>
<style lang="scss">
    .card {
        width: 23%;
        height: 110px;
        box-shadow: 0 0 20px rgba(0,0,0,.1);
        border-radius: 5px;
        margin: 5px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .title {
            font: bold 20px/40px "Microsoft YaHei";
            color: #e6000c;
        }
        .option {
        }
        &:hover {
            background: #e6000c;
            color: #fff ;
            cursor: pointer;
            .title ,.option {
                color: #fff;
                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
</style>