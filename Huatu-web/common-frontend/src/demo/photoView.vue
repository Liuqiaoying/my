<template>
    <div>
        <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
        <div class="pswp--minimal--dark">
        <img src="https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg" preview>
        </div>
    </div>
</template>


<script>
import VuePreview from 'vue-preview'
import Vue from 'vue'
Vue.use(VuePreview, {
    mainClass: 'pswp--minimal--dark',
    barsSize: { top: 0, bottom: 0 },
    captionEl: false,
    fullscreenEl: false,
    shareEl: false,
    tapToClose: true,
    history: false,
    tapToToggleControls: false
})
export default {
    data () {
        return {
            slide1: [
                {
                    src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
                    msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
                    w: 600,
                    h: 400
                },
                {
                    src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
                    msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
                    w: 1200,
                    h: 900
                }
            ]
        }
    },
    methods: {
        handleClose () {
            console.log('close event')
        }
    }
}
</script>