!function(t){function e(e){for(var n,u,c=e[0],a=e[1],s=e[2],p=0,l=[];p<c.length;p++)u=c[p],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&l.push(o[u][0]),o[u]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);for(f&&f(e);l.length;)l.shift()();return i.push.apply(i,s||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,c=1;c<r.length;c++){var a=r[c];0!==o[a]&&(n=!1)}n&&(i.splice(e--,1),t=u(u.s=r[0]))}return t}var n={},o={1:0},i=[];function u(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.m=t,u.c=n,u.d=function(t,e,r){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},u.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)u.d(r,n,function(e){return t[e]}.bind(null,n));return r},u.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="";var c=window.webpackJsonp=window.webpackJsonp||[],a=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var f=a;i.push([80,0]),r()}([,,,,,,,function(t,e,r){"use strict";r.r(e),r.d(e,"MacroConfig",(function(){return n})),r.d(e,"Macro",(function(){return o})),r.d(e,"click",(function(){return i})),r.d(e,"delay",(function(){return u})),r.d(e,"drag",(function(){return a}));var n=function(){this.framePerSecond=1e6,this.mode="MEmu",this.screenHeight=1280,this.screenWidth=720},o=function(){function t(){var t=this;this.currentFrame=500,this.scripts=[],this.toString=function(e){return"Nox"===e.mode?t.scripts.push("0ScRiPtSePaRaToR"+e.screenWidth+"|"+e.screenHeight+"|MULTI:0:6ScRiPtSePaRaToR"+t.currentFrame):"MEmu"===e.mode&&t.scripts.push(t.currentFrame+"--VINPUT--MOUSE:0:0"),t.scripts.join("\n")+"\n"}}return t.prototype.pipe=function(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return e&&e.length?e.reduce((function(e,r){return r(e,t)}),this):this},t}(),i=function(t){return function(e,r){return"Nox"===r.mode?(e.scripts.push("0ScRiPtSePaRaToR"+r.screenWidth+"|"+r.screenHeight+"|MULTI:1:0:"+t.position.x+":"+t.position.y+"ScRiPtSePaRaToR"+e.currentFrame),e.currentFrame+=100,e.scripts.push("0ScRiPtSePaRaToR"+r.screenWidth+"|"+r.screenHeight+"|MULTI:0:6ScRiPtSePaRaToR"+e.currentFrame),e.scripts.push("0ScRiPtSePaRaToR"+r.screenWidth+"|"+r.screenHeight+"|MULTI:0:6ScRiPtSePaRaToR"+e.currentFrame),e.scripts.push("0ScRiPtSePaRaToR"+r.screenWidth+"|"+r.screenHeight+"|MULTI:0:1ScRiPtSePaRaToR"+e.currentFrame),e.scripts.push("0ScRiPtSePaRaToR"+r.screenWidth+"|"+r.screenHeight+"|MSBRL:0:0ScRiPtSePaRaToR"+e.currentFrame)):"MEmu"===r.mode&&(e.scripts.push(e.currentFrame+"--VINPUT--MULTI2:1:0:0:"+t.position.x+":"+t.position.y+":0"),e.currentFrame+=100,e.scripts.push(e.currentFrame+"--VINPUT--MULTI2:1:0:-1:-1:-2:2")),e}},u=function(t){return function(e,r){return"Nox"===r.mode?(e.currentFrame+=1e3*t.second,e.scripts.push("0ScRiPtSePaRaToR"+r.screenWidth+"|"+r.screenHeight+"|MSBRL:0:0ScRiPtSePaRaToR"+e.currentFrame)):"MEmu"===r.mode&&(e.currentFrame+=Math.floor(r.framePerSecond*t.second),e.scripts.push(e.currentFrame+"--VINPUT--MOUSE:0:0")),e}},c={easeIn:function(t){return function(e){return Math.pow(e,t)}},easeInOut:function(t){return function(e){return e<.5?c.easeIn(t)(2*e)/2:c.easeOut(t)(2*e-1)/2+.5}},easeOut:function(t){return function(e){return 1-Math.abs(Math.pow(e-1,t))}},linear:function(){return function(t){return t}}},a=function(t){return function(e,r){if(e.pipe(r,u({second:.4})),"MEmu"===r.mode){for(var n=c[t.easingFunction](4),o=Math.floor(1*r.framePerSecond/10),i=0;i<=10;i++)if(e.currentFrame+=o,0===i)e.scripts.push(e.currentFrame+"--VINPUT--MULTI2:1:0:0:"+t.startPosition.x+":"+t.startPosition.y+":0");else if(10===i)e.scripts.push(e.currentFrame+"--VINPUT--MULTI2:1:0:0:"+t.endPosition.x+":"+t.endPosition.y+":1");else{var a=n(i/10),s=Math.floor(t.startPosition.x+(t.endPosition.x-t.startPosition.x)*a),f=Math.floor(t.startPosition.y+(t.endPosition.y-t.startPosition.y)*a);e.scripts.push(e.currentFrame+"--VINPUT--MULTI2:1:0:0:"+s+":"+f+":1")}e.currentFrame+=o,e.scripts.push(e.currentFrame+"--VINPUT--MULTI2:1:0:-1:-1:-2:2")}else if("Nox"===r.mode){for(n=c[t.easingFunction](4),o=Math.floor(100),i=0;i<=10;i++)if(e.currentFrame+=o,0===i)e.scripts.push("0ScRiPtSePaRaToR"+r.screenWidth+"|"+r.screenHeight+"|MULTI:1:0:"+t.startPosition.x+":"+t.startPosition.y+"ScRiPtSePaRaToR"+e.currentFrame);else if(10===i)e.scripts.push("0ScRiPtSePaRaToR"+r.screenWidth+"|"+r.screenHeight+"|MULTI:1:2:"+t.endPosition.x+":"+t.endPosition.y+"ScRiPtSePaRaToR"+e.currentFrame);else{a=n(i/10),s=Math.floor(t.startPosition.x+(t.endPosition.x-t.startPosition.x)*a),f=Math.floor(t.startPosition.y+(t.endPosition.y-t.startPosition.y)*a);e.scripts.push("0ScRiPtSePaRaToR"+r.screenWidth+"|"+r.screenHeight+"|MULTI:1:2:"+s+":"+f+"ScRiPtSePaRaToR"+e.currentFrame)}e.currentFrame+=o,e.scripts.push("0ScRiPtSePaRaToR"+r.screenWidth+"|"+r.screenHeight+"|MULTI:0:6ScRiPtSePaRaToR"+e.currentFrame),e.scripts.push("0ScRiPtSePaRaToR"+r.screenWidth+"|"+r.screenHeight+"|MULTI:0:6ScRiPtSePaRaToR"+e.currentFrame),e.scripts.push("0ScRiPtSePaRaToR"+r.screenWidth+"|"+r.screenHeight+"|MULTI:0:1ScRiPtSePaRaToR"+e.currentFrame),e.scripts.push("0ScRiPtSePaRaToR"+r.screenWidth+"|"+r.screenHeight+"|MSBRL:0:0ScRiPtSePaRaToR"+e.currentFrame)}return e.pipe(r,u({second:.4}))}}},function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r(76),o=r(0),i=function(){function t(){this.dataSource=new n.a([]),this.observable=this.dataSource.asObservable()}return t.prototype.getValue=function(){return this.dataSource.getValue()},t.prototype.setValue=function(t){this.dataSource.next(t)},t.prototype.updateCurrent=function(){var t=this.dataSource.getValue();this.dataSource.next(t)},t.ɵprov=o.kc({factory:function(){return new t},token:t,providedIn:"root"}),t}()},,,function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(76),o=r(7),i=r(31),u=r(0),c=function(){function t(){this.dataSource=new n.a(new o.MacroConfig),this.observable=this.dataSource.asObservable()}return t.prototype.getValue=function(){var t=this.dataSource.getValue();return Object(i.a)(t),t},t.prototype.setValue=function(t){this.dataSource.next(t)},t.ɵprov=u.kc({factory:function(){return new t},token:t,providedIn:"root"}),t}()},function(t,e,r){"use strict";r.r(e);var n=r(53);r.d(e,"ALL_ACTIONS",(function(){return n.a}));var o=r(24);r.d(e,"buildMacro",(function(){return o.a}));var i=r(36);r.d(e,"ExportComponent",(function(){return i.a}));var u=r(23);r.d(e,"exportMacroItems",(function(){return u.a})),r.d(e,"importMacroItems",(function(){return u.b}));var c=r(37);r.d(e,"GeneratorPackageComponent",(function(){return c.a}));var a=r(38);r.d(e,"MacroBuilderModule",(function(){return a.a}));var s=r(11);r.d(e,"MacroConfigService",(function(){return s.a}));var f=r(8);r.d(e,"MacroGroupService",(function(){return f.a}));var p=r(39);r.d(e,"NewMacroGroupDialogComponent",(function(){return p.a}))},,function(t,e,r){"use strict";r.r(e),r.d(e,"getSlotPosition",(function(){return a})),r.d(e,"getCommonButtonPosition",(function(){return s})),r.d(e,"clickMultipleSlots",(function(){return f})),r.d(e,"clickSlot",(function(){return l})),r.d(e,"openSkillDrawer",(function(){return d})),r.d(e,"scrollRow",(function(){return g}));var n=[{x:166,y:832},{x:166,y:960},{x:166,y:1088},{x:504,y:832},{x:504,y:960},{x:504,y:1088}],o={Depart:{x:360,y:1122},"First Friend":{x:360,y:442},Next:{x:360,y:1126},Raid:{x:360,y:733},"Raid Refill Yes":{x:504,y:738},Reload:{x:450,y:1230},Repeat:{x:270,y:1230}},i=function(t,e,r){return Math.floor(r/e*t)},u=function(t,e){return i(t,720,e.screenWidth)},c=function(t,e){return i(t,1280,e.screenHeight)},a=function(t,e){var r=n[t-1];return{x:u(r.x,e),y:c(r.y,e)}},s=function(t){var e={};return Object.keys(o).forEach((function(r){var n=o[r],i={x:u(n.x,t),y:c(n.y,t)};e[r]=i})),e},f=function(t){return function(e,r){return t.slots.reduce((function(t,e){var n=a(e,r);return"MEmu"===r.mode?(t.scripts.push(t.currentFrame+"--VINPUT--MULTI2:1:0:0:"+n.x+":"+n.y+":0"),t.currentFrame+=100,t.scripts.push(t.currentFrame+"--VINPUT--MULTI2:1:0:-1:-1:-2:2"),t.currentFrame-=100):"Nox"===r.mode&&(t.scripts.push("0ScRiPtSePaRaToR"+r.screenWidth+"|"+r.screenHeight+"|MULTI:1:0:"+n.x+":"+n.y+"ScRiPtSePaRaToR"+t.currentFrame),t.currentFrame+=100,t.scripts.push("0ScRiPtSePaRaToR"+r.screenWidth+"|"+r.screenHeight+"|MULTI:0:6ScRiPtSePaRaToR"+t.currentFrame),t.scripts.push("0ScRiPtSePaRaToR"+r.screenWidth+"|"+r.screenHeight+"|MULTI:0:6ScRiPtSePaRaToR"+t.currentFrame),t.scripts.push("0ScRiPtSePaRaToR"+r.screenWidth+"|"+r.screenHeight+"|MULTI:0:1ScRiPtSePaRaToR"+t.currentFrame),t.scripts.push("0ScRiPtSePaRaToR"+r.screenWidth+"|"+r.screenHeight+"|MSBRL:0:0ScRiPtSePaRaToR"+t.currentFrame),t.currentFrame-=100),t}),e)}},p=r(7),l=function(t){return function(e,r){return e.pipe(r,Object(p.click)({position:a(t.slot,r)}))}},d=function(t){return function(e,r){var n=a(t.slot,r),o={x:n.x+200,y:n.y};return e.pipe(r,Object(p.drag)({endPosition:o,startPosition:n,easingFunction:"easeOut"}))}},h=function(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;var n=Array(t),o=0;for(e=0;e<r;e++)for(var i=arguments[e],u=0,c=i.length;u<c;u++,o++)n[o]=i[u];return n},m=350,v=1150,g=function(t){return function(e,r){for(var n={x:u(m,r),y:c(v,r)},o=c(120,r),i=t.rows,a=[];i>3;){var s={x:n.x,y:n.y-3*o};a.push(Object(p.drag)({easingFunction:"easeOut",endPosition:"down"===t.direction?s:n,startPosition:"down"===t.direction?n:s})),i-=3}var f={x:n.x,y:n.y-i*o};return a.push(Object(p.drag)({easingFunction:"easeOut",endPosition:"down"===t.direction?f:n,startPosition:"down"===t.direction?n:f})),e.pipe.apply(e,h([r],a))}}},,,,,,,,,function(t,e,r){"use strict";r.d(e,"a",(function(){return u})),r.d(e,"b",(function(){return c}));var n=r(62),o=function(){return(o=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},i=function(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;var n=Array(t),o=0;for(e=0;e<r;e++)for(var i=arguments[e],u=0,c=i.length;u<c;u++,o++)n[o]=i[u];return n},u=function(t,e){var r={config:o({},e.getValue()),macroGroup:i(t.getValue())};return Object(n.compressToBase64)(JSON.stringify(r))},c=function(t,e){var r=JSON.parse(Object(n.decompressFromBase64)(t)),o=e.getValue();return r.macroGroup.forEach((function(t){t.items.filter((function(t){return"Click"===t.type})).forEach((function(t){var e=t.option;e.position.x=Math.floor(e.position.x*o.screenWidth/r.config.screenWidth),e.position.y=Math.floor(e.position.y*o.screenHeight/r.config.screenHeight)}))})),r.macroGroup}},function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r(12),o=r(7),i=function(t,e){var r=new o.Macro;return t.filter((function(t){return t.repeat>0})).forEach((function(t){for(var o=1;o<=t.repeat;o++)t.items.forEach((function(t){r.pipe(e,n.ALL_ACTIONS[t.type].macroBuilder(t.option))}))})),r.toString(e)}},,,,,,,function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var n=function(t){return Object.freeze(t),void 0!==t&&Object.getOwnPropertyNames(t).forEach((function(e){null===t[e]||"object"!=typeof t[e]&&"function"!=typeof t[e]||Object.isFrozen(t[e])||n(t[e])})),t}},,,,,function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r(59),o=(r(12),r(23)),i=function(){function t(t,e,r){this.activeModal=t,this.macroGroupService=e,this.macroConfigService=r,this.output="",this.output=Object(o.a)(this.macroGroupService,this.macroConfigService)}return t.prototype.copyOutputToClipboard=function(){n.writeText(this.output)},t}()},function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(2),o=r(63),i=r(64),u=(r(12),r(11),r(24)),c=function(){function t(t,e,r){this.activeModal=t,this.macroGroupService=e,this.macroConfigService=r,this.formControl=new n.f(null,n.v.required)}return t.prototype.generatePackage=function(){var t=this.macroGroupService.getValue(),e=this.macroConfigService.getValue(),r=this.formControl.value,n=new Date,c=""+n.getFullYear()+n.getMonth()+n.getDay()+n.getHours()+n.getMinutes()+n.getSeconds(),a=Object(u.a)(t,e);if("Nox"===e.mode){var s=new i,f='{"'+c+'":{"combination":"false","name":"'+r+'","needShow":"true","new":"true","playSet":{"accelerator":"1","interval":"0","mode":"0","playOnStart":"false","playSeconds":"0#0#0","repeatTimes":"1","restartPlayer":"false","restartTime":"60"},"priority":"0","time":"1578313116"}}';s.file("export",f),s.file(c,a),s.generateAsync({type:"blob"}).then((function(t){Object(o.saveAs)(t,r+".7z")}))}else if("MEmu"===e.mode){s=new i,f="["+c+"]\r\nname="+r+"\r\nreplayTime=0\r\nreplayCycles=1\r\nreplayAccelRates=1\r\nreplayInterval=0\r\ncycleInfinite=false\r\nbNew=false\r\n";s.file(c+".mir",a),s.file("export",f),s.generateAsync({type:"blob"}).then((function(t){Object(o.saveAs)(t,r+".scp")}))}},t}()},function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r(11),o=r(8),i=function(){function t(){}return t.forRoot=function(){return{ngModule:t,providers:[o.a,n.a]}},t}()},function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r(2),o=r(12),i=function(){function t(t,e){this.activeModal=t,this.macroConfigService=e,this.hasError=!1,this.isCodeMode=null,this.formControl=new n.f("",[n.v.required])}return t.prototype.setCodeMode=function(t){this.isCodeMode=t,this.formControl.setValue(""),this.hasError=!1},t.prototype.submit=function(){if(!1===this.isCodeMode){var t=[{name:this.formControl.value,items:[],repeat:1}];this.activeModal.close(t)}else try{t=Object(o.importMacroItems)(this.formControl.value,this.macroConfigService);this.activeModal.close(t)}catch(t){this.hasError=!0}},t}()},function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r(2),o=(r(12),r(14)),i=function(){function t(t){this.configService=t,this.formGroup=null,this.buttons=Object(o.getCommonButtonPosition)(this.configService.getValue())}return t.prototype.setButton=function(t){this.formGroup.get("x").setValue(this.buttons[t].x),this.formGroup.get("y").setValue(this.buttons[t].y)},t.prototype.setFormGroup=function(t){this.formGroup=t,this.formGroup.get("x").setValidators([n.v.required,n.v.min(0),n.v.max(this.configService.getValue().screenWidth)]),this.formGroup.get("x").setValidators([n.v.required,n.v.min(0),n.v.max(this.configService.getValue().screenHeight)])},t}()},,,,function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var n=function(){function t(){this.formGroup=null}return t.prototype.setFormGroup=function(t){this.formGroup=t},t}()},function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var n=function(){function t(){this.formGroup=null}return t.prototype.setFormGroup=function(t){this.formGroup=t},t}()},function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var n=function(){function t(){this.formGroup=null}return t.prototype.setFormGroup=function(t){this.formGroup=t},t}()},function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r(12);var n=r(14),o=function(){function t(t){this.configService=t,this.formGroup=null,this.buttons=Object(n.getCommonButtonPosition)(this.configService.getValue())}return t.prototype.setFormGroup=function(t){this.formGroup=t},t}()},function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var n=function(){function t(){this.formGroup=null}return t.prototype.setFormGroup=function(t){this.formGroup=t},t}()},function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var n=function(){function t(){this.formGroup=null}return t.prototype.setFormGroup=function(t){this.formGroup=t},t}()},,,,function(t,e,r){"use strict";r.d(e,"a",(function(){return h}));var n=r(2),o=r(7),i={displayOption:function(t){var e=t;return e.position.x+","+e.position.y},editorComponent:r(40).a,formGroupToOption:function(t){return{position:{x:t.get("x").value,y:t.get("y").value}}},macroBuilder:o.click,optionToFormGroup:function(t){var e=new n.i({x:new n.f(""),y:new n.f("")});if(t){var r=t;e.get("x").setValue(r.position.x),e.get("y").setValue(r.position.y)}return e}},u=r(14),c={displayOption:function(t){return"Slots: "+t.slots.join(", ")},editorComponent:r(44).a,formGroupToOption:function(t){var e=t.value,r=[];return Object.keys(e).forEach((function(t){!0===e[t]&&r.push(parseInt(t.replace("slot_",""),10))})),{slots:r}},macroBuilder:u.clickMultipleSlots,optionToFormGroup:function(t){var e=new n.i({slot_1:new n.f(!1,[]),slot_2:new n.f(!1,[]),slot_3:new n.f(!1,[]),slot_4:new n.f(!1,[]),slot_5:new n.f(!1,[]),slot_6:new n.f(!1,[])});t&&t.slots.map((function(t){return"slot_"+t})).forEach((function(t){e.get(t).setValue(!0)}));return e}},a={displayOption:function(t){return"Slot "+t.slot},editorComponent:r(45).a,formGroupToOption:function(t){return{slot:t.get("slot").value}},macroBuilder:u.clickSlot,optionToFormGroup:function(t){var e=new n.i({slot:new n.f("",[n.v.required,n.v.min(1),n.v.max(6)])});if(t){var r=t;e.get("slot").setValue(r.slot)}return e}},s={displayOption:function(t){return t.second+"s"},editorComponent:r(46).a,formGroupToOption:function(t){return{second:t.get("second").value}},macroBuilder:o.delay,optionToFormGroup:function(t){var e=new n.i({second:new n.f("",[n.v.required,n.v.min(0)])});if(t){var r=t;e.get("second").setValue(r.second)}return e}},f={displayOption:function(t){var e=t;return e.startPosition.x+","+e.startPosition.y+" - "+e.endPosition.x+","+e.endPosition.y},editorComponent:r(47).a,formGroupToOption:function(t){return{easingFunction:t.get("easingFunction").value,startPosition:{x:t.get("from_x").value,y:t.get("from_y").value},endPosition:{x:t.get("to_x").value,y:t.get("to_y").value}}},macroBuilder:o.drag,optionToFormGroup:function(t){var e=new n.i({easingFunction:new n.f("",[n.v.required]),from_x:new n.f("",[n.v.required,n.v.min(0),n.v.max(720)]),from_y:new n.f("",[n.v.required,n.v.min(0),n.v.max(1280)]),to_x:new n.f("",[n.v.required,n.v.min(0),n.v.max(720)]),to_y:new n.f("",[n.v.required,n.v.min(0),n.v.max(1280)])});if(t){var r=t;e.get("from_x").setValue(r.startPosition.x),e.get("from_y").setValue(r.startPosition.y),e.get("to_x").setValue(r.endPosition.x),e.get("to_y").setValue(r.endPosition.y),e.get("easingFunction").setValue(r.easingFunction)}return e}},p={displayOption:function(t){return"Slot "+t.slot},editorComponent:r(48).a,formGroupToOption:function(t){return{slot:t.get("slot").value}},macroBuilder:u.openSkillDrawer,optionToFormGroup:function(t){var e=new n.i({slot:new n.f("",[n.v.required,n.v.min(1),n.v.max(6)])});if(t){var r=t;e.get("slot").setValue(r.slot)}return e}},l={displayOption:function(t){var e=t;return e.direction.toUpperCase()+" "+e.rows+" Rows"},editorComponent:r(49).a,formGroupToOption:function(t){return{rows:t.get("rows").value,direction:t.get("direction").value}},macroBuilder:u.scrollRow,optionToFormGroup:function(t){var e=new n.i({direction:new n.f("",[n.v.required]),rows:new n.f("",[n.v.required,n.v.min(1)])});if(t){var r=t;e.get("rows").setValue(r.rows),e.get("direction").setValue(r.direction)}return e}},d=r(31),h=Object(d.a)({Click:i,"Click Multiple Slot":c,"Click Slot":a,Delay:s,Drag:f,"Open Skill Drawer":p,"Scroll Rows":l})},,,,,,,,,,,,,,,,,,,,,,,,function(t,e){function r(t){return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}))}r.keys=function(){return[]},r.resolve=r,t.exports=r,r.id=77},,,function(t,e,r){r(7),r(14),t.exports=r(12)}]);