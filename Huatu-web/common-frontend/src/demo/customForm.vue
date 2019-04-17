<template>
    <div>
        <!-- 基础表单 -->
        <el-card
            shadow="never"
            :body-style="{ paddingRight: '100px', paddingLeft: '100px' }">
            <div slot="header">基本表单</div>
            <el-form
                class="form-desktop"
                label-width="120px"
                ref="basicForm"
                :rules="basicFormRules"
                :model="basicForm">
                <el-row :gutter="24">
                    <el-col :span="11">
                        <el-form-item
                            label="代理商："
                            prop="agent">
                            <el-input
                                clearable
                                v-model="basicForm.agent"
                                placeholder="请填写代理商名称"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="11" :offset="2">
                        <el-form-item
                            label="代理商类别："
                            prop="agentType">
                            <el-select
                                v-model="basicForm.agentType"
                                placeholder="请选择代理商类别">
                                <el-option label="区域" value="0"></el-option>
                                <el-option label="全国" value="1"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="24">
                    <el-col :span="11">
                        <el-form-item
                            label="代理商单位："
                            prop="agentCorp">
                            <el-input
                                clearable
                                v-model="basicForm.agentCorp"
                                placeholder="请填写代理商单位"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="11" :offset="2">
                        <el-form-item
                            label="代理合作状态："
                            prop="agentContractStatus">
                            <el-select
                                v-model="basicForm.agentContractStatus"
                                placeholder="请选择代理合作状态">
                                <el-option label="停止" value="0"></el-option>
                                <el-option label="签约合作中" value="1"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="24">
                    <el-col :span="11">
                        <el-form-item
                            label="代理商负责人："
                            prop="agentManager">
                            <el-input
                                clearable
                                v-model="basicForm.agentManager"
                                placeholder="请填写代理商负责人"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="11" :offset="2">
                        <el-form-item
                            label="扣点方式："
                            prop="pointDetainWay">
                            <el-radio-group v-model="basicForm.pointDetainWay">
                                <el-radio :label="1">前扣</el-radio>
                                <el-radio :label="2">后扣</el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="24">
                    <el-col :span="11">
                        <el-form-item
                            label="合同开始日期："
                            prop="contractBeginTime">
                            <el-date-picker
                                clearable
                                v-model="basicForm.contractBeginTime"
                                placeholder="请填合同开始日期"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="11" :offset="2">
                        <el-form-item
                            label="合同结束日期："
                            prop="contractBeginTime">
                            <el-date-picker
                                clearable
                                v-model="basicForm.contractBeginTime"
                                placeholder="请填合同结束日期"></el-date-picker>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="24">
                    <el-col :span="11">
                        <el-form-item
                            label="座机："
                            prop="telephone">
                            <el-input
                                clearable
                                v-model="basicForm.telephone"
                                placeholder="请填写座机"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="11" :offset="2">
                        <el-form-item
                            label="手机号码："
                            prop="mobile">
                            <el-input
                                clearable
                                v-model="basicForm.mobile"
                                placeholder="请填写手机号码"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="24">
                    <el-col :span="11">
                        <el-form-item
                            label="传真："
                            prop="fax">
                            <el-input
                                clearable
                                v-model="basicForm.fax"
                                placeholder="请填写传真号码"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="11" :offset="2">
                        <el-form-item
                            label="代理商生日："
                            prop="agentBirthday">
                            <el-date-picker
                                clearable
                                v-model="basicForm.agentBirthday"
                                placeholder="请填代理商生日"></el-date-picker>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="24">
                    <el-col :span="11">
                        <el-form-item
                            label="所属财务套账："
                            prop="finSuite">
                            <el-input
                                clearable
                                v-model="basicForm.finSuite"
                                placeholder="请填写所属财务套账"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="11" :offset="2">
                        <el-form-item
                            label="业务负责人："
                            prop="bizManager">
                            <el-select
                                v-model="basicForm.bizManager"
                                placeholder="请选择业务负责人">
                                <el-option label="毛玲" value="0"></el-option>
                                <el-option label="江军" value="1"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="24">
                    <el-col :span="11">
                        <el-form-item
                            label="校区："
                            prop="schoolDivision">
                            <el-input
                                clearable
                                v-model="basicForm.schoolDivision"
                                placeholder="请填写校区"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="11" :offset="2">
                        <el-form-item
                            label="记录人："
                            prop="recorder">
                            <el-input
                                clearable
                                v-model="basicForm.recorder"
                                placeholder="请填写记录人"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="24">
                    <el-col :span="24">
                        <el-form-item
                            label="地址："
                            prop="address">
                            <el-input
                                clearable
                                v-model="basicForm.address"
                                placeholder="请填写地址"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="24">
                    <el-col :span="24">
                        <el-form-item
                            label="描述："
                            prop="description">
                            <el-input
                                clearable
                                :rows="4"
                                type="textarea"
                                v-model="basicForm.description"
                                placeholder="请填写描述"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="24">
                    <el-col :span="24">
                        <el-form-item>
                            <el-button plain>取消</el-button>
                            <el-button type="primary">确定</el-button>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </el-card>

        <!-- 高级表单 -->
        <el-card shadow="never" style="margin: 20px 0 100px;">
            <div slot="header">高级表单</div>
            <section class="form-section">
                <h3 class="section-header">
                    <span class="section-title">基本信息</span>
                </h3>
                <div class="section-body">
                    <ul class="form-info-list">
                        <li class="form-info-item">
                            <label class="form-item-label">订单编号：</label>
                            <div class="form-item-content">697998</div>
                        </li>
                        <li class="form-info-item">
                            <label class="form-item-label">学员ID：</label>
                            <div class="form-item-content">HLUOU79898</div>
                        </li>
                        <li class="form-info-item">
                            <label class="form-item-label">手机号码：</label>
                            <div class="form-item-content">15798087808</div>
                        </li>
                        <li class="form-info-item">
                            <label class="form-item-label">学员姓名：</label>
                            <div class="form-item-content">毛不易</div>
                        </li>
                        <li class="form-info-item">
                            <label class="form-item-label">所在地：</label>
                            <div class="form-item-content">湖北省武汉市洪山区清和广场华图4层中禹厅清和广场华图4层中禹厅清和广场华图4层中禹厅</div>
                        </li>
                        <li class="form-info-item">
                            <label class="form-item-label">学员姓名：</label>
                            <div class="form-item-content">毛不易</div>
                        </li>
                        <li class="form-info-item">
                            <label class="form-item-label">订单编号：</label>
                            <div class="form-item-content">697998</div>
                        </li>
                        <li class="form-info-item">
                            <label class="form-item-label">学员ID：</label>
                            <div class="form-item-content">HLUOU79898</div>
                        </li>
                        <li class="form-info-item">
                            <label class="form-item-label">手机号码：</label>
                            <div class="form-item-content">15798087808</div>
                        </li>
                    </ul>
                </div>
            </section>
            <section class="form-section">
                <h3 class="section-header">
                    <span class="section-title">退款商品信息</span>
                </h3>
                <div class="section-body">
                    <div class="form-subsection">
                        <h4 class="subsection-title">基本信息</h4>
                        <ul class="form-info-list">
                            <li class="form-info-item">
                                <label class="form-item-label">退款商品：</label>
                                <div class="form-item-content">697998</div>
                            </li>
                            <li class="form-info-item">
                                <label class="form-item-label">商品名称：</label>
                                <div class="form-item-content">红领培优</div>
                            </li>
                            <li class="form-info-item">
                                <label class="form-item-label">商品定价：</label>
                                <div class="form-item-content">¥3000.00</div>
                            </li>
                            <li class="form-info-item">
                                <label class="form-item-label">优惠金额：</label>
                                <div class="form-item-content">¥1000.00</div>
                            </li>
                            <li class="form-info-item">
                                <label class="form-item-label">是否通过协议：</label>
                                <div class="form-item-content">是</div>
                            </li>
                        </ul>
                    </div>
                    <div class="form-subsection">
                        <h4 class="subsection-title">填写退款信息</h4>
                        <el-form
                            label-position="left"
                            label-width="82px"
                            ref="advancedForm"
                            :rules="advancedFormRules"
                            :model="advancedForm">
                            <el-row :gutter="24">
                                <el-col :span="11">
                                    <el-form-item
                                        label="扣款类型："
                                        prop="detainType">
                                        <el-select
                                            v-model="advancedForm.detainType"
                                            placeholder="请选择扣款类型">
                                            <el-option label="前扣" value="0"></el-option>
                                            <el-option label="后扣" value="1"></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="11" :offset="2">
                                    <el-form-item
                                        label="扣款金额："
                                        prop="detainTotal">
                                        <el-input
                                            clearable
                                            v-model="advancedForm.detainTotal"
                                            placeholder="请填写扣款金额"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row :gutter="24">
                                <el-col :span="11">
                                    <el-form-item
                                        label="退款类型："
                                        prop="refundType">
                                        <el-select
                                            v-model="advancedForm.refundType"
                                            placeholder="请选择退款类型">
                                            <el-option label="支付宝" value="0"></el-option>
                                            <el-option label="现金" value="1"></el-option>
                                            <el-option label="银行卡" value="2"></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row :gutter="24">
                                <el-col :span="24">
                                    <el-form-item
                                        label="退款原因："
                                        prop="refundReason">
                                        <el-input
                                            clearable
                                            :rows="4"
                                            type="textarea"
                                            v-model="advancedForm.refundReason"
                                            placeholder="请填写退款原因"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </el-form>
                    </div>
                </div>
            </section>
            <section class="form-section">
                <h3 class="section-header">
                    <span class="section-title">新选商品信息</span>
                </h3>
                <div class="section-body">
                    <el-form
                        label-position="right"
                        label-width="110px"
                        ref="advancedForm"
                        :rules="advancedFormRules"
                        :model="advancedForm">
                        <el-row :gutter="24">
                            <el-col :span="11">
                                <el-form-item
                                    label="商品所属产品："
                                    prop="goodsDepsProduct">
                                    <el-select
                                        v-model="advancedForm.goodsDepsProduct"
                                        placeholder="请选择商品所属产品">
                                        <el-option label="红领培优" value="0"></el-option>
                                        <el-option label="国考无忧" value="1"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="2">
                                <a href="#" class="form-item-middle">商品详情</a>
                            </el-col>
                            <el-col :span="11">
                                <el-form-item
                                    label="商品编号："
                                    prop="goodsSN">
                                    <el-input
                                        clearable
                                        suffix-icon="el-icon-search"
                                        v-model="advancedForm.goodsSN"
                                        placeholder="请填写商品编号"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row :gutter="24">
                            <el-col :span="11">
                                <el-form-item
                                    label="商品名称："
                                    prop="goodsName">
                                    <el-input
                                        clearable
                                        v-model="advancedForm.goodsName"
                                        placeholder="请填写商品名称"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="11" :offset="2">
                                <el-form-item
                                    label="职位保护："
                                    prop="isJobProtection">
                                    <div class="input-inline">
                                        <el-select
                                            class="w80 gr10"
                                            v-model="advancedForm.isJobProtection">
                                            <el-option label="否" value="0"></el-option>
                                            <el-option label="是" value="1"></el-option>
                                        </el-select>
                                        <el-select
                                            v-model="advancedForm.jobs">
                                            <el-option label="A职位" value="0"></el-option>
                                            <el-option label="B职位" value="1"></el-option>
                                        </el-select>
                                    </div>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row :gutter="24">
                            <el-col :span="11">
                                <el-form-item
                                    label="商品定价："
                                    prop="goodsPrice">
                                    <el-input
                                        clearable
                                        v-model="advancedForm.goodsPrice"
                                        placeholder="请填写商品定价"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="11" :offset="2">
                                <el-form-item
                                    label="优惠金额："
                                    prop="goodsPromts">
                                    <el-input
                                        clearable
                                        v-model="advancedForm.goodsPromts"
                                        placeholder="请填写商品优惠金额"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row :gutter="24">
                            <el-col :span="24">
                                <el-form-item
                                    label="优惠说明："
                                    prop="promtsReason">
                                    <el-input
                                        clearable
                                        :rows="4"
                                        type="textarea"
                                        v-model="advancedForm.promtsReason"
                                        placeholder="请填写优惠说明"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>
                </div>
            </section>
            <section class="form-section">
                <h3 class="section-header">
                    <span class="section-title">退款信息</span>
                </h3>
                <div class="section-body">
                    <div class="form-subsection">
                        <div class="subsection-header">
                            <h4 class="subsection-title">方式一</h4>
                            <el-button
                                size="mini"
                                type="primary"
                                icon="el-icon-delete"> 删除</el-button>
                        </div>
                        <el-form
                            label-width="82px"
                            ref="advancedForm"
                            :rules="advancedFormRules"
                            :model="advancedForm">
                            <el-row :gutter="24">
                                <el-col :span="24">
                                    <el-form-item
                                        label="支付方式："
                                        prop="paymentProvider">
                                        <el-radio-group
                                            class="icon-radio-group"
                                            v-model="advancedForm.paymentProvider">
                                            <el-radio
                                                class="icon-radio"
                                                border
                                                :label="1">
                                                <img src="http://htwuhan.oss-cn-beijing.aliyuncs.com/tool/baiduxindai.png">
                                            </el-radio>
                                            <el-radio
                                                class="icon-radio"
                                                border
                                                :label="2">
                                                <img src="http://htwuhan.oss-cn-beijing.aliyuncs.com/tool/fenbukuaiqian.png">
                                            </el-radio>
                                            <el-radio
                                                class="icon-radio"
                                                border
                                                :label="3">
                                                <img src="http://htwuhan.oss-cn-beijing.aliyuncs.com/tool/fengongsijd.png">
                                            </el-radio>
                                            <el-radio
                                                class="icon-radio"
                                                border
                                                :label="4">
                                                <img src="http://htwuhan.oss-cn-beijing.aliyuncs.com/tool/fengongsiwexin.png">
                                            </el-radio>
                                            <el-radio
                                                class="icon-radio"
                                                border
                                                :label="5">
                                                <img src="http://htwuhan.oss-cn-beijing.aliyuncs.com/tool/fengongsizhifubao.png">
                                            </el-radio>
                                            <el-radio
                                                class="icon-radio"
                                                border
                                                :label="6">
                                                <img src="http://htwuhan.oss-cn-beijing.aliyuncs.com/tool/fenxiaogonghang.png">
                                            </el-radio>
                                            <el-radio
                                                class="icon-radio"
                                                border
                                                :label="7">
                                                <img src="http://htwuhan.oss-cn-beijing.aliyuncs.com/tool/fenxiaogonghangjibenhu.png">
                                            </el-radio>
                                            <el-radio
                                                class="icon-radio"
                                                border
                                                :label="8">
                                                <img src="http://htwuhan.oss-cn-beijing.aliyuncs.com/tool/xianjinzhifu.png">
                                            </el-radio>
                                            <el-radio
                                                class="icon-radio"
                                                border
                                                :label="9">
                                                <img src="http://htwuhan.oss-cn-beijing.aliyuncs.com/tool/yibaoshuaka.png">
                                            </el-radio>
                                            <el-radio
                                                class="icon-radio"
                                                border
                                                :label="10">
                                                <img src="http://htwuhan.oss-cn-beijing.aliyuncs.com/tool/yibaozhifu.png">
                                            </el-radio>
                                            <el-radio
                                                class="icon-radio"
                                                border
                                                :label="11">
                                                <img src="http://htwuhan.oss-cn-beijing.aliyuncs.com/tool/zongbutuifeizhifubao.png">
                                            </el-radio>
                                            <el-radio
                                                class="icon-radio"
                                                border
                                                :label="12">
                                                <img src="http://htwuhan.oss-cn-beijing.aliyuncs.com/tool/zongbuweixin.png">
                                            </el-radio>
                                        </el-radio-group>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row :gutter="24">
                                <el-col :span="11">
                                    <el-form-item
                                        label="收款金额："
                                        prop="receiving">
                                        <el-input
                                            clearable
                                            v-model="advancedForm.receiving"
                                            placeholder="请填写收款金额"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="11" :offset="2">
                                    <el-form-item
                                        label="收款时间："
                                        prop="receivingTime">
                                        <el-date-picker
                                            clearable
                                            v-model="basicForm.receivingTime"
                                            placeholder="请选择收款时间"></el-date-picker>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </el-form>
                        <div class="subsection-header">
                            <h4 class="subsection-title">方式二</h4>
                            <el-button
                                size="mini"
                                type="primary"
                                icon="el-icon-delete"> 删除</el-button>
                        </div>
                        <el-form
                            label-width="82px"
                            ref="advancedForm"
                            :rules="advancedFormRules"
                            :model="advancedForm">
                            <el-row :gutter="24">
                                <el-col :span="24">
                                    <el-form-item
                                        label="支付方式："
                                        prop="paymentProvider">
                                        <el-radio-group
                                            class="icon-radio-group"
                                            v-model="advancedForm.paymentProvider">
                                            <el-radio
                                                class="icon-radio"
                                                border
                                                :label="13">
                                                内部结转
                                            </el-radio>
                                        </el-radio-group>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row :gutter="24">
                                <el-col :span="11">
                                    <el-form-item
                                        label="收款金额："
                                        prop="receiving">
                                        <el-input
                                            clearable
                                            v-model="advancedForm.receiving"
                                            placeholder="请填写收款金额"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="11" :offset="2">
                                    <el-form-item
                                        label="收款时间："
                                        prop="receivingTime">
                                        <el-date-picker
                                            clearable
                                            v-model="basicForm.receivingTime"
                                            placeholder="请选择收款时间"></el-date-picker>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </el-form>
                        <el-button
                            class="dashed-button"
                            size="medium">
                            <i class="el-icon-plus"></i>
                            添加多个支付
                        </el-button>
                        <div class="form-tip">
                            <div class="content">
                                <span>应收金额：¥3000.00</span>
                                <span>优惠金额：¥1000.00</span>
                                <span>应收金额：¥2000.00</span>
                                <span>实收金额：¥2000.00</span>
                            </div>
                            <span class="info">提示：若填写支付信息，实收金额必须等于应收金额</span>
                        </div>
                    </div>
                </div>
            </section>
            <section class="form-section">
                <h3 class="section-header">
                    <span class="section-title">商品信息</span>
                </h3>
                <div class="section-body">
                    <table class="form-info-table">
                        <colgroup>
                            <col width="240">
                        </colgroup>
                        <thead>
                            <tr>
                                <th>商品所属产品</th>
                                <th>商品编号</th>
                                <th>课程编号</th>
                                <th>商品名称</th>
                                <th>商品定价</th>
                                <th>是否职位保护</th>
                                <th>优惠金额</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>红领培优 7天7晚红领培优 7天7晚红领培优 7天7晚</td>
                                <td>HJLU080909</td>
                                <td>HLJUOU9799</td>
                                <td>商品名称商品名称</td>
                                <td>¥8000.00</td>
                                <td>是</td>
                                <td>¥1000.00</td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="form-info-table-tip">
                        <span class="label">优惠说明：</span>
                        <span class="content">优惠说明是一段很长的文字，字数多长，我也不知道，自适应吧，写了多长就显示多长的文字。优惠说明是一段很长的文字，字数多长，我也不知道，自适应吧，写了多长就显示多长的文字。优惠说明是一段很长的文字，字数多长，我也不知道，自适应吧，写了多长就显示多长的文字。   </span>
                    </div>
                    <table class="form-info-table">
                        <colgroup>
                            <col width="240">
                        </colgroup>
                        <thead>
                            <tr>
                                <th>商品所属产品</th>
                                <th>商品编号</th>
                                <th>课程编号</th>
                                <th>商品名称</th>
                                <th>商品定价</th>
                                <th>是否职位保护</th>
                                <th>优惠金额</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>红领培优 7天7晚红领培优 7天7晚红领培优 7天7晚</td>
                                <td>HJLU080909</td>
                                <td>HLJUOU9799</td>
                                <td>商品名称商品名称</td>
                                <td>¥8000.00</td>
                                <td>是</td>
                                <td>¥1000.00</td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="form-info-table-tip">
                        <span class="label">优惠说明：</span>
                        <span class="content">优惠说明是一段很长的文字，字数多长，我也不知道，自适应吧，写了多长就显示多长的文字。优惠说明是一段很长的文字，字数多长，我也不知道，自适应吧，写了多长就显示多长的文字。优惠说明是一段很长的文字，字数多长，我也不知道，自适应吧，写了多长就显示多长的文字。   </span>
                    </div>
                </div>
            </section>
            <section class="form-section">
                <h3 class="section-header">
                    <span class="section-title">支付信息</span>
                </h3>
                <div class="section-body">
                    <ul class="form-info-list">
                        <li class="form-info-item center">
                            <label class="form-item-label">支付方式：</label>
                            <div class="form-item-content">
                                <img class="payment-placeholder" src="http://htwuhan.oss-cn-beijing.aliyuncs.com/tool/fenbukuaiqian.png">
                            </div>
                        </li>
                        <li class="form-info-item center">
                            <label class="form-item-label">收款金额：</label>
                            <div class="form-item-content">¥3000.00</div>
                        </li>
                        <li class="form-info-item center">
                            <label class="form-item-label">商品定价：</label>
                            <div class="form-item-content">2018/08/09 22:00:00</div>
                        </li>
                    </ul>
                    <div class="form-tip">
                        <div class="content">
                            <span>应收金额：¥3000.00</span>
                            <span>优惠金额：¥1000.00</span>
                            <span>应收金额：¥2000.00</span>
                            <span>实收金额：¥2000.00</span>
                        </div>
                        <span class="info">提示：若填写支付信息，实收金额必须等于应收金额</span>
                    </div>
                </div>
            </section>
            <section class="form-section">
                <h3 class="section-header">
                    <span class="section-title">成单人信息</span>
                </h3>
                <div class="section-body">
                    <ul class="form-info-list">
                        <li class="form-info-item">
                            <label class="form-item-label">成单人姓名：</label>
                            <div class="form-item-content">毛不易</div>
                        </li>
                        <li class="form-info-item">
                            <label class="form-item-label">成单人工号：</label>
                            <div class="form-item-content">080090</div>
                        </li>
                        <li class="form-info-item">
                            <label class="form-item-label">成单人分部：</label>
                            <div class="form-item-content">武汉市场部</div>
                        </li>
                    </ul>
                    <li class="form-info-item">
                        <label class="form-item-label">备注说明：</label>
                        <div class="form-item-content">这是一段很长的备注说明，字数限制目前还不清楚，字数无论多长，都断行显示。宽度580px；这是一段很长的备注说明，字数限制目前还不清楚，字数无论多长，都断行显示。宽度为580px；字数限制目前还不清楚，字数无论多长，都断行显示。宽度580px；这是一段很长的备注说明，字数限制目前还不清楚，字数无论多长，都断行显示。宽度为580px；</div>
                    </li>
                </div>
            </section>
            <section class="form-section">
                <h3 class="section-header">
                    <span class="section-title">产品信息</span>
                </h3>
                <div class="section-body">
                    <ul class="form-info-list">
                        <li class="form-info-item">
                            <label class="form-item-label">产品编号：</label>
                            <div class="form-item-content">HOUOUO708080</div>
                        </li>
                        <li class="form-info-item">
                            <label class="form-item-label">产品名称：</label>
                            <div class="form-item-content">红领状元培训协议A班</div>
                        </li>
                        <li class="form-info-item">
                            <label class="form-item-label">事业部：</label>
                            <div class="form-item-content">部队事业部</div>
                        </li>
                        <li class="form-info-item">
                            <label class="form-item-label">考试类型：</label>
                            <div class="form-item-content">国家公务员考试</div>
                        </li>
                        <li class="form-info-item">
                            <label class="form-item-label">产品类型：</label>
                            <div class="form-item-content">笔试-公开课/体验课/讲座</div>
                        </li>
                        <li class="form-info-item">
                            <label class="form-item-label">职位保护：</label>
                            <div class="form-item-content">是</div>
                        </li>
                        <li class="form-info-item">
                            <label class="form-item-label">产品等级：</label>
                            <div class="form-item-content">中</div>
                        </li>
                        <li class="form-info-item">
                            <label class="form-item-label">考试周期：</label>
                            <div class="form-item-content">2019年</div>
                        </li>
                        <li class="form-info-item">
                            <label class="form-item-label">有效期：</label>
                            <div class="form-item-content">2018/08/09-2019/09/08</div>
                        </li>
                        <li class="form-info-item">
                            <label class="form-item-label">产品时长：</label>
                            <div class="form-item-content">6天5晚</div>
                        </li>
                        <li class="form-info-item">
                            <label class="form-item-label">课时：</label>
                            <div class="form-item-content">45</div>
                        </li>
                        <li class="form-info-item">
                            <label class="form-item-label">地区：</label>
                            <div class="form-item-content">安徽</div>
                        </li>
                        <li class="form-info-item">
                            <label class="form-item-label">参考价格：</label>
                            <div class="form-item-content">无</div>
                        </li>
                        <li class="form-info-item">
                            <label class="form-item-label">参考时长：</label>
                            <div class="form-item-content">4天3夜至8天7夜</div>
                        </li>
                    </ul>
                    <div class="form-info-item">
                        <label class="form-item-label">备注说明：</label>
                        <div class="form-item-content">这是一段很长的备注说明，字数限制目前还不清楚，字数无论多长，都断行显示。宽度580px；这是一段很长的备注说明，字数限制目前还不清楚，字数无论多长，都断行显示。宽度为580px；字数限制目前还不清楚，字数无论多长，都断行显示。宽度580px；这是一段很长的备注说明，字数限制目前还不清楚，字数无论多长，都断行显示。宽度为580px；</div>
                    </div>
                    <div class="form-info-pane">
                        <h4 class="pane-header">
                            <span class="pane-title">阶段划分</span>
                        </h4>
                        <div class="pane-body">
                            <div class="form-info-group">
                                <div class="form-info-item">
                                    <label class="form-item-label">阶段一：</label>
                                    <div class="form-item-content">阶段名称</div>
                                </div>
                                <div class="form-info-item">
                                    <label class="form-item-label">科目：</label>
                                    <div class="form-item-content">科目一名称（时长：45）、科目二名称（时长：60）</div>
                                </div>
                            </div>
                            <div class="form-info-group">
                                <div class="form-info-item">
                                    <label class="form-item-label">阶段一：</label>
                                    <div class="form-item-content">阶段名称</div>
                                </div>
                                <div class="form-info-item">
                                    <label class="form-item-label">科目：</label>
                                    <div class="form-item-content">科目一名称（时长：45）、科目二名称（时长：60）</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="form-section">
                <h3 class="section-header">
                    <span class="section-title">商品信息</span>
                </h3>
                <div class="section-body">
                    <ul class="form-info-list">
                        <li class="form-info-item">
                            <label class="form-item-label">分部：</label>
                            <div class="form-item-content">苏州分部</div>
                        </li>
                        <li class="form-info-item">
                            <label class="form-item-label">商品定价：</label>
                            <div class="form-item-content">¥3000.00</div>
                        </li>
                        <li class="form-info-item">
                            <label class="form-item-label">协议商品：</label>
                            <div class="form-item-content">是</div>
                        </li>
                        <li class="form-info-item">
                            <label class="form-item-label">最多退款：</label>
                            <div class="form-item-content">¥1000.00</div>
                        </li>
                        <li class="form-info-item">
                            <label class="form-item-label">开课时间：</label>
                            <div class="form-item-content">2018/09/08</div>
                        </li>
                        <li class="form-info-item">
                            <label class="form-item-label">人数上限：</label>
                            <div class="form-item-content">150人</div>
                        </li>
                        <li class="form-info-item">
                            <label class="form-item-label">住宿：</label>
                            <div class="form-item-content">住宿</div>
                        </li>
                        <li class="form-info-item">
                            <label class="form-item-label">餐饮：</label>
                            <div class="form-item-content">不包餐饮</div>
                        </li>
                    </ul>
                    <div class="form-info-item">
                        <label class="form-item-label">备注说明：</label>
                        <div class="form-item-content">这是一段很长的备注说明，字数限制目前还不清楚，字数无论多长，都断行显示。宽度580px；这是一段很长的备注说明，字数限制目前还不清楚，字数无论多长，都断行显示。宽度为580px；字数限制目前还不清楚，字数无论多长，都断行显示。宽度580px；这是一段很长的备注说明，字数限制目前还不清楚，字数无论多长，都断行显示。宽度为580px；</div>
                    </div>
                    <div class="form-info-pane">
                        <h4 class="pane-header">
                            <span class="pane-title">退款规则</span>
                        </h4>
                        <div class="pane-body">
                            <div class="form-info-group compact">
                                <div class="form-info-group-name">规则一</div>
                                <div class="form-info-item">
                                    <label class="form-item-label">退款规则：</label>
                                    <div class="form-item-content">这是一段很长的退款规则说明，如果字数过长，请断行显示。这是一段很长的退款规则说明，如果字数过长，请断行显示。</div>
                                </div>
                                <div class="form-info-item">
                                    <label class="form-item-label">退款金额：</label>
                                    <div class="form-item-content"><span class="emphasis">¥2000.00</span></div>
                                </div>
                            </div>
                            <div class="form-info-group compact">
                                <div class="form-info-group-name">规则二</div>
                                <div class="form-info-item">
                                    <label class="form-item-label">退款规则：</label>
                                    <div class="form-item-content">这是一段很长的退款规则说明，如果字数过长，请断行显示。这是一段很长的退款规则说明，如果字数过长，请断行显示。</div>
                                </div>
                                <div class="form-info-item">
                                    <label class="form-item-label">退款金额：</label>
                                    <div class="form-item-content"><span class="emphasis">¥2000.00</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="form-section">
                <h3 class="section-header">
                    <span class="section-title">商品信息2</span>
                </h3>
                <div class="section-body">
                    <ul class="form-info-list">
                        <li class="form-info-item">
                            <label class="form-item-label">省份：</label>
                            <div class="form-item-content">江苏省</div>
                        </li>
                        <li class="form-info-item">
                            <label class="form-item-label">人数上限：</label>
                            <div class="form-item-content">有上限</div>
                        </li>
                        <li class="form-info-item">
                            <label class="form-item-label">人数：</label>
                            <div class="form-item-content">150人</div>
                        </li>
                        <li class="form-info-item">
                            <label class="form-item-label">商品标签：</label>
                            <div class="form-item-content">
                                <div class="form-tag-list">
                                    <el-tag size="small">住宿</el-tag>
                                    <el-tag type="warning" size="small">非协议</el-tag>
                                    <el-tag type="success" size="small">协议</el-tag>
                                </div>
                            </div>
                        </li>
                        <li class="form-info-item">
                            <label class="form-item-label">商品：</label>
                            <div class="form-item-content"><a href="#">查看详情</a></div>
                        </li>
                        <li class="form-info-item">
                            <label class="form-item-label">有效期：</label>
                            <div class="form-item-content">2018/09/08-2019/09/08</div>
                        </li>
                    </ul>
                    <div class="form-info-item">
                        <label class="form-item-label">备注说明：</label>
                        <div class="form-item-content">这是一段很长的备注说明，字数限制目前还不清楚，字数无论多长，都断行显示。宽度580px；这是一段很长的备注说明，字数限制目前还不清楚，字数无论多长，都断行显示。宽度为580px；字数限制目前还不清楚，字数无论多长，都断行显示。宽度580px；这是一段很长的备注说明，字数限制目前还不清楚，字数无论多长，都断行显示。宽度为580px；</div>
                    </div>
                </div>
            </section>
            <section class="form-section">
                <h3 class="section-header">
                    <span class="section-title">阶段划分</span>
                </h3>
                <div class="section-body">
                    <el-form
                        label-position="right"
                        label-width="110px"
                        ref="advancedForm"
                        :rules="advancedFormRules"
                        :model="advancedForm">
                        <el-row :gutter="24">
                            <el-col :span="24">
                                <el-form-item label="阶段划分：">
                                    <div class="form-group-pane">
                                        <div class="form-group-list">
                                            <div class="form-group">
                                                <div class="form-group-main">
                                                    <el-form-item label="阶段一名称：">
                                                        <el-input
                                                            class="w300"
                                                            v-model="advancedForm.phase[0].phaseName"></el-input>
                                                    </el-form-item>
                                                    <el-form-item label="科目一：">
                                                        <el-input
                                                            class="w300 gr15"
                                                            v-model="advancedForm.phase[0].subjects[0].subjectName"></el-input>
                                                        <el-input
                                                            class="w160 gr20"
                                                            v-model="advancedForm.phase[0].subjects[0].duration"></el-input>
                                                        <el-button
                                                            type="text"
                                                            size="medium"
                                                            icon="el-icon-close"></el-button>
                                                    </el-form-item>
                                                    <el-form-item label="科目二：">
                                                        <el-input
                                                            class="w300 gr15"
                                                            v-model="advancedForm.phase[0].subjects[1].subjectName"></el-input>
                                                        <el-input
                                                            class="w160 gr20"
                                                            v-model="advancedForm.phase[0].subjects[1].duration"></el-input>
                                                        <el-button
                                                            type="text"
                                                            size="medium"
                                                            icon="el-icon-close"></el-button>
                                                    </el-form-item>
                                                    <el-form-item label=" ">
                                                        <el-button plain>添加科目</el-button>
                                                    </el-form-item>
                                                </div>
                                                <div class="form-group-side">
                                                    <el-tooltip :content="`删除阶段一`">
                                                        <el-button
                                                            type="text"
                                                            size="medium"
                                                            icon="el-icon-delete"></el-button>
                                                    </el-tooltip>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <div class="form-group-main">
                                                    <el-form-item label="阶段一名称：">
                                                        <el-input
                                                            class="w300"
                                                            v-model="advancedForm.phase[0].phaseName"></el-input>
                                                    </el-form-item>
                                                    <el-form-item label="科目一：">
                                                        <el-input
                                                            class="w300 gr15"
                                                            v-model="advancedForm.phase[0].subjects[0].subjectName"></el-input>
                                                        <el-input
                                                            class="w160 gr20"
                                                            v-model="advancedForm.phase[0].subjects[0].duration"></el-input>
                                                        <el-button
                                                            type="text"
                                                            size="medium"
                                                            icon="el-icon-close"></el-button>
                                                    </el-form-item>
                                                    <el-form-item label="科目二：">
                                                        <el-input
                                                            class="w300 gr15"
                                                            v-model="advancedForm.phase[0].subjects[1].subjectName"></el-input>
                                                        <el-input
                                                            class="w160 gr20"
                                                            v-model="advancedForm.phase[0].subjects[1].duration"></el-input>
                                                        <el-button
                                                            type="text"
                                                            size="medium"
                                                            icon="el-icon-close"></el-button>
                                                    </el-form-item>
                                                    <el-form-item label=" ">
                                                        <el-button plain>添加科目</el-button>
                                                    </el-form-item>
                                                </div>
                                                <div class="form-group-side">
                                                    <el-tooltip :content="`删除阶段二`">
                                                        <el-button
                                                            type="text"
                                                            size="medium"
                                                            icon="el-icon-delete"></el-button>
                                                    </el-tooltip>
                                                </div>
                                            </div>
                                        </div>
                                        <el-button
                                            class="dashed-button"
                                            size="medium">
                                            <i class="el-icon-plus"></i>
                                            添加多个阶段
                                        </el-button>
                                    </div>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>
                </div>
            </section>
            <section class="form-section">
                <h3 class="section-header">
                    <span class="section-title">退款规则</span>
                </h3>
                <div class="section-body">
                    <el-form
                        label-position="right"
                        label-width="110px"
                        ref="advancedForm"
                        :rules="advancedFormRules"
                        :model="advancedForm">
                        <el-row :gutter="24">
                            <el-col :span="24">
                                <el-form-item label="退款规则：">
                                    <div class="form-group-pane">
                                        <div class="form-group-list">
                                            <div class="form-group">
                                                <div class="form-group-main">
                                                    <el-form-item label="规则一：">
                                                        <el-input
                                                            :rows="4"
                                                            type="textarea"
                                                            placeholder="请输入退款规则"></el-input>
                                                    </el-form-item>
                                                    <el-form-item label=" ">
                                                        <el-input
                                                            class="w300"
                                                            placeholder="请输入退款金额"></el-input>
                                                    </el-form-item>
                                                </div>
                                                <div class="form-group-side">
                                                    <el-tooltip :content="`删除规则一`">
                                                        <el-button
                                                            type="text"
                                                            size="medium"
                                                            icon="el-icon-delete"></el-button>
                                                    </el-tooltip>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <div class="form-group-main">
                                                    <el-form-item label="规则一：">
                                                        <el-input
                                                            :rows="4"
                                                            type="textarea"
                                                            placeholder="请输入退款规则"></el-input>
                                                    </el-form-item>
                                                    <el-form-item label=" ">
                                                        <el-input
                                                            class="w300"
                                                            placeholder="请输入退款金额"></el-input>
                                                    </el-form-item>
                                                </div>
                                                <div class="form-group-side">
                                                    <el-tooltip :content="`删除规则一`">
                                                        <el-button
                                                            type="text"
                                                            size="medium"
                                                            icon="el-icon-delete"></el-button>
                                                    </el-tooltip>
                                                </div>
                                            </div>
                                        </div>
                                        <el-button
                                            class="dashed-button"
                                            size="medium">
                                            <i class="el-icon-plus"></i>
                                            添加多个退款规则
                                        </el-button>
                                    </div>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>
                </div>
            </section>
        </el-card>

        <!-- 审批节点 -->
        <!--
          ticketStatus 整个审批流的状态
          approveNodes 审批流节点
          statusMapping 审批流状态常量
        -->
        <el-card shadow="never" style="margin: 20px 0 100px;">
            <div slot="header">审批流程</div>
            <approve-flow
                :ticketStatus="3"
                :approveNodes="approveNodes"
                :statusMapping="approveStatusMapping"></approve-flow>
        </el-card>
    </div>
