(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{kanD:function(e,t,i){"use strict";i.r(t),i.d(t,"StaffModule",function(){return ue});var a=i("mrSG"),o=i("KALY"),n=i("cNn3"),r=i("k8YA"),s=i("LRne"),c=i("eIep"),l=i("gSRN"),d=i("nS6G"),h=i("fXoL"),b=i("8/KI"),p=i("DUwT"),u=i("5IEl"),f=i("w76M"),m=i("ZzPI"),g=i("WYlB"),x=i("XPKZ"),S=i("6t9p"),v=i("PVOt"),y=i("ofXK");const w=["staffDataGrid"],B=["staffShipperDataGrid"],P=["memberShipperDataGrid"];function C(e,t){if(1&e){const e=h.Rb();h.Qb(0,"dx-button",59),h.Xb("onClick",function(t){return h.pc(e),h.Zb(3).openPopup(t)}),h.Pb()}if(2&e){const e=h.Zb(3);h.gc("text",e.textCreateButton)}}function D(e,t){if(1&e){const e=h.Rb();h.Qb(0,"dx-button",60),h.Xb("onClick",function(t){return h.pc(e),h.Zb(3).onDelete(t)}),h.Pb()}2&e&&h.fc("useSubmitBehavior",!1)}function N(e,t){if(1&e){const e=h.Rb();h.Qb(0,"div"),h.Qb(1,"dx-button",55),h.Xb("onClick",function(){return h.pc(e),h.Zb(2).clearForm()}),h.Pb(),h.Nb(2,"dx-button",56),h.tc(3,C,1,1,"dx-button",57),h.tc(4,D,1,1,"dx-button",58),h.Pb()}if(2&e){const e=h.Zb(2);h.Bb(2),h.fc("useSubmitBehavior",!0),h.Bb(1),h.fc("ngIf",!1===e.hasAccount&&e.formData.id&&e.formData&&null===e.formData.userId),h.Bb(1),h.fc("ngIf",e.selectedRows)}}function k(e,t){1&e&&(h.Qb(0,"div",61),h.Nb(1,"img",62),h.Pb()),2&e&&(h.Bb(1),h.fc("src","assets/image/plus.png",h.rc))}function O(e,t){if(1&e&&(h.Qb(0,"div",63),h.Nb(1,"img",64),h.Pb()),2&e){const e=h.Zb(2);h.Bb(1),h.fc("src",e.image,h.rc)}}function Q(e,t){1&e&&(h.Qb(0,"div",65),h.Qb(1,"span",66),h.vc(2,"Danh s\xe1ch shipper \u0111ang qu\u1ea3n l\xfd"),h.Pb(),h.Pb())}function A(e,t){1&e&&(h.Qb(0,"div",69),h.vc(1," \u0110\u1ec3 thao t\xe1c ch\u1ee9c n\u0103ng n\xe0y. T\xe0i kho\u1ea3n \u0111\u0103ng nh\u1eadp c\u1ea7n l\xe0 Manager v\xe0 nh\xe2n vi\xean \u0111\u01b0\u1ee3c ch\u1ecdn ph\u1ea3i l\xe0 Operator "),h.Pb())}function R(e,t){if(1&e){const e=h.Rb();h.Qb(0,"dx-tooltip",67),h.Xb("visibleChange",function(t){return h.pc(e),h.Zb(2).defaultVisible=t}),h.tc(1,A,2,0,"div",68),h.Pb()}if(2&e){const e=h.Zb(2);h.fc("visible",e.defaultVisible)("closeOnOutsideClick",!1),h.Bb(1),h.fc("dxTemplateOf","content")}}function T(e,t){if(1&e){const e=h.Rb();h.Qb(0,"div"),h.Qb(1,"dx-button",73),h.Xb("onClick",function(){h.pc(e);const i=t.$implicit;return h.Zb(3).onRemoveOperator(i.data.id)}),h.Pb(),h.Pb()}if(2&e){const e=h.Zb(3);h.Bb(1),h.fc("disabled",!e.isManager)}}const I=function(){return[5,10,20,50,100,200]};function F(e,t){if(1&e&&(h.Qb(0,"dx-data-grid",70,71),h.Nb(2,"dxo-paging",15),h.Nb(3,"dxo-filter-row",16),h.Nb(4,"dxo-pager",17),h.Nb(5,"dxi-column",18),h.Nb(6,"dxi-column",72),h.Nb(7,"dxi-column",21),h.tc(8,T,2,1,"div",11),h.Pb()),2&e){const e=h.Zb(2);h.fc("height","500px")("showColumnLines",!1)("remoteOperations",!0)("rowAlternationEnabled",!0)("hoverStateEnabled",!0)("dataSource",e.memberShipper)("columnAutoWidth",!0)("showBorders",!0),h.Bb(2),h.fc("pageSize",50),h.Bb(1),h.fc("visible",!0),h.Bb(1),h.fc("showPageSizeSelector",!0)("allowedPageSizes",h.hc(15,I))("showInfo",!0),h.Bb(3),h.fc("width",100),h.Bb(1),h.fc("dxTemplateOf","cellTemplateBtn")}}const E=function(e){return{value:e}},G=function(e,t){return{items:e,displayExpr:"name",valueExpr:"id",searchEnabled:!0,onValueChanged:t}},M=function(){return{invalidDateMessage:"Ng\xe0y ph\u1ea3i theo \u0111\u1ecbnh d\u1ea1ng: MM/dd/yyyy",displayFormat:"dd/MM/yyyy"}},L=function(e){return{items:e,displayExpr:"name",valueExpr:"id",searchEnabled:!0}},V=function(e,t){return{items:e,displayExpr:"name",valueExpr:"id",searchEnabled:!0,placeholder:"",disabled:t}};function X(e,t){if(1&e){const e=h.Rb();h.Qb(0,"div"),h.Qb(1,"form",22),h.Xb("submit",function(t){return h.pc(e),h.Zb().onFormSubmit(t)}),h.Qb(2,"dx-form",23),h.Qb(3,"dxi-item",24),h.tc(4,N,5,3,"div",7),h.Pb(),h.Qb(5,"dxi-item",25),h.Qb(6,"dxi-item",6),h.Qb(7,"dxi-item",4),h.Qb(8,"dxi-item",26),h.Nb(9,"dxo-label",27),h.Pb(),h.Nb(10,"dxi-item",28),h.Qb(11,"dxi-item",29),h.Nb(12,"dxo-label",27),h.Nb(13,"dxi-validation-rule",30),h.Nb(14,"dxi-validation-rule",31),h.Pb(),h.Qb(15,"dxi-item",32),h.Nb(16,"dxo-label",27),h.Pb(),h.Qb(17,"dxi-item",33),h.Nb(18,"dxo-label",27),h.Nb(19,"dxi-validation-rule",34),h.Nb(20,"dxi-validation-rule",35),h.Pb(),h.Qb(21,"dxi-item",36),h.Nb(22,"dxo-label",27),h.Nb(23,"dxi-validation-rule",30),h.Pb(),h.Pb(),h.Qb(24,"dxi-item",24),h.Qb(25,"dxi-item",37),h.Nb(26,"dxo-label",27),h.Nb(27,"dxi-validation-rule",30),h.Nb(28,"dxi-validation-rule",38),h.Pb(),h.Qb(29,"dxi-item",39),h.Nb(30,"dxo-label",27),h.Nb(31,"dxi-validation-rule",30),h.Nb(32,"dxi-validation-rule",40),h.Nb(33,"dxi-validation-rule",41),h.Pb(),h.Qb(34,"dxi-item",42),h.Nb(35,"dxo-label",27),h.Nb(36,"dxi-validation-rule",43),h.Pb(),h.Qb(37,"dxi-item",44),h.Nb(38,"dxo-label",27),h.Pb(),h.Qb(39,"dxi-item",45),h.Nb(40,"dxo-label",27),h.Pb(),h.Pb(),h.Pb(),h.Qb(41,"dxi-item",4),h.Qb(42,"dxi-item"),h.Nb(43,"dxo-label",27),h.Qb(44,"div",46),h.Qb(45,"input",47),h.Xb("change",function(t){return h.pc(e),h.Zb().handleInputChange(t)}),h.Pb(),h.tc(46,k,2,1,"div",48),h.tc(47,O,2,1,"div",49),h.Pb(),h.Pb(),h.Pb(),h.Qb(48,"dxi-item",6),h.Qb(49,"dxi-item"),h.tc(50,Q,3,0,"div",50),h.Pb(),h.Qb(51,"dxi-item"),h.Qb(52,"div",51),h.Xb("mouseenter",function(){return h.pc(e),h.Zb().toggleDefault()})("mouseleave",function(){return h.pc(e),h.Zb().toggleDefault()}),h.Qb(53,"dx-button",52),h.Xb("onClick",function(){return h.pc(e),h.Zb().openPopupAddShipper()}),h.Pb(),h.Pb(),h.tc(54,R,2,3,"dx-tooltip",53),h.Pb(),h.Qb(55,"dxi-item"),h.tc(56,F,9,16,"dx-data-grid",54),h.Pb(),h.Pb(),h.Pb(),h.Pb(),h.Pb(),h.Pb()}if(2&e){const e=h.Zb();h.Bb(2),h.fc("readOnly",!1)("formData",e.formData)("showColonAfterLabel",!0)("showValidationSummary",!1),h.Bb(1),h.fc("colCount",2),h.Bb(4),h.fc("colCount",4),h.Bb(1),h.fc("colSpan",2)("disabled",!0)("editorOptions",h.ic(45,E,e.user)),h.Bb(1),h.fc("text","T\xean \u0111\u0103ng nh\u1eadp"),h.Bb(1),h.fc("colSpan",2),h.Bb(1),h.fc("colSpan",2),h.Bb(1),h.fc("text","H\u1ecd v\xe0 t\xean"),h.Bb(2),h.fc("max",300),h.Bb(1),h.fc("colSpan",2)("editorOptions",h.jc(47,G,e.lookupRole,e.onRoleChange)),h.Bb(1),h.fc("text","Vai tr\xf2"),h.Bb(1),h.fc("colSpan",2)("editorOptions",h.hc(50,M)),h.Bb(1),h.fc("text","Ng\xe0y sinh"),h.Bb(2),h.fc("max",e.maxDate),h.Bb(1),h.fc("colSpan",2)("editorOptions",h.ic(51,L,e.lookupGender)),h.Bb(1),h.fc("text","Gi\u1edbi t\xednh"),h.Bb(2),h.fc("colCount",4),h.Bb(1),h.fc("colSpan",2),h.Bb(1),h.fc("text","Email"),h.Bb(3),h.fc("colSpan",2),h.Bb(1),h.fc("text","S\u1ed1 \u0111i\u1ec7n tho\u1ea1i"),h.Bb(2),h.fc("min",10),h.Bb(1),h.fc("max",15),h.Bb(1),h.fc("colSpan",4),h.Bb(1),h.fc("text","\u0110\u1ecba ch\u1ec9"),h.Bb(1),h.fc("max",300),h.Bb(1),h.fc("colSpan",2)("editorOptions",h.jc(53,V,e.staffsOperator,e.formData.roleId!==e.RoleShipperId)),h.Bb(1),h.fc("text","Tr\u1ef1c thu\u1ed9c qu\u1ea3n l\xfd"),h.Bb(1),h.fc("colSpan",6),h.Bb(1),h.fc("text","\u0110ang l\xe0m vi\u1ec7c"),h.Bb(1),h.fc("colCount",2),h.Bb(2),h.fc("text","H\xecnh \u0111\u1ea1i di\u1ec7n"),h.Bb(3),h.fc("ngIf",!e.image),h.Bb(1),h.fc("ngIf",e.image),h.Bb(6),h.fc("disabled",!e.formData.id||null==e.formData.id||e.formData.roleId!=e.RoleOperatorId||!e.isManager),h.Bb(1),h.fc("ngIf",!e.formData.id||null==e.formData.id||e.formData.roleId!=e.RoleOperatorId||!e.isManager)}}function Z(e,t){if(1&e){const e=h.Rb();h.Qb(0,"dx-data-grid",74,75),h.Xb("heightChange",function(t){return h.pc(e),h.Zb().gridHeight=t})("selectedRowKeysChange",function(t){return h.pc(e),h.Zb().selectedRows=t})("onSelectionChanged",function(t){return h.pc(e),h.Zb().onSelectionChanged(t)}),h.Nb(2,"dxo-filter-row",16),h.Nb(3,"dxo-selection",76),h.Nb(4,"dxo-paging",15),h.Nb(5,"dxo-pager",17),h.Qb(6,"dxi-column",77),h.Xb("filterValueChange",function(t){return h.pc(e),h.Zb().nameFilter=t}),h.Pb(),h.Qb(7,"dxi-column",78),h.Xb("filterValueChange",function(t){return h.pc(e),h.Zb().emailFilter=t}),h.Pb(),h.Qb(8,"dxi-column",79),h.Xb("filterValueChange",function(t){return h.pc(e),h.Zb().phoneFilter=t}),h.Pb(),h.Nb(9,"dxi-column",80),h.Qb(10,"dxi-column",81),h.Nb(11,"dxo-lookup",82),h.Pb(),h.Pb()}if(2&e){const e=h.Zb();h.fc("height",e.gridHeight)("showColumnLines",!1)("remoteOperations",!0)("rowAlternationEnabled",!0)("hoverStateEnabled",!0)("selectedRowKeys",e.selectedRows)("dataSource",e.staffs)("columnAutoWidth",!0)("showBorders",!0),h.Bb(2),h.fc("visible",!0),h.Bb(2),h.fc("pageSize",50),h.Bb(1),h.fc("showPageSizeSelector",!0)("allowedPageSizes",h.hc(19,I))("showInfo",!0),h.Bb(1),h.fc("filterValue",e.nameFilter),h.Bb(1),h.fc("filterValue",e.emailFilter),h.Bb(1),h.fc("filterValue",e.phoneFilter),h.Bb(2),h.fc("caption","\u0110ang l\xe0m vi\u1ec7c"),h.Bb(1),h.fc("dataSource",e.staffStatusDataSource)}}const z=function(){return{valueChangeEvent:"keyup"}},K=function(){return{mode:"password"}};function q(e,t){if(1&e){const e=h.Rb();h.Qb(0,"div"),h.Qb(1,"div",83),h.Nb(2,"div",1),h.Qb(3,"div",2),h.Qb(4,"form",22),h.Xb("submit",function(t){return h.pc(e),h.Zb().onSubmitCreateStaffAccount(t)}),h.Qb(5,"dx-form",84),h.Qb(6,"dxi-item",4),h.Qb(7,"dxi-item",4),h.Qb(8,"dxi-item",85),h.Xb("onKeyUp",function(t){return h.pc(e),h.Zb().onKeyUpPhone(t)}),h.Nb(9,"dxo-label",27),h.Nb(10,"dxi-validation-rule",30),h.Nb(11,"dxi-validation-rule",86),h.Nb(12,"dxi-validation-rule",40),h.Nb(13,"dxi-validation-rule",41),h.Pb(),h.Qb(14,"dxi-item",87),h.Nb(15,"dxo-label",27),h.Nb(16,"dxi-validation-rule",30),h.Pb(),h.Qb(17,"dxi-item",87),h.Nb(18,"dxo-label",27),h.Nb(19,"dxi-validation-rule",30),h.Nb(20,"dxi-validation-rule",88),h.Pb(),h.Pb(),h.Qb(21,"dxi-item",4),h.Qb(22,"dxi-item",89),h.Nb(23,"dxo-label",27),h.Nb(24,"dxi-validation-rule",90),h.Pb(),h.Pb(),h.Pb(),h.Qb(25,"dxi-item",91),h.Nb(26,"dx-button",92),h.Pb(),h.Pb(),h.Pb(),h.Pb(),h.Pb(),h.Pb()}if(2&e){const e=h.Zb();h.Bb(5),h.fc("readOnly",!1)("formData",e.userRegisterAccountModel)("showColonAfterLabel",!0)("showValidationSummary",!1),h.Bb(1),h.fc("colCount",2),h.Bb(1),h.fc("colCount",4),h.Bb(1),h.fc("colSpan",4)("editorOptions",h.hc(25,z)),h.Bb(1),h.fc("text","T\xean \u0111\u0103ng nh\u1eadp"),h.Bb(2),h.fc("validationCallback",e.asyncValidation),h.Bb(1),h.fc("min",10),h.Bb(1),h.fc("max",15),h.Bb(1),h.fc("colSpan",4)("editorOptions",h.hc(26,K)),h.Bb(1),h.fc("text","M\u1eadt kh\u1ea9u"),h.Bb(2),h.fc("colSpan",4)("editorOptions",h.hc(27,K)),h.Bb(1),h.fc("text","X\xe1c nh\u1eadn m\u1eadt kh\u1ea9u"),h.Bb(2),h.fc("comparisonTarget",e.passwordComparison),h.Bb(1),h.fc("colCount",4),h.Bb(1),h.fc("colSpan",4),h.Bb(1),h.fc("text","H\u1ecd T\xean"),h.Bb(1),h.fc("max",50),h.Bb(1),h.fc("colCount",2),h.Bb(1),h.fc("useSubmitBehavior",!0)}}function W(e,t){if(1&e){const e=h.Rb();h.Qb(0,"div"),h.Qb(1,"dx-button",93),h.Xb("onClick",function(){h.pc(e);const i=t.$implicit;return h.Zb().onAddShipper(i.data)}),h.Pb(),h.Pb()}}let U=(()=>{class e{constructor(e,t,i,a,o,n){var r;this.staffServiceProxy=e,this.messageService=t,this.lookupServiceProxy=i,this.userServiceProxy=a,this.staffService=o,this.appAuthService=n,this.maxDate=new Date,this.popupCreateAccount=!1,this.openPopupCreate=!1,this.hasAccount=!1,this.isLinkAccount=!1,this.RoleOperatorId=d.a.EmployeeRole.Operator,this.RoleShipperId=d.a.EmployeeRole.Shipper,this.RoleManagerId=d.a.EmployeeRole.Manager,this.popupAddShipper=!1,this.defaultVisible=!1,this.staffStatusDataSource=d.a.statusStaff,this.passwordComparison=()=>this.form.instance.option("formData").Password,this.maxDate=new Date(this.maxDate.setFullYear(this.maxDate.getFullYear()-18)),this.asyncValidation=this.asyncValidation.bind(this),this.getScreenGridSize(),this.originalPhonenumber="",this.onRoleChange=this.onRoleChange.bind(this),this.userLogin=this.appAuthService.getStaffLogin(),this.isManager=(null===(r=this.userLogin)||void 0===r?void 0:r.roleId)==d.a.EmployeeRole.Manager}ngOnInit(){this.staffs=new l.a({load:e=>this.staffService.getAll(e.mapFrom(),null,null)}),this.onGetOperator(),this.onGetStaffShipper(),this.lookupServiceProxy.gender().subscribe(e=>{this.lookupGender=e}),this.lookupServiceProxy.role().subscribe(e=>{this.lookupRole=e}),this.formData=new n.U}onGetOperator(){this.staffService.getLookup(d.a.EmployeeRole.Operator).subscribe(e=>{this.staffsOperator=e.result})}onGetStaffShipper(){this.staffService.getLookup(d.a.EmployeeRole.Shipper).subscribe(e=>{this.staffsShipper=e.result})}getScreenGridSize(e){this.screenHeight=window.innerHeight,this.gridHeight=this.screenHeight-180+"px"}onFormFilterSubmit(e){e.preventDefault(),this.staffDataGrid.instance.refresh()}onGetMemberShipper(){this.memberShipper=new l.a({load:e=>this.staffService.getMemberByStaffId(e.mapFrom(),this.formData.id)})}onSelectionChanged(e){if(this.selectedRows&&this.selectedRows.length>0)if(this.staffServiceProxy.get(this.selectedRows[0].id).subscribe(e=>{this.formData=e,this.image=e.image,this.imageFile=null,this.originalPhonenumber=e.phone,this.onGetMemberShipper()}),this.selectedRows[0].phone&&!this.isEmptyOrWhiteSpace(this.selectedRows[0].phone)){const e=new o.d;e.phoneNumber=this.selectedRows[0].phone,this.userServiceProxy.getUserBasicByPhone(e).subscribe(e=>{(null==e?void 0:e.data)?this.selectedRows[0].userId>0?(this.user=e.data.fullName,this.hasAccount=!0):(this.textCreateButton="Li\xean k\u1ebft t\xe0i kho\u1ea3n",this.isLinkAccount=!0,this.accountInfo=e.data):(this.textCreateButton="T\u1ea1o t\xe0i kho\u1ea3n",this.hasAccount=!1,this.user="Nh\xe2n vi\xean ch\u01b0a c\xf3 t\xe0i kho\u1ea3n.",this.isLinkAccount=!1)})}else this.textCreateButton="T\u1ea1o t\xe0i kho\u1ea3n",this.hasAccount=!1,this.user="Nh\xe2n vi\xean ch\u01b0a c\xf3 t\xe0i kho\u1ea3n.",this.isLinkAccount=!1}isEmptyOrWhiteSpace(e){return!e||!e.trim()}_loadDetail(e){return this.staffServiceProxy.get(e).pipe(Object(c.a)(e=>(this.formData=e,this.image=e.image,this.imageFile=null,Object(s.a)(e))))}_refreshDataGrid(){this.staffDataGrid.instance.refresh()}onFormSubmit(e){e.preventDefault();const t=new n.T;t.init(this.formData),this.originalPhonenumber!=t.phone?this.staffService.checkExistingPhoneNumber(t.phone).subscribe(e=>{e.result?this.messageService.error("S\u1ed1 \u0111i\u1ec7n tho\u1ea1i \u0111\xe3 \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng!"):this.onSaveStaff(t)},e=>{this.messageService.error("L\u1ed7i!")}):this.onSaveStaff(t)}onSaveStaff(e){this.formData&&this.formData.id?this.onUpdateStaff(this.formData.id,e):this.onCreateStaff(e),this.staffDataGrid.instance.refresh()}onUpdateStaff(e,t){t.imageFile=this.imageFile,this.staffServiceProxy.update(e,t).subscribe(e=>{this.originalPhonenumber=t.phone,t.roleId==this.RoleOperatorId&&this.onGetOperator(),this.messageService.success("C\u1eadp nh\u1eadt th\xe0nh c\xf4ng!")})}onCreateStaff(e){e.imageFile=this.imageFile,this.staffServiceProxy.create(e).subscribe(t=>{this._loadDetail(t).subscribe(t=>{this.originalPhonenumber=e.phone,this.messageService.success("T\u1ea1o nh\xe2n vi\xean th\xe0nh c\xf4ng!")}),e.roleId==this.RoleOperatorId&&this.onGetOperator()})}onDelete(e){this.messageService.confirmDelete(e=>{e&&this.formData&&this.formData.id&&this.staffServiceProxy.delete(this.formData.id).subscribe(e=>{this.messageService.success("X\xf3a nh\xe2n vi\xean th\xe0nh c\xf4ng!"),this.staffDataGrid.instance.refresh(),this.formData=new n.U,this.image=null,this.imageFile=null,this.selectedRows=null,this.user=""})})}clearForm(){this.formData=new n.U,this.formData.isActive=!0,this.userRegisterAccountModel=new o.e,this.image=null,this.imageFile=null,this.selectedRows=null,this.user=""}openPopup(e){if(this.isLinkAccount){const e=new n.T;e.init(this.formData),e.userId=Number(this.accountInfo.id),e.imageFile=this.imageFile,this.staffServiceProxy.update(this.formData.id,e).subscribe(e=>{this.messageService.success("L\u01b0u th\xe0nh c\xf4ng"),this.staffDataGrid.instance.refresh()}),this.hasAccount=!0}else this.openPopupCreate=!0,this.userRegisterAccountModel=new o.e,this.userRegisterAccountModel.fullName=this.formData.name,this.userRegisterAccountModel.phoneNumber=this.formData.phone,this.userRegisterAccountModel.userName=this.formData.phone,this.userRegisterAccountModel.deviceToken="",this.userRegisterAccountModel.companyId=1,this.userRegisterAccountModel.applicationId=1}asyncValidation(e){return new Promise(t=>{setTimeout(()=>Object(a.a)(this,void 0,void 0,function*(){e.value.match(/^\d+$/)||(e.rule.message="Kh\xf4ng nh\u1eadp ch\u1eef.",t(!1)),t(!0)}),1e3)})}onSubmitCreateStaffAccount(e){return Object(a.a)(this,void 0,void 0,function*(){if(e.preventDefault(),this.userRegisterAccountModel){const e=yield this.createAccount(this.userRegisterAccountModel);this.formData.userId=Number(e.id),this.isEmptyOrWhiteSpace(this.formData.phone)&&(this.formData.phone=this.userRegisterAccountModel.userName);const t=new n.T;t.init(this.formData),this.staffServiceProxy.update(this.formData.id,t).subscribe(t=>{this.messageService.success("T\u1ea1o T\xe0i kho\u1ea3n th\xe0nh c\xf4ng!"),this.user=e.fullName}),this.popupCreateAccount=!1,this.hasAccount=!1,this.userRegisterAccountModel=new o.e,this._refreshDataGrid()}})}createAccount(e){return this.userRegisterAccountModel.userName=e.phoneNumber,new Promise(e=>{this.userServiceProxy.register(this.userRegisterAccountModel).toPromise().then(t=>{e(t.data)})})}handleInputChange(e){const t=e.dataTransfer?e.dataTransfer.files[0]:e.target.files[0],i=new FileReader;t.type.match(/image-*/)?(i.onload=this._handleReaderLoaded.bind(this),i.readAsDataURL(t)):this.messageService.error("file ch\u1ecdn kh\xf4ng ph\u1ea3i l\xe0 h\xecnh \u1ea3nh")}_handleReaderLoaded(e){const t=e.target;this.image=t.result,this.imageFile=t.result}_getNameOperator(e){if(this.staffsOperator&&this.staffsOperator.length>0){const t=this.staffsOperator.find(t=>t.id===e);if(t)return t.name}return""}onRemoveOperator(e){this.messageService.confirmDelete(t=>{t&&this.staffService.removeOperator(e).subscribe(e=>{this.messageService.success("X\xf3a th\xe0nh c\xf4ng!"),this.onGetStaffShipper(),this.memberShipperDataGrid.instance.refresh()},e=>{this.messageService.error(e.error.message?e.error.message:"C\u1eadp nh\u1eadt th\u1ea5t b\u1ea1i!")})})}onAddShipper(e){this.formData.id?e.operatorId!=this.formData.id?e.operatorId&&e.operatorId!==this.formData.id?this.messageService.confirm(`Nh\xe2n vi\xean n\xe0y \u0111\xe3 c\xf3 ng\u01b0\u1eddi qu\u1ea3n l\xfd l\xe0 ${this._getNameOperator(e.operatorId)}, b\u1ea1n c\xf3 mu\u1ed1n thay \u0111\u1ed5i kh\xf4ng?`,"X\xe1c nh\u1eadn",t=>{t&&this.staffService.updateOperator(e.id,this.formData.id,!0).subscribe(e=>{this.messageService.success("C\u1eadp nh\u1eadt th\xe0nh c\xf4ng!"),this.onGetStaffShipper(),this.memberShipperDataGrid.instance.refresh()},e=>{this.messageService.error(e.error.message?e.error.message:"C\u1eadp nh\u1eadt th\u1ea5t b\u1ea1i!")})}):this.staffService.updateOperator(e.id,this.formData.id,!1).subscribe(e=>{this.messageService.success("C\u1eadp nh\u1eadt th\xe0nh c\xf4ng!"),this.onGetStaffShipper(),this.memberShipperDataGrid.instance.refresh()},e=>{this.messageService.error(e.error.message?e.error.message:"C\u1eadp nh\u1eadt th\u1ea5t b\u1ea1i!")}):this.messageService.error("Nh\xe2n vi\xean n\xe0y \u0111\xe3 \u0111\u01b0\u1ee3c qu\u1ea3n l\xfd b\u1edfi nh\xe2n vi\xean \u0111ang ch\u1ecdn!"):this.messageService.error("C\u1ea7n ch\u1ecdn nh\xe2n vi\xean tr\u01b0\u1edbc khi th\u1ef1c hi\u1ec7n!")}openPopupAddShipper(){this.popupAddShipper=!0}onRoleChange(e){e.value!=this.RoleShipperId&&(this.formData.operatorId=null)}toggleDefault(){this.defaultVisible=!this.defaultVisible}}return e.\u0275fac=function(t){return new(t||e)(h.Mb(n.V),h.Mb(b.a),h.Mb(n.E),h.Mb(o.f),h.Mb(p.a),h.Mb(u.a))},e.\u0275cmp=h.Gb({type:e,selectors:[["app-staff-list"]],viewQuery:function(e,t){if(1&e&&(h.zc(w,1),h.zc(B,1),h.zc(P,1),h.zc(r.a,1)),2&e){let e;h.lc(e=h.Yb())&&(t.staffDataGrid=e.first),h.lc(e=h.Yb())&&(t.staffShipperDataGrid=e.first),h.lc(e=h.Yb())&&(t.memberShipperDataGrid=e.first),h.lc(e=h.Yb())&&(t.form=e.first)}},hostBindings:function(e,t){1&e&&h.Xb("resize",function(e){return t.getScreenGridSize(e)},!1,h.oc)},decls:25,vars:33,consts:[[1,"card","custom-card",2,"margin-bottom","5px"],[1,"card-header"],[1,"card-body"],[3,"readOnly","formData","showColonAfterLabel","showValidationSummary"],["itemType","group","caption","",3,"colCount"],["itemType","group","caption","Th\xf4ng tin ch\xednh",3,"colSpan"],["itemType","group","caption",""],[4,"dxTemplate"],["itemType","group","caption","Danh s\xe1ch nh\xe2n vi\xean",3,"colSpan"],[3,"height","showColumnLines","remoteOperations","rowAlternationEnabled","hoverStateEnabled","selectedRowKeys","dataSource","columnAutoWidth","showBorders","heightChange","selectedRowKeysChange","onSelectionChanged",4,"dxTemplate"],["width","60%","height","auto","title","Nh\u1eadp t\xe0i kho\u1ea3n Nh\xe2n vi\xean",3,"showTitle","dragEnabled","closeOnOutsideClick","visible","visibleChange"],[4,"dxTemplate","dxTemplateOf"],["width","60%","height","auto","title","Danh s\xe1ch shipper",3,"showTitle","dragEnabled","closeOnOutsideClick","visible","visibleChange"],["keyExpr","id",3,"height","showColumnLines","remoteOperations","rowAlternationEnabled","hoverStateEnabled","dataSource","columnAutoWidth","showBorders"],["staffShipperDataGrid",""],[3,"pageSize"],[3,"visible"],[3,"showPageSizeSelector","allowedPageSizes","showInfo"],["dataField","name","caption","T\xean"],["dataField","operatorId","caption","Ng\u01b0\u1eddi qu\u1ea3n l\xfd"],["valueExpr","id","displayExpr","name",3,"dataSource"],["cellTemplate","cellTemplateBtn","dataField","","caption","T\xf9y ch\u1ec9nh",3,"width"],["action","",3,"submit"],["validationGroup","staffsForm",3,"readOnly","formData","showColonAfterLabel","showValidationSummary"],["itemType","group",3,"colCount"],["itemType","group","caption","",2,"margin-bottom","20px"],["dataField","",3,"colSpan","disabled","editorOptions"],[3,"text"],["itemType","empty",3,"colSpan"],["dataField","name",3,"colSpan"],["type","required","message","Tr\u01b0\u1eddng n\xe0y l\xe0 b\u1eaft bu\u1ed9c"],["type","stringLength","message","T\xean kh\xf4ng v\u01b0\u1ee3t qu\xe1 300 k\xfd t\u1ef1",3,"max"],["dataField","roleId","editorType","dxSelectBox",3,"colSpan","editorOptions"],["dataField","birthday","editorType","dxDateBox",3,"colSpan","editorOptions"],["type","required","message","Tr\u01b0\u1eddng n\xe0y kh\xf4ng \u0111\u01b0\u1ee3c b\u1ecf tr\u1ed1ng"],["type","range","message","Ng\xe0y sinh ph\u1ea3i tr\xean 18 tu\u1ed5i",3,"max"],["dataField","genderId","editorType","dxSelectBox",3,"colSpan","editorOptions"],["dataField","email",3,"colSpan"],["type","email","message","Email kh\xf4ng h\u1ee3p l\u1ec7"],["dataField","phone",3,"colSpan"],["type","stringLength","message","S\u1ed1 \u0111i\u1ec7n tho\u1ea1i t\u1ed1i thi\u1ec3u 10 s\u1ed1",3,"min"],["type","stringLength","message","V\u01b0\u1ee3t qu\xe1  k\xed t\u1ef1 cho ph\xe9p",3,"max"],["dataField","address",3,"colSpan"],["type","stringLength","message","\u0110\u1ecba ch\u1ec9 kh\xf4ng v\u01b0\u1ee3t qu\xe1 300 k\xfd t\u1ef1",3,"max"],["dataField","operatorId","editorType","dxSelectBox",3,"colSpan","editorOptions"],["dataField","isActive","editorType","dxSwitch",3,"colSpan"],[1,"image-upload",2,"height","10rem"],["type","file","accept","image/*",3,"change"],["style","position: absolute; z-index: 1; top: 0;bottom: 0; border: 2px dashed #c8c8c8; border-radius: 0.5rem;",4,"ngIf"],["style","position: absolute; z-index: 1; top: 0; bottom: 0;",4,"ngIf"],["style","border-bottom: #ccc 1px solid;","class","mt-5 mb-2 pb-2",4,"dxTemplate"],["id","shipperTooltip",2,"display","inline-block",3,"mouseenter","mouseleave"],["icon","fa fa-plus-square","text","Th\xeam shipper","type","success",2,"margin-right","10px","background-color","#ed8200","font-weight","bold","padding","2px",3,"disabled","onClick"],["target","#shipperTooltip",3,"visible","closeOnOutsideClick","visibleChange",4,"ngIf"],[3,"height","showColumnLines","remoteOperations","rowAlternationEnabled","hoverStateEnabled","dataSource","columnAutoWidth","showBorders",4,"dxTemplate"],["text","T\u1ea1o m\u1edbi","icon","fa fa-plus-square","type","success",2,"margin-right","10px","background-color","#ed8200","font-weight","bold","padding","2px",3,"onClick"],["text","L\u01b0u","type","success","icon","fa fa-floppy-o","validationGroup","staffsForm",2,"margin-right","10px","background-color","#12007c","font-weight","bold","padding","2px",3,"useSubmitBehavior"],["type","success","icon","user","style"," margin-right: 10px; background-color:#12007c; font-weight: bold; padding: 2px;",3,"text","onClick",4,"ngIf"],["text","X\xf3a","type","success","icon","fa fa-ban","validationGroup","staffsForm","style"," margin-right: 10px; background-color:#ff000f; font-weight: bold; padding: 2px;",3,"useSubmitBehavior","onClick",4,"ngIf"],["type","success","icon","user",2,"margin-right","10px","background-color","#12007c","font-weight","bold","padding","2px",3,"text","onClick"],["text","X\xf3a","type","success","icon","fa fa-ban","validationGroup","staffsForm",2,"margin-right","10px","background-color","#ff000f","font-weight","bold","padding","2px",3,"useSubmitBehavior","onClick"],[2,"position","absolute","z-index","1","top","0","bottom","0","border","2px dashed #c8c8c8","border-radius","0.5rem"],[2,"width","2rem","height","2rem","margin","4rem","display","block",3,"src"],[2,"position","absolute","z-index","1","top","0","bottom","0"],[2,"max-width","100%","max-height","100%",3,"src"],[1,"mt-5","mb-2","pb-2",2,"border-bottom","#ccc 1px solid"],[1,"dx-form-group-caption"],["target","#shipperTooltip",3,"visible","closeOnOutsideClick","visibleChange"],["style","font-size: 13px;",4,"dxTemplate","dxTemplateOf"],[2,"font-size","13px"],[3,"height","showColumnLines","remoteOperations","rowAlternationEnabled","hoverStateEnabled","dataSource","columnAutoWidth","showBorders"],["memberShipperDataGrid",""],["dataField","phone","caption","S\u1ed1 \u0111i\u1ec7n tho\u1ea1i"],["icon","fa fa-trash","text","X\xf3a","type","success",2,"background-color","#ff000f",3,"disabled","onClick"],[3,"height","showColumnLines","remoteOperations","rowAlternationEnabled","hoverStateEnabled","selectedRowKeys","dataSource","columnAutoWidth","showBorders","heightChange","selectedRowKeysChange","onSelectionChanged"],["staffDataGrid",""],["mode","single"],["dataField","name","caption","T\xean",3,"filterValue","filterValueChange"],["dataField","email","caption","Email",3,"filterValue","filterValueChange"],["dataField","phone","caption","S\u1ed1 \u0111i\u1ec7n tho\u1ea1i",3,"filterValue","filterValueChange"],["dataField","role","caption","Vai tr\xf2","alignment","center"],["dataField","isActive",3,"caption"],["valueExpr","value","displayExpr","name",3,"dataSource"],[1,"card"],["id","form",3,"readOnly","formData","showColonAfterLabel","showValidationSummary"],["dataField","userName",3,"colSpan","editorOptions","onKeyUp"],["type","async","message","T\xe0i kho\u1ea3n \u0111\xe3 t\u1ed3n t\u1ea1i.",3,"validationCallback"],["dataField","password",3,"colSpan","editorOptions"],["type","compare","message","X\xe1c nh\u1eadn M\u1eadt kh\u1ea9u kh\xf4ng kh\u1edbp.",3,"comparisonTarget"],["dataField","fullName",3,"colSpan"],["type","stringLength","message","V\u01b0\u1ee3t qu\xe1 k\xed t\u1ef1 cho ph\xe9p",3,"max"],["itemType","group","caption","",2,"text-align-last","end",3,"colCount"],["icon","fa fa-floppy-o","text","L\u01b0u","type","success","validationGroup","servicePackageProcess",2,"margin-right","10px",3,"useSubmitBehavior"],["icon","fa fa-plus-square","text","Th\xeam","type","success","hint","Th\xeam shipper",3,"onClick"]],template:function(e,t){1&e&&(h.Qb(0,"div",0),h.Nb(1,"div",1),h.Qb(2,"div",2),h.Qb(3,"dx-form",3),h.Qb(4,"dxi-item",4),h.Qb(5,"dxi-item",5),h.Qb(6,"dxi-item",6),h.tc(7,X,57,56,"div",7),h.Pb(),h.Pb(),h.Qb(8,"dxi-item",8),h.Qb(9,"dxi-item",6),h.Qb(10,"dxi-item"),h.tc(11,Z,12,20,"dx-data-grid",9),h.Pb(),h.Pb(),h.Pb(),h.Pb(),h.Pb(),h.Pb(),h.Pb(),h.Qb(12,"dx-popup",10),h.Xb("visibleChange",function(e){return t.openPopupCreate=e}),h.tc(13,q,27,28,"div",11),h.Pb(),h.Qb(14,"dx-popup",12),h.Xb("visibleChange",function(e){return t.popupAddShipper=e}),h.Qb(15,"dx-data-grid",13,14),h.Nb(17,"dxo-paging",15),h.Nb(18,"dxo-filter-row",16),h.Nb(19,"dxo-pager",17),h.Nb(20,"dxi-column",18),h.Qb(21,"dxi-column",19),h.Nb(22,"dxo-lookup",20),h.Pb(),h.Nb(23,"dxi-column",21),h.tc(24,W,2,0,"div",11),h.Pb(),h.Pb()),2&e&&(h.Bb(3),h.fc("readOnly",!1)("formData",t)("showColonAfterLabel",!0)("showValidationSummary",!1),h.Bb(1),h.fc("colCount",6),h.Bb(1),h.fc("colSpan",3),h.Bb(3),h.fc("colSpan",3),h.Bb(4),h.fc("showTitle",!0)("dragEnabled",!1)("closeOnOutsideClick",!0)("visible",t.openPopupCreate),h.Bb(1),h.fc("dxTemplateOf","content"),h.Bb(1),h.fc("showTitle",!0)("dragEnabled",!1)("closeOnOutsideClick",!0)("visible",t.popupAddShipper),h.Bb(1),h.fc("height","500px")("showColumnLines",!1)("remoteOperations",!0)("rowAlternationEnabled",!0)("hoverStateEnabled",!0)("dataSource",t.staffsShipper)("columnAutoWidth",!0)("showBorders",!0),h.Bb(2),h.fc("pageSize",50),h.Bb(1),h.fc("visible",!0),h.Bb(1),h.fc("showPageSizeSelector",!0)("allowedPageSizes",h.hc(32,I))("showInfo",!0),h.Bb(3),h.fc("dataSource",t.staffsOperator),h.Bb(1),h.fc("width",100),h.Bb(1),h.fc("dxTemplateOf","cellTemplateBtn"))},directives:[r.a,S.k,v.d,f.a,m.a,S.yb,S.W,S.wb,S.f,S.ob,S.lb,S.A,y.j,g.a,x.a,S.Hb],styles:[""]}),e})();var Y=i("tyNb");const H=[{path:"",redirectTo:"list",pathMatch:"prefix"},{path:"",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=h.Gb({type:e,selectors:[["app-staff"]],decls:1,vars:0,template:function(e,t){1&e&&h.Nb(0,"router-outlet")},directives:[Y.g],styles:[""]}),e})(),children:[{path:"list",component:U}]}];let j=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=h.Kb({type:e}),e.\u0275inj=h.Jb({imports:[[Y.f.forChild(H)],Y.f]}),e})();var _=i("7m6G"),J=i("4Ewp"),$=i("Wx6Q"),ee=i("Qlw+"),te=i("gMzk"),ie=i("Gkpw"),ae=i("uTW7"),oe=i("ir3x"),ne=i("M+dh"),re=i("LT8A"),se=i("zn50"),ce=i("BbNB"),le=i("xcIV"),de=i("lgXn"),he=i("Ylls"),be=i("/ZIY"),pe=i("4/q7");let ue=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=h.Kb({type:e}),e.\u0275inj=h.Jb({imports:[[y.b,j,g.b,_.a,J.a,$.a,ee.a,r.b,te.b,ie.b,ae.a,oe.a,ne.a,re.a,se.a,ce.a,le.a,v.f,m.b,de.a,f.b,he.a,be.a,x.b,pe.b]]}),e})()},mrSG:function(e,t,i){"use strict";function a(e,t,i,a){return new(i||(i=Promise))(function(o,n){function r(e){try{c(a.next(e))}catch(t){n(t)}}function s(e){try{c(a.throw(e))}catch(t){n(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof i?t:new i(function(e){e(t)})).then(r,s)}c((a=a.apply(e,t||[])).next())})}i.d(t,"a",function(){return a})}}]);