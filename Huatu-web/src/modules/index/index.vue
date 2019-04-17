<template>
    <div class="index">
        <div class="top-bar">
            <div class="logo">
                <a href="http://www.huatu.com/" title="公务员考试网"></a>
            </div>
            <el-menu mode="horizontal" @select="handleSelect" class="menu-bar" background-color="#333" text-color="#fff" active-text-color="#e92930">
                <el-submenu index="1">
                    <template slot="title">网站导航</template>
                    <el-menu-item>
                        <div class="navigation">
                            <div class="navi-item" v-for="item in menu1" :key="item.value">
                                <div class="navi-header">{{ item.title }}</div>
                                <div class="navi-body">
                                    <div class="navi-div" v-for="option in item.options" :key="option.value">{{ option.label }}</div>
                                </div>
                            </div>
                        </div>
                    </el-menu-item>

                </el-submenu>
                <el-submenu index="2">
                    <template slot="title">选课报班</template>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title">师资力量</template>
                    <el-menu-item v-for="item in menu3" :key="item.value" :index="'5-'+ item.value" >{{ item.label }}</el-menu-item>
                </el-submenu>
                <el-submenu index="4">
                    <template slot="title">华图在线</template>
                    <el-menu-item v-for="item in menu4" :key="item.value" :index="'5-'+ item.value" >{{ item.label }}</el-menu-item>
                </el-submenu>
                <el-submenu index="5">
                    <template slot="title">走进华图</template>
                    <el-menu-item v-for="item in menu5" :key="item.value" :index="'5-'+ item.value" >{{ item.label }}</el-menu-item>
                </el-submenu>
                <el-submenu index="6">
                    <template slot="title">加入我们</template>
                </el-submenu>
                <el-submenu index="7">
                    <template slot="title">微信</template>
                </el-submenu>
                <el-submenu index="8">
                    <template slot="title">华图教育APP</template>
                </el-submenu>
            </el-menu>
        </div>
        <div class="demonstration">
            <el-carousel trigger="click" height="562px">
                <el-carousel-item v-for="item in bgImages" :key="item.value">
                    <img :src="item.url"/>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="city-div">
            <div class="city-Nav">
                <location-card class="city-item" v-for="item in cityNav" :key="item.value" :location="item">
                </location-card>
                <div class="search-city">
                    <div class="city-txt"></div>
                    <div class=""></div>
                </div>
            </div>
        </div>
        <div class="examInfoWrap">
            <div class="first">
                <div class="title">面试专岗专训课程</div>
                <div class="button-div">
                    <el-button class="button-font" v-for="item in examInfoButton" :key="item.value">
                        {{ item.name }}
                    </el-button>
                </div>
            </div>
            <div class="second">
                <div class="left">
                    <div class="header">
                        <div class="header-left">
                            <a href="http://ah.huatu.com/">2019国考六大岗位最低进面分数变化分析</a>
                        </div>
                        <div class="header-right"><a>重要提醒: 2019国考海关系统25日面试</a></div>
                    </div>
                    <div class="div1">
                        <div class="left-notice">
                            <div class="notice-left">
                                <div-notice v-for="(item,index) in Notices" :key="index" :notice="item"></div-notice>
                            </div>
                        </div>
                        <div class="right-carousel">
                            <el-carousel trigger="click" class="carousel" height="246px">
                                <el-carousel-item v-for="item in bgImages" :key="item.value">
                                    <img :src="item.url"/>
                                </el-carousel-item>
                            </el-carousel>
                        </div>
                    </div>
                    <div class="div2">
                        <card v-for="(item,index) in CardList" :key="index" :title="item"></card>
                    </div>
                    <div class="div3">
                        <el-select v-for="(option,index) in optionLists"
                            :v-model="'value'+ index"
                            :key="index"
                            :placeholder="option.title"
                            size="medium">
                            <el-option
                                v-for="item in option.items"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                        <el-button class="search">
                        查询国考分数线
                        </el-button>
                    </div>
                </div>
                <div class="right">
                    <div class="header">
                        <div class="header-left">
                            <a href="http://ah.huatu.com/">热门考试</a>
                        </div>
                    </div>
                    <div-notice v-for="(item,index) in rightNotices" :key="index" :notice="item"></div-notice>
                </div>
            </div>
        </div>
        <div class="card-list">
            <div class="item">
                <div class="card-item" v-for="(item,index) in cardViews" :key="index">
                    <div class="card-before">
                        <img :src="item.url"/>
                    </div>
                    <div class="card-title">{{ item.title }}</div>
                    <div class="card-after">
                        <el-button size="mini" :type="item.type" plain round v-for="(option,index) in item.names" :key="index">{{ option }}</el-button>
                    </div>
                </div>
            </div>
            <div class="img-bg">
                <img src="http://u3.huatu.com/uploads/allimg/190109/358789-1Z1091531562K.jpg">
            </div>
            <div class="clearfix">
                <div class="inx-hots">
                    <div class="hots-header">
                        <div class="title">聚焦热点</div>
                        <div class="more">更多></div>
                    </div>
                    <div class="hots-content">
                        <el-card class="box-card" v-for="(item,index) in hotLists" :key="index">
                            <div class="logo"><img :src="item.url"/></div>
                            <div class="title">
                                <div class="div-style" v-for="(title,index) in item.titles" :key="index">{{ title }}</div>
                            </div>
                            <div class="option" v-for="(option,index) in item.options" :key="index" >
                                .<div class="content div-style" v-for="(content,index) in option.contents" :key="index">{{ content }}</div>
                            </div>
                        </el-card>
                    </div>
                </div>
                <div class="inx-live">
                    <div class="live-header">
                        <div class="title">今日直播</div>
                        <div class="more">换一换</div>
                    </div>
                    <div class="live-content">
                        <el-card class="box-card"></el-card>
                    </div>
                </div>
            </div>
            <div class="img-bg">
                <img src="http://u3.huatu.com/uploads/allimg/190109/358789-1Z109153334202.jpg"/>
            </div>
        </div>
        <!-- <div class="inx-calendar">
            <div class="inx-tit">
                <div class="name">考试日历</div>
                <div class="more">更多></div>
            </div>
            <div class="inx-content">
                <div class="cal">
                </div>
                <div class="exam">
                    <div class="header">
                        <el-select v-for="(item,index) in examLists" :key="index" :placeholder="item.title" v-model="examValue[index]">
                            <option
                                v-for="(option,index) in item.options"
                                :key="option.value"
                                :label="option.label"
                                :value="option.value">
                            </option>
                        </el-select>
                    </div>
                </div>
            </div>
        </div> -->
        <div class="bottom-div">
            <div class="stu-ser">
                <div class="title">考生服务</div>
                <div class="footer">
                    <div class="footer-left">
                        <div class="footer-div" v-for="(item,index) in helpTxts" :key="index">
                            <div class="top">{{ item.title }}</div>
                            <div class="bottom"><span v-for="(option,index) in item.options" :key="index">{{ option }}</span></div>
                        </div>
                    </div>
                    <div class="footer-right">
                        <div class="phone">4006-01-9999</div>
                        <div class="time">咨询电话（08:30-17:30）</div>
                        <div class="phone">在线客服</div>
                        <div class="time">投诉建议电话:010-68296100</div>
                    </div>
                </div>
            </div>
            <div class="copy">
                <div><span v-for="(item,index) in copyLists" :key="index">
                    {{ item }} |
                </span></div>
                <div>京ICP备11028696号-11 京ICP证130150号 京公网安备11010802021470号</div>
            </div>
        </div>

    </div>
