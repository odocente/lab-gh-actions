"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[143],{880:(e,t,r)=>{var n=r(7378),a=r(1542),l=r(1602),c=r(6740);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var m={root:"/",list:"/list"},s=u({},m),f=(u({},m),r(4900)),p=(0,f.iv)({name:"vtxs8z",styles:"margin:1rem"}),v=r(7093),y=r(3208),d=r(7771),g=(0,f.iv)({name:"ho1qnd",styles:"display:flex;flex-direction:row"}),E=(0,f.iv)({name:"a88p1",styles:"width:3rem"}),b=function(){return n.createElement(v.Z,{position:"static"},n.createElement(y.Z,{variant:"dense",className:g},n.createElement("img",{className:E,src:d})))},h=function(e){var t=e.children;return n.createElement(n.Fragment,null,n.createElement(b,null),n.createElement("main",null,t({className:p})))},w=r(4206),O=r.n(w);function Z(e,t,r,n,a,l,c){try{var i=e[l](c),u=i.value}catch(e){return void r(e)}i.done?t(u):Promise.resolve(u).then(n,a)}var N=function(){var e,t=(e=regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O().get("https://api.github.com/orgs/".concat(t,"/members"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,a){var l=e.apply(t,r);function c(e){Z(l,n,a,c,i,"next",e)}function i(e){Z(l,n,a,c,i,"throw",e)}c(void 0)}))});return function(e){return t.apply(this,arguments)}}(),j=function(e){return{id:e.id,name:e.login,imageUrl:e.avatar_url}},x=function(e){return t=e,r=j,Array.isArray(t)?t.map(r):[];var t,r},P=r(5542),A=r(1413),k=r(7239),S=r(2587),L=r(4313),z=r(1903),D=r(6970),I=r(764),C=r(3028),R=r(1864),U=(0,r(4366).Z)({palette:{primary:{main:"#006A7B"}}}),T=function(e){var t=e.children;return n.createElement(I.C,{value:f.Fs},n.createElement(C.Z,{theme:U},n.createElement(R.ZP,null),t))},q=(0,f.iv)("padding:0.5rem;background-color:",U.palette.primary.main,";color:",U.palette.primary.contrastText,";",""),B=function(e){return n.createElement(L.Z,null,n.createElement(z.Z,null,n.createElement(D.Z,{className:q},"ID"),n.createElement(D.Z,{className:q},"Name"),n.createElement(D.Z,{className:q},"Avatar")))},F=(0,f.iv)({name:"67t0gq",styles:"width:5rem"}),W=function(e){var t=e.member;return n.createElement(z.Z,null,n.createElement(D.Z,null,t.id),n.createElement(D.Z,null,t.name),n.createElement(D.Z,null,n.createElement("img",{className:F,src:t.imageUrl})))},M=function(e){var t=e.memberList,r=e.className;return n.createElement(A.Z,{className:r},n.createElement(k.Z,null,n.createElement(B,null),n.createElement(S.Z,null,t.map((function(e){return n.createElement(W,{key:e.id,member:e})})))))},$=(0,f.iv)({name:"1d3xsmy",styles:"display:grid;grid-template-columns:1fr;grid-template-areas:'title' 'memberList';grid-column-gap:1rem;grid-row-gap:1rem"}),_=(0,f.iv)({name:"16824ea",styles:"grid-area:title;justify-self:center;text-transform:capitalize"}),G=(0,f.iv)({name:"16pc8yg",styles:"grid-area:memberList"}),H=function(e){var t=e.organization,r=e.memberList,a=e.className;return n.createElement("div",{className:(0,f.cx)($,a)},n.createElement(P.Z,{className:_,variant:"h2"},"Organization: ",t),n.createElement(M,{className:G,memberList:r}))};function J(e,t,r,n,a,l,c){try{var i=e[l](c),u=i.value}catch(e){return void r(e)}i.done?t(u):Promise.resolve(u).then(n,a)}function K(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,l=[],c=!0,i=!1;try{for(r=r.call(e);!(c=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);c=!0);}catch(e){i=!0,a=e}finally{try{c||null==r.return||r.return()}finally{if(i)throw a}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return Q(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Q(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Q(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var V=function(e){var t=e.className,r=K(n.useState("antennapod"),1)[0],a=K(n.useState([]),2),l=a[0],c=a[1],i=function(){var e,t=(e=regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(r);case 2:t=e.sent,n=x(t),c(n);case 5:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,a){var l=e.apply(t,r);function c(e){J(l,n,a,c,i,"next",e)}function i(e){J(l,n,a,c,i,"throw",e)}c(void 0)}))});return function(){return t.apply(this,arguments)}}();return n.useEffect((function(){i()}),[r]),n.createElement(H,{className:t,organization:r,memberList:l})},X=function(){return n.createElement(h,null,(function(e){var t=e.className;return n.createElement(V,{className:t})}))},Y=function(){return n.createElement(l.UT,null,n.createElement(c.Z5,null,n.createElement(c.AW,{path:s.root,element:n.createElement(X,null)}),n.createElement(c.AW,{path:s.list,element:n.createElement(X,null)})))};const ee=function(){return n.createElement(T,null,n.createElement(Y,null))};a.render(n.createElement(ee,null),document.getElementById("root"))},7771:(e,t,r)=>{e.exports=r.p+"./images/2a645c7282467f16dd0c.png"}},e=>{var t=t=>e(e.s=t);e.O(0,[736],(()=>(t(6248),t(880)))),e.O()}]);