webpackJsonp([8],{I626:function(e,t){},RZx3:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("Xxa5"),s=r.n(a),o=r("exGp"),l=r.n(o),i=r("1h8J"),n=r("uaSg"),u={data:function(){return{isEdit:!1,dialogVisible:!1,baseUrl:"",imageUrl:"",mainOptions:[],sonOptions:[],curId:"",rules:{type:[{required:!0}],title:[{required:!0,message:"请输入名称",trigger:"blur"}],imgStr:[{required:!0,validator:function(e,t,r){""===t?r(new Error("请上传图片")):r()},trigger:"blur"}],site:[{required:!0,message:"链接地址",trigger:"blur"}],goods_code:[{required:!0,message:"商品编号",trigger:"blur"}],mainClass:[{required:!0,message:"选择一级分类",trigger:"blur"}],sonClass:[{required:!0,message:"选择二级分类",trigger:"blur"}],activity:[{required:!0,message:"选择营销活动",trigger:"blur"}],order:[{required:!0,message:"请输入排序",trigger:"blur"}]},ruleForm:{title:"",type:"0",imgStr:"",site:"",goods_code:"",mainClass:"",sonClass:"",activity:"",order:""}}},mounted:function(){this.baseUrl=n.b,this.reqMainClass()},methods:{getDetail:function(e){var t=this;return l()(s.a.mark(function r(){var a;return s.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(i.p)({id:e});case 2:0==(a=r.sent).code?(t.curId=a.data.id,t.ruleForm.type=a.data.type+"",t.ruleForm.title=a.data.title,t.ruleForm.order=a.data.sort,t.imageUrl=a.data.image_url_full,t.ruleForm.imgStr=a.data.image_url,0==t.ruleForm.type?t.ruleForm.site=a.data.type_value:1==t.ruleForm.type?(t.ruleForm.mainClass=a.data.cate_one,t.reqSonClass(),t.ruleForm.sonClass=a.data.type_value):2==t.ruleForm.type?t.ruleForm.goods_code=a.data.type_value:3==t.ruleForm.type&&(t.ruleForm.activity=a.data.type_value)):t.$message.error(a.message);case 4:case"end":return r.stop()}},r,t)}))()},doReset:function(){this.curId="",this.imageUrl="",this.ruleForm={title:"",type:"0",imgStr:"",site:"",goods_code:"",mainClass:"",sonClass:"",activity:"",order:""}},reqMainClass:function(){var e=this;return l()(s.a.mark(function t(){var r;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(i.s)();case 2:0==(r=t.sent).code&&(e.mainOptions=r.data);case 4:case"end":return t.stop()}},t,e)}))()},reqSonClass:function(){var e=this;return l()(s.a.mark(function t(){var r;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.ruleForm.sonClass="",t.next=3,Object(i.T)({fid:e.ruleForm.mainClass});case 3:0==(r=t.sent).code&&(e.sonOptions=r.data);case 5:case"end":return t.stop()}},t,e)}))()},showDetail:function(e){this.dialogVisible=!0,this.doReset(),e?(this.isEdit=!0,this.getDetail(e)):this.isEdit=!1},beforeAvatarUpload:function(e){var t="image/png"===e.type||"image/jpg"===e.type||"image/jpeg"===e.type,r=e.size/1024/1024<.2;return t?!!r||(this.$message.error("上传图片大小不能超过 200k!"),!1):(this.$message.error("上传图片格式有误!"),!1)},handleAvatarSuccess:function(e,t){this.$refs.imgUp.clearValidate(),this.imageUrl=URL.createObjectURL(t.raw),this.ruleForm.imgStr=e.data.url,this.imgId=e.data.id},checkInfo:function(){var e=!0;return this.ruleForm.title?this.imageUrl?0!=this.ruleForm.type||this.ruleForm.site?1==this.ruleForm.type&&!this.ruleForm.mainClass||1==this.ruleForm.type&&!this.ruleForm.sonClass?(this.$message.error("请选择商品分类"),e=!1):2!=this.ruleForm.type||this.ruleForm.goods_code?3!=this.ruleForm.type||this.ruleForm.activity?!this.ruleForm.order||parseFloat(this.ruleForm.order)%parseInt(this.ruleForm.order)?(this.$message.error("请输入正确的排序"),e=!1):e=!0:(this.$message.error("请选择营销活动"),e=!1):(this.$message.error("请输入商品编号"),e=!1):(this.$message.error("请输入链接地址"),e=!1):(this.$message.error("请输入icon图片"),e=!1):(this.$message.error("请输入icon名称"),e=!1),e},doSave:function(){var e=this;return l()(s.a.mark(function t(){var r,a,o;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.checkInfo()){t.next=2;break}return t.abrupt("return");case 2:return r="",a={},0==e.ruleForm.type?r=e.ruleForm.site:1==e.ruleForm.type?r=e.ruleForm.sonClass:2==e.ruleForm.type?r=e.ruleForm.goods_code:3==e.ruleForm.type&&(r=e.ruleForm.activity),a=e.isEdit?{id:e.curId,title:e.ruleForm.title,type:e.ruleForm.type,type_value:r,image_url:e.ruleForm.imgStr,sort:e.ruleForm.order}:{title:e.ruleForm.title,type:e.ruleForm.type,type_value:r,image_url:e.ruleForm.imgStr,sort:e.ruleForm.order},t.next=8,Object(i.z)(a);case 8:0==(o=t.sent).code?(e.$message({type:"success",message:"操作成功!"}),e.dialogVisible=!1,e.$parent.getData()):e.$message.error(o.message);case 10:case"end":return t.stop()}},t,e)}))()}}},c={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-dialog",{staticClass:"virForm",attrs:{title:e.isEdit?"编辑":"新增",center:"",visible:e.dialogVisible,width:"40%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"跳转类型：",prop:"type"}},[r("el-radio-group",{attrs:{disabled:e.isEdit},model:{value:e.ruleForm.type,callback:function(t){e.$set(e.ruleForm,"type",t)},expression:"ruleForm.type"}},[r("el-radio",{attrs:{label:"0"}},[e._v("H5页")]),e._v(" "),r("el-radio",{attrs:{label:"1"}},[e._v("商品分类")]),e._v(" "),r("el-radio",{attrs:{label:"2"}},[e._v("商品详情")])],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"名称：",prop:"title"}},[r("el-input",{staticStyle:{width:"250px"},attrs:{placeholder:"请输入名称"},model:{value:e.ruleForm.title,callback:function(t){e.$set(e.ruleForm,"title",t)},expression:"ruleForm.title"}})],1),e._v(" "),r("el-form-item",{ref:"imgUp",attrs:{label:"ICON图：",prop:"imgStr"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{"before-upload":e.beforeAvatarUpload,action:e.baseUrl+"/admin/upload/img","show-file-list":!1,"on-success":e.handleAvatarSuccess}},[e.imageUrl?r("img",{staticClass:"avatar",attrs:{src:e.imageUrl}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]),e._v(" "),r("el-row",{staticClass:"mt2"},[e._v("图片尺寸94*94像素")])],1),e._v(" "),0==e.ruleForm.type?r("el-form-item",{attrs:{label:"链接地址：",prop:"site"}},[r("el-input",{staticStyle:{width:"250px"},attrs:{placeholder:"链接地址"},model:{value:e.ruleForm.site,callback:function(t){e.$set(e.ruleForm,"site",t)},expression:"ruleForm.site"}})],1):e._e(),e._v(" "),2==e.ruleForm.type?r("el-form-item",{attrs:{label:"商品编号：",prop:"goods_code"}},[r("el-input",{staticStyle:{width:"250px"},attrs:{placeholder:"商品编号"},model:{value:e.ruleForm.goods_code,callback:function(t){e.$set(e.ruleForm,"goods_code",t)},expression:"ruleForm.goods_code"}})],1):e._e(),e._v(" "),1==e.ruleForm.type?r("el-form-item",{attrs:{label:"一级分类：",prop:"mainClass"}},[r("el-select",{attrs:{placeholder:"一级分类"},on:{change:e.reqSonClass},model:{value:e.ruleForm.mainClass,callback:function(t){e.$set(e.ruleForm,"mainClass",t)},expression:"ruleForm.mainClass"}},e._l(e.mainOptions,function(e,t){return r("el-option",{key:t,attrs:{label:e.cate_name,value:e.id}})}),1)],1):e._e(),e._v(" "),1==e.ruleForm.type?r("el-form-item",{attrs:{label:"二级分类：",prop:"sonClass"}},[r("el-select",{attrs:{placeholder:"二级分类"},model:{value:e.ruleForm.sonClass,callback:function(t){e.$set(e.ruleForm,"sonClass",t)},expression:"ruleForm.sonClass"}},e._l(e.sonOptions,function(e,t){return r("el-option",{key:t,attrs:{label:e.cate_name,value:e.id}})}),1)],1):e._e(),e._v(" "),3==e.ruleForm.type?r("el-form-item",{attrs:{label:"营销活动：",prop:"activity"}},[r("el-select",{attrs:{placeholder:"营销活动"},model:{value:e.ruleForm.activity,callback:function(t){e.$set(e.ruleForm,"activity",t)},expression:"ruleForm.activity"}},[r("el-option",{attrs:{label:"区域一",value:"shanghai"}}),e._v(" "),r("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1):e._e(),e._v(" "),r("el-form-item",{attrs:{label:"排序：",prop:"order"}},[r("el-input",{staticStyle:{width:"250px"},attrs:{placeholder:"请输入排序"},model:{value:e.ruleForm.order,callback:function(t){e.$set(e.ruleForm,"order",t)},expression:"ruleForm.order"}}),e._v(" "),r("el-row",{staticClass:"mt2"},[e._v("请输入整数，数字越大icon位置越靠前")])],1)],1),e._v(" "),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:e.doSave}},[e._v(e._s(e.isEdit?"保 存":"确 定"))])],1)],1)],1)},staticRenderFns:[]};var m={data:function(){return{tableData:[],curPage:1,page_size:10,total:0,origionPic:"",dialogVisible:!1,form:{name:""}}},components:{IconPop:r("VU/8")(u,c,!1,function(e){r("I626")},"data-v-7cf2fd92",null).exports},mounted:function(){this.getData()},methods:{previewImg:function(e){this.dialogVisible=!0,this.origionPic=e},handleCurrentChange:function(e){this.curPage=e,this.getData()},doReset:function(){this.form.name="",this.curPage=1,this.getData()},doSearch:function(){this.curPage=1,this.getData()},getData:function(){var e=this;return l()(s.a.mark(function t(){var r;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(i.q)({title:e.form.name,page_size:e.page_size,page:e.curPage});case 2:0==(r=t.sent).code?(e.total=r.data.total,e.tableData=r.data.data):e.$message.error(r.message);case 4:case"end":return t.stop()}},t,e)}))()},opSet:function(e,t){var r=this;return l()(s.a.mark(function a(){var o;return s.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(i.r)({id:e,status:t});case 2:0==(o=a.sent).code?(r.$message({type:"success",message:"操作成功!"}),r.getData()):r.$message.error(o.message);case 4:case"end":return a.stop()}},a,r)}))()},doAdd:function(){this.$refs.iconPop.showDetail()},opEdit:function(e){this.$refs.iconPop.showDetail(e)},opDel:function(e){var t=this;return l()(s.a.mark(function r(){var a;return s.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(i.o)({id:e});case 2:0==(a=r.sent).code?(t.$message({type:"success",message:"操作成功!"}),t.getData()):t.$message.error(a.message);case 4:case"end":return r.stop()}},r,t)}))()}}},d={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.form}},[r("el-form-item",{attrs:{label:"名称"}},[r("el-input",{attrs:{placeholder:"名称"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),r("el-form-item",[r("el-button",{on:{click:e.doReset}},[e._v("重置")])],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.doSearch}},[e._v("查询")])],1)],1),e._v(" "),r("el-row",{staticStyle:{display:"flex","align-items":"center","justify-content":"flex-end"}},[r("el-button",{attrs:{type:"primary"},on:{click:e.doAdd}},[e._v("新增")])],1),e._v(" "),r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData}},[r("el-table-column",{attrs:{prop:"id",label:"编号"}}),e._v(" "),r("el-table-column",{attrs:{label:"图标"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("img",{staticClass:"smallPic",attrs:{src:t.row.image_url_full,alt:""},on:{click:function(r){return e.previewImg(t.row.image_url_full)}}})]}}])}),e._v(" "),r("el-table-column",{attrs:{prop:"title",label:"名称"}}),e._v(" "),r("el-table-column",{attrs:{prop:"type_str",label:"跳转类型"}}),e._v(" "),r("el-table-column",{attrs:{prop:"type_value_str",label:"目标地址"}}),e._v(" "),r("el-table-column",{attrs:{prop:"sort",label:"排序"}}),e._v(" "),r("el-table-column",{attrs:{prop:"created_at",label:"添加时间"}}),e._v(" "),r("el-table-column",{attrs:{label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",[e._v(e._s(1==t.row.status?"上架":"下架"))])]}}])}),e._v(" "),r("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[0==t.row.status?r("el-button",{attrs:{type:"text"},on:{click:function(r){return e.opSet(t.row.id,1)}}},[e._v("上架")]):e._e(),e._v(" "),1==t.row.status?r("el-button",{attrs:{type:"text"},on:{click:function(r){return e.opSet(t.row.id,0)}}},[e._v("下架")]):e._e(),e._v(" "),r("el-button",{attrs:{type:"text"},on:{click:function(r){return e.opEdit(t.row.id)}}},[e._v("编辑")]),e._v(" "),r("el-button",{attrs:{type:"text"},on:{click:function(r){return e.opDel(t.row.id)}}},[e._v("删除")])]}}])})],1),e._v(" "),r("el-dialog",{attrs:{visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[r("img",{attrs:{width:"100%",src:e.origionPic,alt:""}})]),e._v(" "),r("el-pagination",{staticClass:"pubPagation",attrs:{"current-page":e.curPage,"page-size":10,layout:"total, prev, pager, next, jumper",total:e.total},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.curPage=t},"update:current-page":function(t){e.curPage=t}}}),e._v(" "),r("IconPop",{ref:"iconPop"})],1)},staticRenderFns:[]};var p=r("VU/8")(m,d,!1,function(e){r("RqpB")},"data-v-066841b1",null);t.default=p.exports},RqpB:function(e,t){}});
//# sourceMappingURL=8.f77382a9dd3cf7b2f2a1.js.map