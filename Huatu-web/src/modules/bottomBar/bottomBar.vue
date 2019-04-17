<template>
    <div class="bottom-div">
        <el-select
            v-model="location"
            placeholder="分校"
            size="middle"
            class="select-style">
            <el-option-group
                v-for="group in locationNames"
                :key="group.label"
                :label="group.label"
                >
                <el-option
                    v-for="item in group.options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-option-group>
        </el-select>
        <el-select
            v-model="testType"
            placeholder="考试类型"
            size="middle"
            class="select-style">
            <el-option
                v-for="item in testTypeNames"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
        </el-select>
        <el-select
            v-model="courseType"
            placeholder="课程类型"
            size="middle"
            class="select-style">
            <el-option
                v-for="item in courseTypeNames"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                >
            </el-option>
        </el-select>
        <el-button class="search-course-button" size="medium">
            搜课
        </el-button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            locationNames: [
                {
                    label: 'A',
                    options: [
                        {
                            value: '0',
                            label: '安徽分校'
                        },
                    ]
                },
                {
                    label: 'B',
                    options: [
                        {
                            value: '1',
                            label: '北京分校'
                        }
                    ]
                },
                {
                    label:"C",
                    options: [
                        {
                            value: '2',
                            label: '大连分校'
                        }
                    ]
                },
                {
                    label: 'D',
                    options: [
                        {
                            value: '3',
                            label: '大连分校',
                        },
                    ]
                },
                {
                    label: 'F',
                    options: [
                        {
                            value: '4',
                            label: '福州分校'
                        }
                    ]
                },
                {
                    label: 'G',
                    options: [
                        {
                            value: '5',
                            label: '广西分校'
                        },
                        {
                            value: '6',
                            label: '广州分校'
                        },
                        {
                            value: '7',
                            label:'贵州分校'
                        },
                        {
                            value: '8',
                            label: '甘肃分校'
                        }
                    ]
                },
                {
                    label: 'H',
                    options: [
                        {
                            value: '9',
                            label: '湖北分校'
                        },
                        {
                            value: '10',
                            label: '呼伦贝尔分校'
                        },
                        {
                            value: '11',
                            label: '呼和浩特分校'
                        }
                    ]
                },
                {
                    label: 'J',
                    options: [
                        {
                            value: '12',
                            label: '吉林分校',
                        },
                        {
                            value: '13',
                            label: '江西分校',
                        },
                        {
                            value: '14',
                            label: '江苏分校',
                        },
                        {
                            value: '15',
                            label: '济南分校'
                        },
                    ]
                },
            ],
            testTypeNames: [
                {
                    value: '0',
                    label: '国考',
                },
                {
                    value: '1',
                    label: '省考',
                },
                {
                    value: '2',
                    label: '事业单位',
                },
                {
                    value: '3',
                    label: '政法干警',
                },
                {
                    value: '4',
                    label: '大学生村官',
                },
                {
                    value: '5',
                    label: '教师招聘',
                },
                {
                    value: '6',
                    label: '军转干',
                },
                {
                    value: '7',
                    label: '选调生'
                },
                {
                    value: '8',
                    label: '招警'
                },
                {
                    value: '9',
                    label: '公选干'
                },
                {
                    value: '10',
                    label: '银行招聘'
                },
                {
                    value: '11',
                    label: '三支一扶'
                },
                {
                    value: '12',
                    label: '市考'
                },
                {
                    value: '13',
                    label: '法检考试'
                }
            ],
            courseTypeNames: [
                {
                    value: '0',
                    label: '笔试课程',
                },
                {
                    value: '1',
                    label: '面试课程',
                }
            ],
            location: '',
            testType: '',
            courseType: '',
        }
    }
}
</script>
