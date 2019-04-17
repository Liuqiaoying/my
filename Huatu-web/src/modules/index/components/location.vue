<template>
    <div class="row">
        <div class="title">{{ location.title }}</div>
        <div class="city" v-for="item in location.cities" :key="item.value">
            <a :href="item.url">{{ item.label }}</a>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            location: Object
        },
        data() {
            return {
            }
        }
    }
</script>
<style lang="scss">
    .row {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 30px;
        width: 345px;
        padding-right: 10px;
        .title {
          font: 25px/30px 'Times New Roman', Times, serif;
          text-align: right;
          margin-right: 30px;
          width: 45px;
          height: 30px; 
        }
        .city {
            width: 50px;
            line-height: 30px;
        }
    }
</style>