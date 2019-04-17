<template>
    <div class="notice-div">
        <div class="notice-title"><span v-for="(item,index) in notice.title" :key="index">{{ item }}</span></div>
        <div class="notice-content" v-for="(item,index) in notice.options" :key="index">
            <div>{{ item.title }}</div>|    
            <div v-for="(option,index) in item.names" :key="index">
                {{ option }}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        notice: Object
    }
}
</script>
<style lang="scss">
.notice-div {
    .notice-title {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font: bold 22px/26px "Microsoft YaHei";
        color: #eb0600;
        margin-bottom: 20px;
        margin-top: 30px;
        span {
            margin-left: 10px;
            margin-right: 10px;
            cursor: pointer;
        }
    }
    .notice-content {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-top: 10px;
        margin-left: 5px;
        div {
            margin-left: 5px;
            margin-right: 5px;
            cursor: pointer;
            &:hover {
                color: #eb0600;
            }
        }
    }
}
</style>