</template>

<script>
import ApproveFlow from 'library/components/ApproveFlow'

export default {
    components: {
        ApproveFlow
    },
    data() {
        return {
            basicForm: {
                agent: '',
                agentType: '',
                agentCorp: '',
                agentContractStatus: '',
                contractBeginTime: new Date(),
                contractEndTime: new Date(),
                fax: '',
                agentBirthday: new Date(),
                finSuite: '',
                bizManger: '',
                schoolDivision: '',
                recorder: '',
                address: '',
                description: ''
            },
            basicFormRules: {
                agent: [
                    {
                        required: true,
                        message: '请填写代理商名称'
                    }
                ]
            },
            advancedForm: {
                detainType: '',
                detainTotal: '',
                refundType: '',
                refundReason: '',
                phase: [
                    {
                        phaseName: '阶段一啊啊啊',
                        subjects: [
                            {
                                subjectName: '国考综合',
                                duration: 30
                            },
                            {
                                subjectName: '面试宝典',
                                duration: 45
                            }
                        ]
                    }
                ]
            },
            advancedFormRules: {
                detainType: [
                    {
                        required: true,
                        message: '请选择扣款类型'
                    }
                ],
                detainTotal: [
                    {
                        required: true,
                        message: '请填写扣款金额'
                    }
                ],
                refundType: [
                    {
                        required: true,
                        message: '请选择退款类型'
                    }
                ],
                refundReason: [
                    {
                        required: true,
                        message: '请填写退款原因'
                    }
                ],
                goodsDepsProduct: [
                    {
                        required: true,
                        message: '请选择商品所属产品'
                    }
                ],
            },
            approveNodes: [
                {
                    staff: {
                        id: 1,
                        name: '山余'
                    },
                    principal: null,
                    role: null,
                    statusEnum: {
                        value: 0,
                        desc: '发起'
                    },
                    avatar: 'http://htwuhan.oss-cn-beijing.aliyuncs.com/f473e455dc3049a0897bb9d8e17889ce',
                    roleScope: 0,
                    isLeader: 0,
                    createTime: 1527731898000,
                    remark: null
                },
                {
                    staff: {
                        id: 38509,
                        name: '张兵'
                    },
                    principal: {
                        id: 38509,
                        name: '38509'
                    },
                    role: null,
                    statusEnum: {
                        value: 4,
                        desc: '已通过'
                    },
                    avatar: 'http://htwuhan.oss-cn-beijing.aliyuncs.com/f473e455dc3049a0897bb9d8e17889ce',
                    roleScope: 0,
                    isLeader: 1,
                    createTime: 1527731898000,
                    remark: '1、你是一个积极向上，有自信心的男孩。学习上有计划、有目标，能够合理安排自己的时间，学习状态挺好；心态平和，关心、帮助同学，关心班集体，积极参加班级、学校组织的各项活动，具有较强的劳动观念，积极参加体育活动，尊敬师长。希望你再接再厉，不满足于现状，争取做的更好。2、你是一个开朗、大方、有礼貌的可爱女孩，团结同学，乐于助人；积极参加社会活动，关心班集体，生活上比较俭朴，热爱劳动，能严格要求自己；学习上认真、有目标，但缺乏吃苦精神；能积极参加班级、学校组织的各项活动，心理素质好。希望你在今后的学习中继续努力，各方面取得更好成绩。'
                },
                {
                    staff: {
                        id: 1,
                        name: '山余'
                    },
                    principal: {
                        id: 1,
                        name: '山余'
                    },
                    role: null,
                    statusEnum: {
                        value: 1,
                        desc: '审批中'
                    },
                    avatar: 'http://htwuhan.oss-cn-beijing.aliyuncs.com/f473e455dc3049a0897bb9d8e17889ce',
                    roleScope: 0,
                    isLeader: 1,
                    createTime: null,
                    remark: ''
                },
                {
                    staff: {
                        id: 30851,
                        name: '余婷婷'
                    },
                    principal: {
                        id: 30851,
                        name: '余婷婷'
                    },
                    role: {
                        id: 25,
                        name: 'OA测试'
                    },
                    statusEnum: {
                        value: 2,
                        desc: '待审批'
                    },
                    avatar: 'http://htwuhan.oss-cn-beijing.aliyuncs.com/b3f2b8549d194a36961bad92bebfbdc6.jpg',
                    roleScope: 0,
                    isLeader: 0,
                    createTime: null,
                    remark: ''
                }
            ],
            approveStatusMapping: {
                originated: 0, // 发起
                processing: 1, // 审批中
                pending: 2,    // 待审批
                recalled: 3,   // 撤回
                passed: 4,     // 通过
                rejected: 5,   // 不通过
                expired: 6     // 过期
            }
        }
    },
}
</script>
