(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{raU0:function(n,t,o){"use strict";o.r(t),o.d(t,"LoginModule",function(){return P});var e=o("tyNb");class i{constructor(n){n&&Object.assign(this,n)}}var r=o("nS6G"),a=o("KALY"),d=o("0sUf"),l=o("fXoL"),s=o("tvsI"),c=o("apjk"),b=o("5IEl");let p=(()=>{class n{constructor(n,t,o,e){this.usersServiceProxy=n,this.appSessionService=t,this.logService=o,this.appAuthService=e}login(n){d.a.setBusy(),this.usersServiceProxy.login(new a.c({companyId:1,applicationId:1,userName:n.username,password:n.password,deviceToken:""})).subscribe(t=>{t&&t.data.access_token&&(d.a.clearBusy(),this.appAuthService.setAuthenticateResult(t.data.access_token,null,t.data.expires_in,n.rememberMe),this.appSessionService.init().then(n=>{let t=location.href;t.indexOf("/login")>0&&(t=r.a.appBaseUrl),this.logService.info(t),location.href=t}))},n=>{d.a.clearBusy()})}}return n.\u0275fac=function(t){return new(t||n)(l.Ub(a.f),l.Ub(s.a),l.Ub(c.a),l.Ub(b.a))},n.\u0275prov=l.Ib({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var g=o("3Pt+"),u=o("k8YA"),f=o("6t9p");const m=function(){return{mode:"password"}},h=function(){return{text:"Duy tr\xec \u0111\u0103ng nh\u1eadp",value:!0}},x=[{path:"",component:(()=>{class n{constructor(n){this.loginService=n,this.buttonOptions={text:"\u0110\u0103ng nh\u1eadp",type:"success",useSubmitBehavior:!0},this.year=null,this.loginModel=new i}ngOnInit(){this.year=(new Date).getFullYear()}onFormSubmit(n){n.preventDefault(),this.loginService.login(this.loginModel)}}return n.\u0275fac=function(t){return new(t||n)(l.Mb(p))},n.\u0275cmp=l.Gb({type:n,selectors:[["app-login"]],features:[l.Ab([p])],decls:25,vars:15,consts:[["id","login-form"],["id","login-body"],[1,"card"],[1,"login-card-header"],["src","assets/image/logo1.png","alt",""],[1,"card-body"],[1,"login-title"],["action","",3,"submit"],["id","loginForm","validationGroup","loginForm",3,"labelLocation","readOnly","formData","showColonAfterLabel","showValidationSummary"],["dataField","loginModel.username",3,"colSpan"],[3,"text"],["type","required","message","Username is required"],["dataField","loginModel.password",3,"editorOptions"],["type","required","message","Password is required"],["itemType","simple","dataField","loginModel.rememberMe","editorType","dxCheckBox",3,"editorOptions"],[3,"visible"],["itemType","button","cssClass","login-button","horizontalAlignment","left",3,"buttonOptions"],[1,"login-card-footer"],["href","https://suns.com.vn/"]],template:function(n,t){1&n&&(l.Qb(0,"div",0),l.Qb(1,"div",1),l.Qb(2,"div",2),l.Qb(3,"div",3),l.Nb(4,"img",4),l.Pb(),l.Qb(5,"h4"),l.vc(6,"Ph\u1ea7n m\u1ec1m qu\u1ea3n l\xfd Delivery, Contracts, Sales"),l.Pb(),l.Qb(7,"div",5),l.Qb(8,"div",6),l.vc(9,"\u0110\u0102NG NH\u1eacP"),l.Pb(),l.Qb(10,"form",7),l.Xb("submit",function(n){return t.onFormSubmit(n)}),l.Qb(11,"dx-form",8),l.Qb(12,"dxi-item",9),l.Nb(13,"dxo-label",10),l.Nb(14,"dxi-validation-rule",11),l.Pb(),l.Qb(15,"dxi-item",12),l.Nb(16,"dxo-label",10),l.Nb(17,"dxi-validation-rule",13),l.Pb(),l.Qb(18,"dxi-item",14),l.Nb(19,"dxo-label",15),l.Pb(),l.Nb(20,"dxi-item",16),l.Pb(),l.Pb(),l.Pb(),l.Qb(21,"div",17),l.vc(22),l.Qb(23,"a",18),l.vc(24,"www.suns.com.vn"),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Pb()),2&n&&(l.Bb(11),l.fc("labelLocation","top")("readOnly",!1)("formData",t)("showColonAfterLabel",!0)("showValidationSummary",!1),l.Bb(1),l.fc("colSpan",2),l.Bb(1),l.fc("text","T\xean \u0111\u0103ng nh\u1eadp"),l.Bb(2),l.fc("editorOptions",l.hc(13,m)),l.Bb(1),l.fc("text","M\u1eadt kh\u1ea9u"),l.Bb(2),l.fc("editorOptions",l.hc(14,h)),l.Bb(1),l.fc("visible",!1),l.Bb(1),l.fc("buttonOptions",t.buttonOptions),l.Bb(2),l.xc("Copyright \xa9 ",t.year," SUNS - "))},directives:[g.i,g.e,g.f,u.a,f.k,f.lb,f.A],styles:["#login-body[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{background:#f7f7f7}#login-body[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{padding:0;position:relative;top:100px;margin:0 auto;display:block;width:500px;overflow:hidden;z-index:1}#login-body[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{background:linear-gradient(90deg,#0663bd 35%,#090979);color:#fff;margin:0;padding:10px 0;text-align:center;font-size:medium}#login-body[_ngcontent-%COMP%]   .login-title[_ngcontent-%COMP%]{color:#ed8200;font-size:large;font-weight:700;text-align:center;padding-top:20px}#login-body[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .login-card-footer[_ngcontent-%COMP%]{box-shadow:0 3px 6px 0 #00000029;background-color:#b9b8b8;color:#fff;margin:0;padding:6px 5px;font-size:small;text-align:right}#loginForm[_ngcontent-%COMP%]{padding:20px 40px}#login-body[_ngcontent-%COMP%]     .dx-texteditor-input{font-size:18px;-webkit-appearance:none;display:block;background:#f7f7f7;color:#636363;width:100%;border-radius:0;border:none;border-bottom:1px solid #fff}#login-body[_ngcontent-%COMP%]     input.dx-texteditor-input:focus{border-bottom:1px solid #ff5722}#login-body[_ngcontent-%COMP%]     input.used~#login-body   label, #login-body[_ngcontent-%COMP%]     input:focus~#login-body   label{top:-20px;transform:scale(.75);left:-2px;color:#4a89dc}#login-body[_ngcontent-%COMP%]     .dx-texteditor.dx-editor-outlined{border:unset}#login-header[_ngcontent-%COMP%]{border-bottom:1px solid #485e88;padding-top:10px}#login-header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{float:left;color:#485e88}@media only screen and (max-width:479px){#login-body[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{width:100%}}"]}),n})()}];let y=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=l.Kb({type:n}),n.\u0275inj=l.Jb({imports:[[e.f.forChild(x)],e.f]}),n})();var v=o("ofXK");let P=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=l.Kb({type:n}),n.\u0275inj=l.Jb({providers:[],imports:[[v.b,g.b,g.h,y,u.b]]}),n})()}}]);