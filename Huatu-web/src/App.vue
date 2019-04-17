<template>
    <div id="app">
        <div class="main">
            <main-page></main-page>
        </div>
        <div class="right-bar-bg"></div>
        <div class="right-bar">
            <div class="operation-bar">
                <div class="bar-item" v-for="item in rightBar" :key="item.value">
                    <div class="title-tip"><a class="title-font" :href="item.url" target="_blank">{{ item.title }}</a></div>
                    <a class="bar" :href="item.url" target="_blank"><icon :name="item.name" class="icon"></icon></a>
                </div>
            </div>
        </div>
        <div class="bottom-bar">
            <bottom-bar></bottom-bar>
        </div>
    </div>
</template>

<script>
import MainPage from './modules/index/index'
import BottomBar from './modules/bottomBar/bottomBar'
export default {
    name: 'App',
    components: {
        MainPage,
        BottomBar
    },
    data() {
        return {
            rightBar: [
                {
                    value: '0',
                    name: 'advisory',
                    url: 'http://www.huatu.com/z/zixun/',
                    title: '面授课程咨询'
                },
                {
                    value: '1',
                    name: 'test',
                    url: 'http://www.huatu.com/a/ztk/',
                    title: '公考题库练习'
                },
                {
                    value: '2',
                    name: 'suggest',
                    url: 'http://www.kedoo.net/',
                    title: '申论批改咨询'
                },
                {
                    value: '3',
                    name: 'scoreAdvisory',
                    url: 'http://www.huatu.com/a/aboutus/yijian.html',
                    title: '反馈投诉意见'
                },
                {
                    value: '4',
                    name: 'qq',
                    url: 'http://qm.qq.com/cgi-bin/qm/qr?k=TGZq7va7kKr1IC8jJGYs65CkSAqczC4j',
                    title:'加入学习qq'
                },
                {
                    value: '5',
                    name: 'call',
                    url: 'http://www.huatu.com/a/aboutus/lianxi.html',
                    title:'4006-01-9999'
                },
                {
                    value: '6',
                    name: 'weixin',
                    url: ''
                }
            ]
        }
    },
    computed: {
    },
    created() {
        //
    }
}
</script>

<style lang="scss">
    @import './assets/scss/main.scss';
</style>