</template>
<script>
import LocationCard from './components/location'
import DivNotice from './components/divNotice'
import Card from './components/card'
import { getMenu1, getMenu3 } from './request'
export default {
    components: {
        LocationCard,
        DivNotice,
        Card,
    },
    data() {
        return {
            menu1: [],
            menu2: [],
            menu3: [],
            menu4: [
                {
                    value: '1',
                    label: '在线课程'
                },
                {
                    value: '2',
                    label: '备考助手'
                },
                {
                    value: '3',
                    label: '万人模考'
                }
            ],
            menu5: [
                {
                    value: '1',
                    label: '华图简介'
                },
                {
                    value: '2',
                    label: '华图高管'
                },
                {
                    value: '3',
                    label: '华图文化'
                },
                {
                    value: '4',
                    label: '华图刊物'
                },
                {
                    value: '5',
                    label: '华图荣耀'
                },
                {
                    value: '6',
                    label: '媒体关注'
                },
                {
                    value: '7',
                    label: '供应商平台'
                },
                {
                    value: '8',
                    label: '联系我们'
                },
            ],
            bgImages: [
                {
                    value: '0',
                    url: 'http://u3.huatu.com/huatuzb/haoyun/2019/02/banner0211.png'
                },
                {
                    value: '1',
                    url: 'http://u3.huatu.com/uploads/allimg/190218/358789-1Z21Q00223951.jpg'
                },
                {
                    value: '2',
                    url: 'http://u3.huatu.com/huatuzb/chenzj/banner0201b.jpg'
                },
                {
                    value: '3',
                    url: 'http://u3.huatu.com/huatuzb/haoyun/2019/02/banner0201b.jpg'
                },
                {
                    value: '4',
                    url: 'http://u3.huatu.com/huatuzb/haoyun/2018/12/banner1214.jpg'
                },
                {
                    value: '5',
                    url: 'http://u3.huatu.com/huatuzb/haoyun/2019/01/banner0123.jpg'
                },
                {
                    value: '6',
                    url: 'http://u3.huatu.com/huatuzb/haoyun/2019/01/banner0125d.jpg'
                }
            ],
            cityNav: [
                {
                    value: '0',
                    title: 'A-F',
                    cities: [
                        {
                            value: '0',
                            label: '安徽',
                            url: 'http://ah.huatu.com/'
                        },
                        {
                            value: '1',
                            label: '北京',
                            url: 'http://ah.huatu.com/'
                        },
                        {
                            value: '2',
                            label: '重庆',
                            url: 'http://ah.huatu.com/'
                        },
                        {
                            value: '3',
                            label: '福建',
                            url: 'http://ah.huatu.com/'
                        }
                    ]
                },
                {
                    value: '2',
                    title: 'H',
                    cities: [
                        {
                            value: '0',
                            label: '河北',
                            url: 'http://ah.huatu.com/'
                        },
                        {
                            value: '1',
                            label: '海南',
                            url: 'http://ah.huatu.com/'
                        },
                        {
                            value: '2',
                            label: '河南',
                            url: 'http://ah.huatu.com/'
                        },
                        {
                            value: '3',
                            label: '湖北',
                            url: 'http://ah.huatu.com/'
                        },
                        {
                            value: '4',
                            label: '黑龙江',
                            url: 'http://ah.huatu.com/'
                        }
                    ]
                },
                {
                    value: '2',
                    title: 'G',
                    cities: [
                        {
                            value: '0',
                            label: '广东',
                            url: 'http://ah.huatu.com/'
                        },
                        {
                            value: '1',
                            label: '广西',
                            url: 'http://ah.huatu.com/'
                        },
                        {
                            value: '2',
                            label: '贵州',
                            url: 'http://ah.huatu.com/'
                        },
                        {
                            value: '3',
                            label: '甘肃',
                            url: 'http://ah.huatu.com/'
                        }
                    ]
                },
                {
                    value: '3',
                    title: 'J',
                    cities: [
                        {
                            value: '0',
                            label: '吉林',
                            url: 'http://ah.huatu.com/'
                        },
                        {
                            value: '1',
                            label: '江西',
                            url: 'http://ah.huatu.com/'
                        },
                        {
                            value: '2',
                            label: '江苏',
                            url: 'http://ah.huatu.com/'
                        }
                    ]
                },
                {
                    value: '4',
                    title: 'L-Q',
                    cities: [
                        {
                            value: '0',
                            label: '辽宁',
                            url: 'http://ah.huatu.com/'
                        },
                        {
                            value: '1',
                            label: '宁夏',
                            url: 'http://ah.huatu.com/'
                        },
                        {
                            value: '2',
                            label: '青海',
                            url: 'http://ah.huatu.com/'
                        },
                        {
                            value: '3',
                            label: '内蒙古',
                            url: 'http://ah.huatu.com/'
                        }
                    ]
                },
                {
                    value: '5',
                    title: 'S-T',
                    cities: [
                        {
                            value: '0',
                            label: '山西',
                            url: 'http://ah.huatu.com/'
                        },
                        {
                            value: '1',
                            label: '上海',
                            url: 'http://ah.huatu.com/'
                        },
                        {
                            value: '2',
                            label: '山东',
                            url: 'http://ah.huatu.com/'
                        },
                        {
                            value: '3',
                            label: '四川',
                            url: 'http://ah.huatu.com/'
                        },
                        {
                            value: '4',
                            label: '陕西',
                            url: 'http://ah.huatu.com/'
                        },
                        {
                            value: '5',
                            label: '天津',
                            url: 'http://ah.huatu.com/'
                        }
                    ]
                },
                {
                    value: '6',
                    title: 'X-Z',
                    cities: [
                        {
                            value: '0',
                            label: '西藏',
                            url: 'http://ah.huatu.com/'
                        },
                        {
                            value: '1',
                            label: '新疆',
                            url: 'http://ah.huatu.com/'
                        },
                        {
                            value: '2',
                            label: '云南',
                            url: 'http://ah.huatu.com/'
                        },
                        {
                            value: '3',
                            label: '浙江',
                            url: 'http://ah.huatu.com/'
                        }
                    ]
                },
            ],
            examInfoButton: [
                {
                    value: '0',
                    name: '税务系统'
                },
                {
                    value: '1',
                    name: '海关系统'
                },
                {
                    value: '2',
                    name: '铁路公安'
                },
                {
                    value: '3',
                    name: '银保监会'
                },
                {
                    value: '4',
                    name: '统计局'
                },
                {
                    value: '5',
                    name: '海事局'
                },
                {
                    value: '6',
                    name: '外交部'
                },
                {
                    value: '7',
                    name: '审计署'
                }
            ],
            Notices: [
                {
                    title: [
                        '国考面试名单', '面试题', '冲刺预测课', '接元宵', '猜灯谜'
                    ],
                    options: [
                        {
                            title: '公告',
                            names: [
                                '海关系统递补', '邮政管理局', '交通运输部系统递补', '气象局递补'
                            ]
                        },
                        {
                            title: '查分',
                            names: [
                                '进面分数最高分|最低分', '进面人数汇总', '面试名单及分数分布'
                            ]
                        }
                    ]
                },
                {
                    title: [
                        '面试公告', '资格复审', '探访面试班纪实', '1对1测评'
                    ],
                    options: [
                        {
                            title: '时间',
                            names: [
                                '21日起地震局', '银保监会3月9日', '21日水利部', '21日起海事局'
                            ]
                        },
                        {
                            title: '推荐',
                            names: [
                                '国考面试冲刺课', '七天实战训练营', '面试热点', '试题', '华图国面班'
                            ]
                        }
                    ]
                }
            ],
            rightNotices: [
                {
                    title: [
                        '京考课程', '4月20日各省联考'
                    ],
                    options: [
                        {
                            title: '北京',
                            names: [
                                '19日面试名单', '京考资格复审公告'
                            ]
                        },
                        {
                            title: '山西',
                            names: [
                                '选调生213人', '报名入口', '职位', '专业分类'
                            ]
                        },
                        {
                            title: '四川',
                            names: [
                                '成绩查询入口', '晒分查排名', '1元面试礼包'
                            ]
                        },
                        {
                            title: '江苏',
                            names: [
                                '省考考前密卷', '无忧协议班', '进面分数'
                            ]
                        }
                    ]
                },
                {
                    title: [
                        '青岛招4181人', '临齐招1688人'
                    ],
                    options: [
                        {
                            title: '国家招聘',
                            names: [
                                '国家消防救援队招18665人', '职位表'
                            ]
                        },
                        {
                            title: '护士资格',
                            names: [
                                '护士资格备考礼包', '考试精品体验课'
                            ]
                        },
                        {
                            title: '医疗卫生',
                            names: [
                                '医师资格网上报名', '医疗单位考勤'
                            ]
                        },
                        {
                            title: '军队文职',
                            names: [
                                '军队文职备考', '职位检索', '面试1元'
                            ]
                        }
                    ]
                },
                {
                    title: ['武汉市事业单位招1475人', '课程'],
                    options: [
                        {
                            title: '事业单位',
                            names: [
                                '黄河水利委员会招210人', '时政周'
                            ]
                        },
                        {
                            title: '选调招聘',
                            names: [
                                '福建选调生准考证打印', '选调生笔'
                            ]
                        },
                        {
                            title: '公安招警',
                            names: [
                                '公安院校招警成绩查询', '全国各省'
                            ]
                        },
                        {
                            title: '选调生',
                            names: [
                                '湖北招800人', '学习包', '课程', '河北'
                            ]
                        }
                    ]
                }
            ],
            CardList: [
                '税务系统', '海关系统', '海事局', '外交部', '铁路公安', '银保监会', '统计局', '审计署'
            ],
            optionLists: [
                {
                    title: '请选择机构性质',
                    items: [
                        {
                            value: '选项1',
                            label: '中央党群机关'
                        },
                        {
                            value: '选项2',
                            label: '中央国家行政机关'
                        },
                        {
                            value: '选项3',
                            label: '中央国家行政机关省级'
                        },
                        {
                            value: '选项4',
                            label: '中央国家行政机关参照'
                        }
                    ]
                },
                {
                    title: '请选择招录机关',
                    items: [
                        {
                            value: '选项1',
                            label: '中央纪委国家监察委'
                        },
                        {
                            value: '选项2',
                            label: '中央办公厅'
                        },
                        {
                            value: '选项3',
                            label: '中央档案馆国家档案局'
                        },
                        {
                            value: '选项4',
                            label: '中央组织部'
                        },
                        {
                            value: '选项5',
                            label: '中央宣传部'
                        },
                        {
                            value: '选项6',
                            label: '中央对外联络部'
                        },
                        {
                            value: '选项7',
                            label: '中央网信办'
                        },
                        {
                            value: '选项8',
                            label: '中国外文局'
                        },
                        {
                            value: '选项9',
                            label: '全国人大'
                        },
                        {
                            value: '选项10',
                            label: '民进中央'

                        }
                    ]
                },
                {
                    title: '请选择用人司局',
                    items: [
                        {
                            value: '选项1',
                            label: '国内工作部'

                        }
                    ]
                },
                {
                    title: '请选择招考岗位',
                    items: [
                        {
                            value: '选项2',
                            label: '行业自律处主任科员'
                        }
                    ]
                }
            ],
            value0: '',
            value1: '',
            value2: '',
            options1: [
                {
                    value: '选项1',
                    label: '中央党群机关'
                },
                {
                    value: '选项2',
                    label: '中央国家行政机关'
                },
                {
                    value: '选项3',
                    label: '中央国家行政机关省级'
                }
            ],
            cardViews: [
                {
                    type: 'primary',
                    title: '地方公务员考试',
                    url: 'http://www.huatu.com/images/2018css/images/icon_pro01.png',
                    names: [
                        '报考信息', '报考指导', '备考资料', '试题资料', '面试热点', '申论热点', '面授课程', '网络课程'
                    ]
                },
                {
                    type: 'primary',
                    title: '国家公务员考试',
                    url: 'http://www.huatu.com/images/2018css/images/icon_pro02.png',
                    names: [
                        '报考信息', '报考指导', '备考资料', '试题资料', '面试热点', '申论热点', '面授课程', '网络课程'

                    ]
                },
                {
                    type: 'success',
                    title: '教师招聘考试',
                    url: 'http://www.huatu.com/images/2018css/images/icon_pro03.png',
                    names: [
                        '报考信息', '报考指导', '备考资料', '试题资料', '面试热点', '申论热点', '面授课程', '网络课程'

                    ]
                },
                {
                    type: 'success',
                    title: '医疗卫生考试',
                    url: 'http://www.huatu.com/images/2018css/images/icon_pro04.png',
                    names: [
                        '报考信息', '报考指导', '备考资料', '试题资料', '面试热点', '申论热点', '面授课程', '网络课程'

                    ]
                },
                {
                    type: 'warning',
                    title: '金融招聘考试',
                    url: 'http://www.huatu.com/images/2018css/images/icon_pro05.png',
                    names: [
                        '报考信息', '报考指导', '备考资料', '试题资料', '面试热点', '申论热点', '面授课程', '网络课程'

                    ]
                },
                {
                    type: 'info',
                    title: '事业单位考试',
                    url: 'http://www.huatu.com/images/2018css/images/icon_pro06.png',
                    names: [
                        '报考信息', '报考指导', '备考资料', '试题资料', '面试热点', '申论热点', '面授课程', '网络课程'

                    ]
                },
                {
                    type: 'primary',
                    title: '公选遴选考试',
                    url: 'http://www.huatu.com/images/2018css/images/icon_pro07.png',
                    names: [
                        '报考信息', '报考指导', '备考资料', '试题资料', '面试热点', '申论热点', '面授课程', '网络课程'

                    ]
                },
                {
                    type: 'success',
                    title: '部队考试',
                    url: 'http://www.huatu.com/images/2018css/images/icon_pro08.png',
                    names: [
                        '报考信息', '报考指导', '备考资料', '试题资料', '面试热点', '申论热点', '面授课程', '网络课程'

                    ]
                },
                {
                    type: 'warning',
                    title: '课程商场',
                    url: 'http://www.huatu.com/images/2018css/images/icon_pro09.png',
                    names: [
                        '报考信息', '报考指导', '备考资料', '试题资料', '面试热点', '申论热点', '面授课程', '网络课程'

                    ]
                },
                {
                    type: 'primary',
                    title: '学员服务',
                    url: 'http://www.huatu.com/images/2018css/images/icon_pro10.png',
                    names: [
                        '报考信息', '报考指导', '备考资料', '试题资料', '面试热点', '申论热点', '面授课程', '网络课程'

                    ]
                }
            ],
            hotLists: [
                {
                    url: 'http://www.huatu.com/images/2018css/images/inx_tit01.png',
                    titles: [
                        '2019国新办首批消防员招3万人', '报名'
                    ],
                    options: [
                        {
                            contents: [
                                '2019广州银行分行社会招聘', '银行、农信'
                            ]
                        },
                        {
                            contents: [
                                '河北张家口沽源县招132人', '云南德宏州公安'
                            ]
                        },
                        {
                            contents: [
                                '福建中医药大学招86人', '河北京东祥和人民医院'
                            ]
                        },
                        {
                            contents: [
                                '湖北大学专项招聘170名', '新疆且木县公安辅'
                            ]
                        }
                    ]
                },
                {
                    url: 'http://www.huatu.com/images/2018css/images/inx_tit02.png',
                    titles: [
                        '2019联考申论热点', '报名'
                    ],
                    options: [
                        {
                            contents: [
                                '2019广州银行分行社会招聘', '银行、农信'
                            ]
                        },
                        {
                            contents: [
                                '河北张家口沽源县招132人', '云南德宏州公安'
                            ]
                        },
                        {
                            contents: [
                                '福建中医药大学招86人', '河北京东祥和人民医院'
                            ]
                        },
                        {
                            contents: [
                                '湖北大学专项招聘170名', '新疆且木县公安辅'
                            ]
                        }
                    ]
                },
                {
                    url: 'http://www.huatu.com/images/2018css/images/inx_tit03.png',
                    titles: [
                        '2019多省公务员联考笔试时间', '报名'
                    ],
                    options: [
                        {
                            contents: [
                                '2019广州银行分行社会招聘', '银行、农信'
                            ]
                        },
                        {
                            contents: [
                                '河北张家口沽源县招132人', '云南德宏州公安'
                            ]
                        },
                        {
                            contents: [
                                '福建中医药大学招86人', '河北京东祥和人民医院'
                            ]
                        },
                        {
                            contents: [
                                '湖北大学专项招聘170名', '新疆且木县公安辅'
                            ]
                        }
                    ]
                }, {
                    url: 'http://www.huatu.com/images/2018css/images/inx_tit04.png',
                    titles: [
                        '从大数据看春运:中国速度助力春节', '报名'
                    ],
                    options: [
                        {
                            contents: [
                                '2019广州银行分行社会招聘', '银行、农信'
                            ]
                        },
                        {
                            contents: [
                                '河北张家口沽源县招132人', '云南德宏州公安'
                            ]
                        },
                        {
                            contents: [
                                '福建中医药大学招86人', '河北京东祥和人民医院'
                            ]
                        },
                        {
                            contents: [
                                '湖北大学专项招聘170名', '新疆且木县公安辅'
                            ]
                        }
                    ]
                }
            ],
            helpTxts: [
                {
                    title: '帮助中心',
                    options: [
                        '联系我们', '在线咨询', '官方微博', '官方微信'
                    ]
                },
                {
                    title: '新手指导',
                    options: [
                        '面授课程', '网站导航', '各地华图'
                    ]
                },
                {
                    title: '在线学习平台',
                    options: [
                        '学员会员专区', '直播学员专区', '华图教育APP'
                    ]
                },
                {
                    title: '免费资料',
                    options: [
                        '招考公告', '面试备考', '考试题库', '热点解析'
                    ]
                }
            ],
            copyLists: [
                '华图简介', '华图荣耀', '华图公益', '媒体关注', '联系我们', '法律声明', '意见反馈', '网站地图', '友情链接'
            ],
            examLists: [
                {
                    title: '选择省份',
                    options: [
                        {
                            value: '0',
                            label: '北京'
                        },
                        {
                            value: '1',
                            label: '天津'
                        },
                        {
                            value: '2',
                            label: '上海'
                        },
                        {
                            value: '3',
                            label: '重庆'
                        }
                    ]

                },
                {
                    title: '选择城市',
                    options: [
                        {
                            value: '4',
                            label: '地级'
                        },
                        {
                            value: '5',
                            label: '省级'
                        },
                        {
                            value: '6',
                            label: '市级'
                        }
                    ]
                },
                {
                    title: '选择考试项目',
                    options: [
                        {
                            value: '7',
                            label: '国考'
                        },
                        {
                            value: '8',
                            label: '省考'
                        },
                        {
                            value: '9',
                            label: '市考'
                        },
                        {
                            value: '10',
                            label: '事业单位'
                        },
                        {
                            value: '11',
                            label: '选调生'
                        },
                        {
                            value: '12',
                            label: '村官'
                        }
                    ]
                },
                {
                    title: '年',
                    options: [
                        {
                            value: '13',
                            label: '2019'
                        },
                        {
                            value: '14',
                            label: '2018'
                        },
                        {
                            value: '15',
                            label: '2017'
                        },
                        {
                            value: '16',
                            label: '2016'
                        }
                    ]
                },
                {
                    title: '月',
                    options: [
                        {
                            value: '17',
                            label: '12'
                        },
                        {
                            value: '18',
                            label: '11'
                        },
                        {
                            value: '19',
                            label: '10'
                        },
                        {
                            value: '20',
                            label: '9'
                        },
                        {
                            value: '21',
                            label: '8'
                        }
                    ]
                },
                {
                    title: '日',
                    options: [
                        {
                            value: '22',
                            label: '1'
                        },
                        {
                            value: '23',
                            label: '2'
                        },
                        {
                            value: '24',
                            label: '3'
                        },
                        {
                            value: '25',
                            label: '4'
                        },
                        {
                            value: '26',
                            label: '5'
                        },
                        {
                            label: '27',
                            label: '6'
                        }
                    ]
                }
            ],
            examValue: [],
            date: '2019-03-12'
        }
    },
    mounted() {
        this.fetchList()
    },
    methods: {
        fetchList() {
            this.getMenu1()
            this.getMenu3()
        },
        getMenu1() {
            getMenu1()
                .then(res => {
                    if (res.code == 0) {
                        this.menu1 = res.data
                    }
                })
        },
        getMenu3() {
            getMenu3()
                .then(res => {
                    if (res.code == 0) {
                        this.menu3 = res.data
                    }
                })
        }
    }
}
</script>