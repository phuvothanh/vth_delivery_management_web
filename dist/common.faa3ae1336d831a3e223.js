(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"0MSw":function(e,t,n){"use strict";var i=n("W2II"),a=n("xPQU"),s=n("a8dJ"),o=n("RfjA"),r=n("CF5h"),h=n("ua+q"),l=n("v5W6"),g=n("AmyY"),d=n("jyIZ"),u=n("0Kan"),c=n("+dKZ"),p=n("S/m2"),b=n("VABh").a.inherit({_getDefaultOptions:function(){return Object(h.a)(this.callBase(),{spellcheck:!0,minHeight:void 0,maxHeight:void 0,autoResizeEnabled:!1})},_initMarkup:function(){this.$element().addClass("dx-textarea"),this.callBase(),this.setAria("multiline","true")},_renderContentImpl:function(){this._updateInputHeight(),this.callBase()},_renderInput:function(){this.callBase(),this._renderScrollHandler()},_createInput:function(){var e=Object(i.a)("<textarea>");return this._applyInputAttributes(e,this.option("inputAttr")),this._updateInputAutoResizeAppearance(e),e},_applyInputAttributes:function(e,t){e.attr(t).addClass("dx-texteditor-input")},_renderScrollHandler:function(){this._eventY=0;var e=this._input(),t=Object(p.b)(e,!0);a.a.on(e,Object(g.a)(u.a.init,this.NAME),t,s.n),a.a.on(e,Object(g.a)(d.a.down,this.NAME),this._pointerDownHandler.bind(this)),a.a.on(e,Object(g.a)(d.a.move,this.NAME),this._pointerMoveHandler.bind(this))},_pointerDownHandler:function(e){this._eventY=Object(g.c)(e).y},_pointerMoveHandler:function(e){var t=Object(g.c)(e).y,n=this._eventY-t;Object(p.a)(this._input(),n)&&(e.isScrollingEvent=!0,e.stopPropagation()),this._eventY=t},_renderDimensions:function(){var e=this.$element(),t=e.get(0),n=this._getOptionValue("width",t),i=this._getOptionValue("height",t),a=this.option("minHeight"),s=this.option("maxHeight");e.css({minHeight:void 0!==a?a:"",maxHeight:void 0!==s?s:"",width:n,height:i})},_resetDimensions:function(){this.$element().css({height:"",minHeight:"",maxHeight:""})},_renderEvents:function(){this.option("autoResizeEnabled")&&a.a.on(this._input(),Object(g.a)("input paste",this.NAME),this._updateInputHeight.bind(this)),this.callBase()},_refreshEvents:function(){a.a.off(this._input(),Object(g.a)("input paste",this.NAME)),this.callBase()},_getHeightDifference(e){return Object(c.j)(this._$element.get(0),!1)+Object(c.j)(this._$textEditorContainer.get(0),!1)+Object(c.j)(this._$textEditorInputContainer.get(0),!1)+Object(c.c)("height",Object(o.d)().getComputedStyle(e.get(0))).margin},_updateInputHeight:function(){if(Object(o.f)()){var e=this._input(),t=this.option("height"),n=void 0===t&&this.option("autoResizeEnabled");if(n||void 0===t&&this.option("minHeight")){this._resetDimensions(),this._$element.css("height",Object(c.h)(this._$element)),e.css("height",0);var i=this._getHeightDifference(e);this._renderDimensions();var a=this._getBoundaryHeight("minHeight"),s=this._getBoundaryHeight("maxHeight"),r=e[0].scrollHeight;if(void 0!==a&&(r=Math.max(r,a-i)),void 0!==s){var h=s-i,l=r>h;r=Math.min(r,h),this._updateInputAutoResizeAppearance(e,!l)}e.css("height",r),n&&this._$element.css("height","auto")}else e.css("height","")}},_getBoundaryHeight:function(e){var t=this.option(e);if(Object(l.d)(t))return"number"==typeof t?t:Object(c.n)(t,this.$element().get(0).parentElement)},_renderInputType:s.n,_visibilityChanged:function(e){e&&this._updateInputHeight()},_updateInputAutoResizeAppearance:function(e,t){if(e){var n=Object(s.g)(t,this.option("autoResizeEnabled"));e.toggleClass("dx-texteditor-input-auto-resize",n)}},_dimensionChanged:function(){this.option("visible")&&this._updateInputHeight()},_optionChanged:function(e){switch(e.name){case"autoResizeEnabled":this._updateInputAutoResizeAppearance(this._input(),e.value),this._refreshEvents(),this._updateInputHeight();break;case"value":case"height":this.callBase(e),this._updateInputHeight();break;case"minHeight":case"maxHeight":this._renderDimensions(),this._updateInputHeight();break;case"visible":this.callBase(e),e.value&&this._updateInputHeight();break;default:this.callBase(e)}}});Object(r.a)("dxTextArea",b),t.a=b},"9i78":function(e,t,n){"use strict";n.d(t,"a",function(){return o});var i=n("tk/3"),a=n("nS6G"),s=n("fXoL");let o=(()=>{class e{constructor(e){this.http=e,this.baseUrl=a.a.remoteVTHealthcareServiceBaseUrl}GetLookup(){return this.http.get(this.baseUrl+"/api/v1/Customer/GetLookup")}GetLookupByContractId(e){return this.http.get(this.baseUrl+`/api/v1/Customer/GetLookup/${e}`)}getAll(e){return this.http.post(this.baseUrl+"/api/v1/Customer/GetAll",e)}getAddress(e){return this.http.post(this.baseUrl+"/api/v1/Customer/get-address",e)}}return e.\u0275fac=function(t){return new(t||e)(s.Ub(i.b))},e.\u0275prov=s.Ib({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},Iab2:function(e,t,n){var i,a;void 0===(a="function"==typeof(i=function(){"use strict";function t(e,t,n){var i=new XMLHttpRequest;i.open("GET",e),i.responseType="blob",i.onload=function(){o(i.response,t,n)},i.onerror=function(){console.error("could not download file")},i.send()}function n(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function i(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(t){var n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(n)}}var a="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,s=a.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),o=a.saveAs||("object"!=typeof window||window!==a?function(){}:"download"in HTMLAnchorElement.prototype&&!s?function(e,s,o){var r=a.URL||a.webkitURL,h=document.createElement("a");h.download=s=s||e.name||"download",h.rel="noopener","string"==typeof e?(h.href=e,h.origin===location.origin?i(h):n(h.href)?t(e,s,o):i(h,h.target="_blank")):(h.href=r.createObjectURL(e),setTimeout(function(){r.revokeObjectURL(h.href)},4e4),setTimeout(function(){i(h)},0))}:"msSaveOrOpenBlob"in navigator?function(e,a,s){if(a=a||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(function(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}(e,s),a);else if(n(e))t(e,a,s);else{var o=document.createElement("a");o.href=e,o.target="_blank",setTimeout(function(){i(o)})}}:function(e,n,i,o){if((o=o||open("","_blank"))&&(o.document.title=o.document.body.innerText="downloading..."),"string"==typeof e)return t(e,n,i);var r="application/octet-stream"===e.type,h=/constructor/i.test(a.HTMLElement)||a.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||r&&h||s)&&"undefined"!=typeof FileReader){var g=new FileReader;g.onloadend=function(){var e=g.result;e=l?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),o?o.location.href=e:location=e,o=null},g.readAsDataURL(e)}else{var d=a.URL||a.webkitURL,u=d.createObjectURL(e);o?o.location=u:location.href=u,o=null,setTimeout(function(){d.revokeObjectURL(u)},4e4)}});a.saveAs=o.saveAs=o,e.exports=o})?i.apply(t,[]):i)||(e.exports=a)},we1Z:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var i=n("crAt"),a=n("jhN1"),s=n("fXoL"),o=n("0MSw"),r=n("3Pt+"),h=n("PVOt");const l={provide:r.c,useExisting:Object(s.V)(()=>g),multi:!0};let g=(()=>{let e=class extends h.b{constructor(e,t,n,i,a,s,o,r){super(e,t,n,i,o,r),this._watcherHelper=i,this._idh=a,this.touched=e=>{},this._createEventEmitters([{subscribe:"change",emit:"onChange"},{subscribe:"contentReady",emit:"onContentReady"},{subscribe:"copy",emit:"onCopy"},{subscribe:"cut",emit:"onCut"},{subscribe:"disposing",emit:"onDisposing"},{subscribe:"enterKey",emit:"onEnterKey"},{subscribe:"focusIn",emit:"onFocusIn"},{subscribe:"focusOut",emit:"onFocusOut"},{subscribe:"initialized",emit:"onInitialized"},{subscribe:"input",emit:"onInput"},{subscribe:"keyDown",emit:"onKeyDown"},{subscribe:"keyUp",emit:"onKeyUp"},{subscribe:"optionChanged",emit:"onOptionChanged"},{subscribe:"paste",emit:"onPaste"},{subscribe:"valueChanged",emit:"onValueChanged"},{emit:"accessKeyChange"},{emit:"activeStateEnabledChange"},{emit:"autoResizeEnabledChange"},{emit:"disabledChange"},{emit:"elementAttrChange"},{emit:"focusStateEnabledChange"},{emit:"heightChange"},{emit:"hintChange"},{emit:"hoverStateEnabledChange"},{emit:"inputAttrChange"},{emit:"isValidChange"},{emit:"labelChange"},{emit:"labelModeChange"},{emit:"maxHeightChange"},{emit:"maxLengthChange"},{emit:"minHeightChange"},{emit:"nameChange"},{emit:"placeholderChange"},{emit:"readOnlyChange"},{emit:"rtlEnabledChange"},{emit:"spellcheckChange"},{emit:"stylingModeChange"},{emit:"tabIndexChange"},{emit:"textChange"},{emit:"validationErrorChange"},{emit:"validationErrorsChange"},{emit:"validationMessageModeChange"},{emit:"validationStatusChange"},{emit:"valueChange"},{emit:"valueChangeEventChange"},{emit:"visibleChange"},{emit:"widthChange"},{emit:"onBlur"}]),this._idh.setHost(this),s.setHost(this)}get accessKey(){return this._getOption("accessKey")}set accessKey(e){this._setOption("accessKey",e)}get activeStateEnabled(){return this._getOption("activeStateEnabled")}set activeStateEnabled(e){this._setOption("activeStateEnabled",e)}get autoResizeEnabled(){return this._getOption("autoResizeEnabled")}set autoResizeEnabled(e){this._setOption("autoResizeEnabled",e)}get disabled(){return this._getOption("disabled")}set disabled(e){this._setOption("disabled",e)}get elementAttr(){return this._getOption("elementAttr")}set elementAttr(e){this._setOption("elementAttr",e)}get focusStateEnabled(){return this._getOption("focusStateEnabled")}set focusStateEnabled(e){this._setOption("focusStateEnabled",e)}get height(){return this._getOption("height")}set height(e){this._setOption("height",e)}get hint(){return this._getOption("hint")}set hint(e){this._setOption("hint",e)}get hoverStateEnabled(){return this._getOption("hoverStateEnabled")}set hoverStateEnabled(e){this._setOption("hoverStateEnabled",e)}get inputAttr(){return this._getOption("inputAttr")}set inputAttr(e){this._setOption("inputAttr",e)}get isValid(){return this._getOption("isValid")}set isValid(e){this._setOption("isValid",e)}get label(){return this._getOption("label")}set label(e){this._setOption("label",e)}get labelMode(){return this._getOption("labelMode")}set labelMode(e){this._setOption("labelMode",e)}get maxHeight(){return this._getOption("maxHeight")}set maxHeight(e){this._setOption("maxHeight",e)}get maxLength(){return this._getOption("maxLength")}set maxLength(e){this._setOption("maxLength",e)}get minHeight(){return this._getOption("minHeight")}set minHeight(e){this._setOption("minHeight",e)}get name(){return this._getOption("name")}set name(e){this._setOption("name",e)}get placeholder(){return this._getOption("placeholder")}set placeholder(e){this._setOption("placeholder",e)}get readOnly(){return this._getOption("readOnly")}set readOnly(e){this._setOption("readOnly",e)}get rtlEnabled(){return this._getOption("rtlEnabled")}set rtlEnabled(e){this._setOption("rtlEnabled",e)}get spellcheck(){return this._getOption("spellcheck")}set spellcheck(e){this._setOption("spellcheck",e)}get stylingMode(){return this._getOption("stylingMode")}set stylingMode(e){this._setOption("stylingMode",e)}get tabIndex(){return this._getOption("tabIndex")}set tabIndex(e){this._setOption("tabIndex",e)}get text(){return this._getOption("text")}set text(e){this._setOption("text",e)}get validationError(){return this._getOption("validationError")}set validationError(e){this._setOption("validationError",e)}get validationErrors(){return this._getOption("validationErrors")}set validationErrors(e){this._setOption("validationErrors",e)}get validationMessageMode(){return this._getOption("validationMessageMode")}set validationMessageMode(e){this._setOption("validationMessageMode",e)}get validationStatus(){return this._getOption("validationStatus")}set validationStatus(e){this._setOption("validationStatus",e)}get value(){return this._getOption("value")}set value(e){this._setOption("value",e)}get valueChangeEvent(){return this._getOption("valueChangeEvent")}set valueChangeEvent(e){this._setOption("valueChangeEvent",e)}get visible(){return this._getOption("visible")}set visible(e){this._setOption("visible",e)}get width(){return this._getOption("width")}set width(e){this._setOption("width",e)}change(e){}_createInstance(e,t){return new o.a(e,t)}writeValue(e){this.eventHelper.lockedValueChangeEvent=!0,this.value=e,this.eventHelper.lockedValueChangeEvent=!1}setDisabledState(e){this.disabled=e}registerOnChange(e){this.change=e}registerOnTouched(e){this.touched=e}_createWidget(e){super._createWidget(e),this.instance.on("focusOut",e=>{this.eventHelper.fireNgEvent("onBlur",[e])})}ngOnDestroy(){this._destroyWidget()}ngOnChanges(e){super.ngOnChanges(e),this.setupChanges("validationErrors",e)}setupChanges(e,t){e in this._optionsToUpdate||this._idh.setup(e,t)}ngDoCheck(){this._idh.doCheck("validationErrors"),this._watcherHelper.checkWatchers(),super.ngDoCheck(),super.clearChangedOptions()}_setOption(e,t){let n=this._idh.setupSingle(e,t),i=null!==this._idh.getChanges(e,t);(n||i)&&super._setOption(e,t)}};return e.\u0275fac=function(t){return new(t||e)(s.Mb(s.l),s.Mb(s.B),s.Mb(h.e),s.Mb(h.j),s.Mb(h.g),s.Mb(h.i),s.Mb(a.c),s.Mb(s.D))},e.\u0275cmp=s.Gb({type:e,selectors:[["dx-text-area"]],hostBindings:function(e,t){1&e&&s.Xb("onBlur",function(e){return t.touched(e)})("valueChange",function(e){return t.change(e)})},inputs:{accessKey:"accessKey",activeStateEnabled:"activeStateEnabled",autoResizeEnabled:"autoResizeEnabled",disabled:"disabled",elementAttr:"elementAttr",focusStateEnabled:"focusStateEnabled",height:"height",hint:"hint",hoverStateEnabled:"hoverStateEnabled",inputAttr:"inputAttr",isValid:"isValid",label:"label",labelMode:"labelMode",maxHeight:"maxHeight",maxLength:"maxLength",minHeight:"minHeight",name:"name",placeholder:"placeholder",readOnly:"readOnly",rtlEnabled:"rtlEnabled",spellcheck:"spellcheck",stylingMode:"stylingMode",tabIndex:"tabIndex",text:"text",validationError:"validationError",validationErrors:"validationErrors",validationMessageMode:"validationMessageMode",validationStatus:"validationStatus",value:"value",valueChangeEvent:"valueChangeEvent",visible:"visible",width:"width"},outputs:{onChange:"onChange",onContentReady:"onContentReady",onCopy:"onCopy",onCut:"onCut",onDisposing:"onDisposing",onEnterKey:"onEnterKey",onFocusIn:"onFocusIn",onFocusOut:"onFocusOut",onInitialized:"onInitialized",onInput:"onInput",onKeyDown:"onKeyDown",onKeyUp:"onKeyUp",onOptionChanged:"onOptionChanged",onPaste:"onPaste",onValueChanged:"onValueChanged",accessKeyChange:"accessKeyChange",activeStateEnabledChange:"activeStateEnabledChange",autoResizeEnabledChange:"autoResizeEnabledChange",disabledChange:"disabledChange",elementAttrChange:"elementAttrChange",focusStateEnabledChange:"focusStateEnabledChange",heightChange:"heightChange",hintChange:"hintChange",hoverStateEnabledChange:"hoverStateEnabledChange",inputAttrChange:"inputAttrChange",isValidChange:"isValidChange",labelChange:"labelChange",labelModeChange:"labelModeChange",maxHeightChange:"maxHeightChange",maxLengthChange:"maxLengthChange",minHeightChange:"minHeightChange",nameChange:"nameChange",placeholderChange:"placeholderChange",readOnlyChange:"readOnlyChange",rtlEnabledChange:"rtlEnabledChange",spellcheckChange:"spellcheckChange",stylingModeChange:"stylingModeChange",tabIndexChange:"tabIndexChange",textChange:"textChange",validationErrorChange:"validationErrorChange",validationErrorsChange:"validationErrorsChange",validationMessageModeChange:"validationMessageModeChange",validationStatusChange:"validationStatusChange",valueChange:"valueChange",valueChangeEventChange:"valueChangeEventChange",visibleChange:"visibleChange",widthChange:"widthChange",onBlur:"onBlur"},features:[s.Ab([h.e,h.j,l,h.i,h.g]),s.yb,s.zb],decls:0,vars:0,template:function(e,t){},encapsulation:2}),e=Object(i.a)([Object(i.c)(7,Object(s.q)(s.D)),Object(i.b)("design:paramtypes",[s.l,s.B,h.e,h.j,h.g,h.i,a.c,Object])],e),e})(),d=(()=>{let e=class{};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.Kb({type:e}),e.\u0275inj=s.Jb({imports:[[h.c,h.f,a.b],h.f]}),e})()},xbeL:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var i=n("tk/3"),a=n("nS6G"),s=n("fXoL");let o=(()=>{class e{constructor(e){this.http=e,this.baseUrl=a.a.remoteVTHealthcareServiceBaseUrl}getAll(e){return this.http.post(this.baseUrl+"/api/v1/Delivery/GetAll",e)}addOrderShipment(e,t){return this.http.post(this.baseUrl+`/api/v1/Delivery/AddOrders/${e}`,t)}RemoveOrder(e,t){return this.http.post(this.baseUrl+`/api/v1/Delivery/RemoveOrder/${e}/${t}`,{})}}return e.\u0275fac=function(t){return new(t||e)(s.Ub(i.b))},e.\u0275prov=s.Ib({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);