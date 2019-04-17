<template>
    <div class="option-div">
        <div>--{{ option.title }}--</div>
        <div
            v-for="item in option.items"
            :key="item.value"
        >{{ item.label }}
        </div>
    </div>
</template>
<script>
export default {
    props: {
        option: Object
    },
    data() {
        return {
        }
    }
}
</script>