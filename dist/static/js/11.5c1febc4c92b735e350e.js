webpackJsonp([11],{"5P6Y":function(t,e){},V8CJ:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r("Xxa5"),i=r.n(a),s=r("exGp"),c=r.n(s),o=r("1h8J"),l={data:function(){return{actTab:0,priceForm:{cbPrice:"",ptPrice:"",vPrice:"",vRake:"",vfRake:"",cRake:"",pRake:"",date:""},rakeForm:{}}},mounted:function(){this.getData()},methods:{changeType:function(t){this.actTab=t,this.getData()},getData:function(){var t=this;return c()(i.a.mark(function e(){var r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.E)();case 2:0==(r=e.sent).code?(t.priceForm.cbPrice=r.data.platform_cost_markup_ratio,t.priceForm.ptPrice=r.data.common_price_markup_ratio,t.priceForm.vPrice=r.data.vip_price_markup_ratio,t.priceForm.vRake=r.data.vip_self_profit_ratio,t.priceForm.vfRake=r.data.vip_higher_profit_ratio,t.priceForm.cRake=r.data.ordinary_user_profit_ratio,t.priceForm.pRake=r.data.vip_goods_profit_money):t.$message.error(r.message);case 4:case"end":return e.stop()}},e,t)}))()},doSave:function(){var t=this;return c()(i.a.mark(function e(){var r,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r={},0!=t.actTab){e.next=20;break}if(t.priceForm.cbPrice){e.next=7;break}return t.$message.error("请填写平台成本价加价比例"),e.abrupt("return");case 7:if(t.priceForm.ptPrice){e.next=12;break}return t.$message.error("请填写普通价加价比例"),e.abrupt("return");case 12:if(t.priceForm.vPrice){e.next=17;break}return t.$message.error("请填写VIP价加价比例"),e.abrupt("return");case 17:r={type:0,platform_cost_markup_ratio:t.priceForm.cbPrice,common_price_markup_ratio:t.priceForm.ptPrice,vip_price_markup_ratio:t.priceForm.vPrice};case 18:e.next=42;break;case 20:if(1!=t.actTab){e.next=42;break}if(t.priceForm.vRake){e.next=26;break}return t.$message.error("请填写VIP自购返佣比例"),e.abrupt("return");case 26:if(t.priceForm.vfRake){e.next=31;break}return t.$message.error("请填写VIP用户的上级用户返佣比例"),e.abrupt("return");case 31:if(t.priceForm.cRake){e.next=36;break}return t.$message.error("请填写普通用户的上级用户返佣比例"),e.abrupt("return");case 36:if(t.priceForm.pRake){e.next=41;break}return t.$message.error("请填写礼包商品返佣金额"),e.abrupt("return");case 41:r={type:1,vip_self_profit_ratio:t.priceForm.vRake,vip_higher_profit_ratio:t.priceForm.vfRake,ordinary_user_profit_ratio:t.priceForm.cRake,vip_goods_profit_money:t.priceForm.pRake};case 42:return e.next=44,Object(o.F)(r);case 44:0==(a=e.sent).code?(t.$message({type:"success",message:"操作成功!"}),t.getData()):t.$message.error(a.message);case 46:case"end":return e.stop()}},e,t)}))()}}},p={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"priceBox"},[r("el-row",[r("el-col",{staticClass:"top",attrs:{span:24}},[r("el-button-group",[r("el-button",{class:["groupBtn",0==t.actTab?"active":""],attrs:{type:"groupBtn",plain:""},on:{click:function(e){return t.changeType(0)}}},[t._v("价格比例设定")]),t._v(" "),r("el-button",{class:["groupBtn",1==t.actTab?"active":""],attrs:{type:"groupBtn",plain:""},on:{click:function(e){return t.changeType(1)}}},[t._v("返佣设定")])],1)],1)],1),t._v(" "),0==t.actTab?r("el-row",{staticStyle:{"margin-top":"100px"}},[r("el-form",{attrs:{model:t.priceForm,"label-width":"180px"}},[r("el-form-item",{staticClass:"hFlex",attrs:{label:"平台成本价加价比例："}},[r("div",{staticClass:"mr2"},[r("el-input-number",{staticClass:"mr2",staticStyle:{width:"150px"},attrs:{controls:!1,precision:2,step:.1,max:100},model:{value:t.priceForm.cbPrice,callback:function(e){t.$set(t.priceForm,"cbPrice",e)},expression:"priceForm.cbPrice"}}),t._v("%\n                ")],1),t._v(" "),r("div",{staticClass:"vFlex"},[r("div",{staticClass:"tip"},[t._v("请输入百分比，支持小数点后两位，例如：10.87%")]),t._v(" "),r("div",{staticClass:"tip"},[t._v("（1+平台成本价加价比例）X结算价=平台成本价")])])]),t._v(" "),r("el-form-item",{staticClass:"hFlex",attrs:{label:"普通价加价比例："}},[r("div",{staticClass:"mr2"},[r("el-input-number",{staticClass:"mr2",staticStyle:{width:"150px"},attrs:{controls:!1,precision:2,step:.1,max:100},model:{value:t.priceForm.ptPrice,callback:function(e){t.$set(t.priceForm,"ptPrice",e)},expression:"priceForm.ptPrice"}}),t._v("%\n                ")],1),t._v(" "),r("div",{staticClass:"vFlex"},[r("div",{staticClass:"tip"},[t._v("请输入百分比，支持小数点后两位，例如：10.87%")]),t._v(" "),r("div",{staticClass:"tip"},[t._v("（1+普通价加价比例）X平台成本价=普通价")])])]),t._v(" "),r("el-form-item",{staticClass:"hFlex",attrs:{label:"VIP价加价比例："}},[r("div",{staticClass:"mr2"},[r("el-input-number",{staticClass:"mr2",staticStyle:{width:"150px"},attrs:{controls:!1,precision:2,step:.1,max:100},model:{value:t.priceForm.vPrice,callback:function(e){t.$set(t.priceForm,"vPrice",e)},expression:"priceForm.vPrice"}}),t._v("%\n                ")],1),t._v(" "),r("div",{staticClass:"vFlex"},[r("div",{staticClass:"tip"},[t._v("请输入百分比，支持小数点后两位，例如：10.87%")]),t._v(" "),r("div",{staticClass:"tip"},[t._v("（1+VIP价加价比例）X平台成本价=VIP价")])])])],1),t._v(" "),r("el-row",{staticClass:"hFlex mt2"},[r("el-button",{attrs:{type:"primary"},on:{click:t.doSave}},[t._v("保存")])],1)],1):t._e(),t._v(" "),1==t.actTab?r("el-row",{staticStyle:{"margin-top":"100px"}},[r("el-form",{attrs:{model:t.priceForm,"label-width":"220px"}},[r("el-form-item",{staticClass:"hFlex",attrs:{label:"VIP自购返佣比例："}},[r("div",{staticClass:"mr2"},[r("el-input-number",{staticClass:"mr2",staticStyle:{width:"150px"},attrs:{controls:!1,precision:2,step:.1,max:100},model:{value:t.priceForm.vRake,callback:function(e){t.$set(t.priceForm,"vRake",e)},expression:"priceForm.vRake"}}),t._v("%\n                ")],1),t._v(" "),r("div",{staticClass:"vFlex"},[r("div",{staticClass:"tip"},[t._v("请输入百分比，支持小数点后两位，例如：10.87%")]),t._v(" "),r("div",{staticClass:"tip"},[t._v("（VIP价-平台成本价）X VIP自购返佣比例=VIP自购返佣金额")])])]),t._v(" "),r("el-form-item",{staticClass:"hFlex",attrs:{label:"VIP用户的上级用户返佣比例："}},[r("div",{staticClass:"mr2"},[r("el-input-number",{staticClass:"mr2",staticStyle:{width:"150px"},attrs:{controls:!1,precision:2,step:.1,max:100},model:{value:t.priceForm.vfRake,callback:function(e){t.$set(t.priceForm,"vfRake",e)},expression:"priceForm.vfRake"}}),t._v("%\n                ")],1),t._v(" "),r("div",{staticClass:"vFlex"},[r("div",{staticClass:"tip"},[t._v("请输入百分比，支持小数点后两位，例如：10.87%")]),t._v(" "),r("div",{staticClass:"tip"},[t._v("（VIP价-平台成本价）X VIP用户的上级用户返佣比例=VIP用户的上级用户返佣金额")])])]),t._v(" "),r("el-form-item",{staticClass:"hFlex",attrs:{label:"普通用户的上级用户返佣比例："}},[r("div",{staticClass:"mr2"},[r("el-input-number",{staticClass:"mr2",staticStyle:{width:"150px"},attrs:{controls:!1,precision:2,step:.1,max:100},model:{value:t.priceForm.cRake,callback:function(e){t.$set(t.priceForm,"cRake",e)},expression:"priceForm.cRake"}}),t._v("%\n                ")],1),t._v(" "),r("div",{staticClass:"vFlex"},[r("div",{staticClass:"tip"},[t._v("请输入百分比，支持小数点后两位，例如：10.87%")]),t._v(" "),r("div",{staticClass:"tip"},[t._v("（普通价-平台成本价）X 普通用户的上级用户返佣比例=普通用户的上级用户返佣金额")])])]),t._v(" "),r("el-form-item",{staticClass:"hFlex",attrs:{label:"礼包商品返佣金额："}},[r("div",{staticClass:"mr2"},[r("el-input-number",{staticClass:"mr2",staticStyle:{width:"150px"},attrs:{controls:!1,precision:2,step:.1},model:{value:t.priceForm.pRake,callback:function(e){t.$set(t.priceForm,"pRake",e)},expression:"priceForm.pRake"}}),t._v("元\n                ")],1),t._v(" "),r("div",{staticClass:"vFlex"},[r("div",{staticClass:"tip"},[t._v("会员礼包分销收益，每发展一名新会员获得的返佣")])])]),t._v(" "),r("el-form-item",{staticClass:"hFlex",attrs:{label:""}},[r("el-button",{attrs:{type:"primary"},on:{click:t.doSave}},[t._v("保存")])],1)],1)],1):t._e(),t._v(" "),2==t.actTab?r("el-row",{staticStyle:{"margin-top":"100px"}},[r("el-row",{staticStyle:{"text-align":"center",color:"#606266","margin-bottom":"20px"}},[t._v("特殊情况长期不发货时，可在此设置恢复发货日期。设置后所有商品的发货时间提示统一完成修改。")]),t._v(" "),r("el-form",{attrs:{model:t.priceForm,"label-width":"240px"}},[r("el-form-item",{staticClass:"hFlex",attrs:{label:"礼包商品返佣金额："}},[r("div",{staticClass:"mr2"},[r("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:t.priceForm.date,callback:function(e){t.$set(t.priceForm,"date",e)},expression:"priceForm.date"}})],1)]),t._v(" "),r("el-form-item",{staticClass:"hFlex",attrs:{label:"商品详情页发货提示文字将显示："}},[r("div",{staticClass:"mr2",staticStyle:{color:"#606266"}},[t._v("\n                    现在付款，"+t._s(t.priceForm.date)+"开始陆续发货\n                ")])]),t._v(" "),r("el-form-item",{staticClass:"hFlex",attrs:{label:""}},[r("el-button",{attrs:{type:"primary"},on:{click:t.doSave}},[t._v("保存")])],1)],1)],1):t._e()],1)},staticRenderFns:[]};var n=r("VU/8")(l,p,!1,function(t){r("5P6Y")},"data-v-d60cc1e2",null);e.default=n.exports}});
//# sourceMappingURL=11.5c1febc4c92b735e350e.js.map