<template>
    <ul class="operation-log">
        <template v-if="data && data.length">
            <li
                v-for="(item,index) in data"
                :key="index">
                <p>
                    <span>{{item.operatorName}}</span>
                    <span>{{(item.operateTime||item.createTime)|formatDate('yyyy/MM/dd HH:mm')}}</span>
                </p>
                <div v-html="item.content || '-'"></div>
                <el-tag class="tag" size="mini">{{item.operationTypeStr}}</el-tag>
            </li>
        </template>
        <p v-else class="none-list">没有操作日志</p>
    </ul>
</template>

<script>
export default {
    props: {
        data: {
            defalut() {
                return []
            }
        }
    }
}
</script>
