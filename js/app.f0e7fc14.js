(function(){"use strict";var e={445:function(e,t,n){var a=n(242),o=n(483),c=n(396),r=n(139),l=n(870);function u(e,t,n,a,o,r){return(0,c.wg)(),(0,c.iD)("button",null,[(0,c.WI)(e.$slots,"default")])}var i={name:"MulahButton"},s=n(89);const f=(0,s.Z)(i,[["render",u]]);var p=f;const d={class:"input-wrapper"},m=["value","placeholder"],v={name:"ContactInput"};var b=Object.assign(v,{props:["modelValue","placeholder"],emits:["update:modelValue"],setup(e,{emit:t}){const n=e;function a(e){t("update:modelValue",e.target.value)}const o=(0,c.Fl)((()=>(console.log(n.modelValue.length),9===n.modelValue.length)));return(e,t)=>((0,c.wg)(),(0,c.iD)("div",d,[(0,c._)("input",{value:n.modelValue,placeholder:n.placeholder,onInput:a,type:"number",min:"0",max:"999999999"},null,40,m),(0,c._)("span",{class:(0,r.C_)(["check-icon",{"is-valid":(0,l.SU)(o)}])},null,2)]))}});const _=(0,s.Z)(b,[["__scopeId","data-v-11a518a2"]]);var h=_;const g={class:""},w={class:"contact-form-inputs"},y={name:"ContactNumForm"};var O=Object.assign(y,{setup(e){const t=(0,l.qj)([{label:"+60",value:"+60"},{label:"+62",value:"+62"}]),n=(0,l.qj)({prefix:"+60",contact:""});return(e,o)=>((0,c.wg)(),(0,c.iD)("div",g,[(0,c._)("div",w,[(0,c.wy)((0,c._)("select",{"onUpdate:modelValue":o[0]||(o[0]=e=>n.prefix=e)},[((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)(t,(e=>((0,c.wg)(),(0,c.iD)("option",{key:"prefix_"+e.value},(0,r.zw)(e.label),1)))),128))],512),[[a.bM,n.prefix]]),(0,c.Wm)(h,{modelValue:n.contact,"onUpdate:modelValue":o[1]||(o[1]=e=>n.contact=e),placeholder:"Enter Mobile Number"},null,8,["modelValue"])]),(0,c.Wm)(p,{class:"submit-btn"},{default:(0,c.w5)((()=>[(0,c.Uk)("Check Loyalty Points")])),_:1})]))}});const j=(0,s.Z)(O,[["__scopeId","data-v-76f55a01"]]);var x=j;const k=e=>((0,c.dD)("data-v-436ee7fc"),e=e(),(0,c.Cn)(),e),V={class:"homepage-wrapper"},C=k((()=>(0,c._)("div",{class:"main-logo-wrapper"},[(0,c._)("img",{class:"main-logo",src:"https://static.wixstatic.com/media/2460f4_0fe0a6ceccfa4b0791c8b0f0dba9add3~mv2.png/v1/fill/w_210,h_32,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2460f4_0fe0a6ceccfa4b0791c8b0f0dba9add3~mv2.png",srcset:"https://static.wixstatic.com/media/2460f4_0fe0a6ceccfa4b0791c8b0f0dba9add3~mv2.png/v1/fill/w_210,h_32,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2460f4_0fe0a6ceccfa4b0791c8b0f0dba9add3~mv2.png"})],-1))),D=k((()=>(0,c._)("h1",null,"Hello, Welcome !",-1))),I=k((()=>(0,c._)("p",{class:"welcome-msg"},"Check Your Loyalty Points & Rewards",-1))),P={name:"HomePage"};var W=Object.assign(P,{setup(e){return(e,t)=>((0,c.wg)(),(0,c.iD)("div",V,[C,D,I,(0,c.Wm)(x)]))}});const Z=(0,s.Z)(W,[["__scopeId","data-v-436ee7fc"]]);var q=Z,U=[{path:"/",component:q}];function F(e,t,n,a,o,r){const l=(0,c.up)("router-view");return(0,c.wg)(),(0,c.j4)(l)}var H={name:"App"};const M=(0,s.Z)(H,[["render",F]]);var E=M;const L=(0,o.p7)({history:(0,o.r5)(),routes:U});(0,a.ri)(E).use(L).mount("#app")}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var c=t[a]={exports:{}};return e[a](c,c.exports,n),c.exports}n.m=e,function(){var e=[];n.O=function(t,a,o,c){if(!a){var r=1/0;for(s=0;s<e.length;s++){a=e[s][0],o=e[s][1],c=e[s][2];for(var l=!0,u=0;u<a.length;u++)(!1&c||r>=c)&&Object.keys(n.O).every((function(e){return n.O[e](a[u])}))?a.splice(u--,1):(l=!1,c<r&&(r=c));if(l){e.splice(s--,1);var i=o();void 0!==i&&(t=i)}}return t}c=c||0;for(var s=e.length;s>0&&e[s-1][2]>c;s--)e[s]=e[s-1];e[s]=[a,o,c]}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,c,r=a[0],l=a[1],u=a[2],i=0;if(r.some((function(t){return 0!==e[t]}))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(u)var s=u(n)}for(t&&t(a);i<r.length;i++)c=r[i],n.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return n.O(s)},a=self["webpackChunkmulah"]=self["webpackChunkmulah"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(445)}));a=n.O(a)})();
//# sourceMappingURL=app.f0e7fc14.js.map