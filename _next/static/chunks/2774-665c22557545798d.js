"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2774],{37634:function(n,e,t){t.d(e,{Z:function(){return c}});var r=t(85893),i=t(25675),o=t(87357),l=t(15861),a=t(26660),d={container:{textAlign:"center",minHeight:"200px",width:"100%",border:"4px solid rgba(0, 0, 0, 0.11)",borderRadius:function(n){return n.spacing(2)},color:function(n){return n.palette.text.secondary},borderStyle:"dashed",padding:function(n){return n.spacing(2)},marginTop:function(n){return n.spacing(4)}}};var c=function(n){var e=n.message,t=void 0===e?"Failed to load data":e,c=n.style,u=void 0===c?{}:c;return(0,r.jsxs)(o.Z,{sx:d.container,style:u,children:[(0,r.jsx)(i.default,{unoptimized:!0,src:(0,a.assetPrefixer)("images/icons/empty-state-light.svg"),height:120,width:120,loader:a.imageLoader,alt:"Empty data"}),(0,r.jsx)(l.Z,{variant:"subtitle1",children:t})]})}},16759:function(n,e,t){t.d(e,{Z:function(){return d}});var r=t(85893),i=t(87357),o=t(67720),l=t(88078),a={container:{padding:"24px",width:"100%",position:"relative",minWidth:"0px",overflowWrap:"break-word",background:"#FFFFFF",boxShadow:"rgb(0 0 0 / 2%) 0px 3.5px 5.5px",borderRadius:"16px",margin:"auto",borderColor:"#E2E8F0"},divider:{marginTop:"32px",marginBottom:"32px"},text:{marginTop:"16px",marginBottom:"16px"}};var d=function(){return(0,r.jsxs)(i.Z,{sx:a.container,children:[(0,r.jsx)(i.Z,{sx:{width:"300px"},children:[1,2,3,4,5,6,7,8].map((function(n){return(0,r.jsx)(l.Z,{variant:"text"},"up-".concat(n))}))}),(0,r.jsx)(o.Z,{sx:a.divider}),(0,r.jsx)(i.Z,{children:[1,2,3,4,5,6,7,8].map((function(n){return(0,r.jsx)(l.Z,{variant:"rectangular",sx:a.text},"down-".concat(n))}))})]})}},19227:function(n,e,t){t.d(e,{Z:function(){return O}});var r=t(85893),i=t(67294),o=t(45697),l=t.n(o),a=t(11057),d=t(19536),c=t(98456),u=t(50657),s=t(31425),f=t(37645),p=t(6514),b=t(93946),v={button:{color:"#FFFFFF",textTransform:"capitalize",fontSize:"14px",fontStyle:"normal",fontWeight:"normal",height:{xs:"40px",sm:"48px"},"& .text":{display:{xs:"block",sm:"none"}},"& .shortText":{display:{xs:"inline-block",sm:"none"},fontSize:"24px"}},icon:{display:{xs:"block",sm:"none"}},dialogContent:{"& .error":{fontSize:"12px",color:"red"}},dialogActions:{"& button":{minWidth:"100px"}},closeButton:{position:"absolute",right:"8px",top:"8px",color:function(n){return n.palette.grey[500]}}};function m(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function x(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function h(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){x(n,e,t[e])}))}return n}function g(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,i,o=[],l=!0,a=!1;try{for(t=t.call(n);!(l=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);l=!0);}catch(d){a=!0,i=d}finally{try{l||null==t.return||t.return()}finally{if(a)throw i}}return o}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return m(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return m(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(n){var e=g(i.useState({open:null}),2),t=e[0],o=e[1],l=n.loading,m=void 0!==l&&l,x=n.isOpen,y=void 0!==x&&x,O=n.showButtons,I=void 0===O||O,S=n.maxWidth,T=void 0===S?"sm":S,C=n.IconSVG,E=void 0===C?null:C,N=n.modalButtonStyles,j=void 0===N?{}:N,A=n.modalExtraHandlerCB,D=void 0===A?null:A,R=n.modalCancelHandlerCB,w=void 0===R?null:R,B=n.modalConfirmHandlerCB,P=void 0===B?null:B,M=n.modalOpenHandlerCB,k=void 0===M?null:M,W=n.isDisabled,_=void 0!==W&&W,Z=n.openButtonText,F=void 0===Z?"Click":Z,U=n.title,H=void 0===U?"Window Title":U,G=n.extraBtnText,Y=void 0===G?"":G,L=n.cancelBtnText,z=void 0===L?"Cancel":L,V=n.confirmBtnText,K=void 0===V?"Ok":V,X=n.contentText,$=void 0===X?"":X,q=n.error,J=void 0===q?"":q,Q=n.colorTheme,nn=void 0===Q?"primary":Q;(0,i.useEffect)((function(){o((function(n){return h({},n,{open:y})}))}),[y]);var en=function(){o(h({},t,{open:!1})),w&&w()};return(0,r.jsxs)("div",{children:[F&&(0,r.jsxs)(a.Z,{disabled:_,disableElevation:!0,variant:"contained",color:nn,onClick:function(){o(h({},t,{open:!0})),k&&k()},sx:h({},v.button,j),children:[E&&(0,r.jsx)(E,{sx:v.icon}),F]}),(0,r.jsxs)(u.Z,{maxWidth:T,fullWidth:!0,open:t.open||!1,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[(0,r.jsxs)(f.Z,{children:[(0,r.jsx)("span",{children:H}),(0,r.jsx)(b.Z,{"aria-label":"close",sx:v.closeButton,onClick:en,disabled:m,children:(0,r.jsx)(d.Z,{})})]}),(0,r.jsxs)(p.Z,{sx:v.dialogContent,children:[""!==$&&(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{children:$}),(0,r.jsx)("div",{className:"error",children:J})]}),n.children]}),I&&(0,r.jsxs)(s.Z,{sx:v.dialogActions,children:[""!==Y&&(0,r.jsx)(a.Z,{onClick:D||en,disabled:m,children:Y}),(0,r.jsx)(a.Z,{onClick:w||en,disabled:m,children:z}),(0,r.jsxs)(a.Z,{variant:"contained",disabled:m,onClick:P||en,children:[(0,r.jsx)("span",{style:{display:m?"none":"block"},children:K}),(0,r.jsx)(c.Z,{size:24,color:"secondary",sx:{display:m?"block":"none"}})]})]})]})]})}y.propTypes={loading:l().bool,isOpen:l().bool,showButtons:l().bool,maxWidth:l().string,IconSVG:l().elementType,modalButtonStyles:l().object,modalCancelHandlerCB:l().func,modalConfirmHandlerCB:l().func,modalOpenHandlerCB:l().func,modalExtraHandlerCB:l().func,openButtonText:l().string,cancelBtnText:l().string,confirmBtnText:l().string,extraBtnText:l().string,title:l().string,contentText:l().string,children:l().node,error:l().string,isDisabled:l().bool,colorTheme:l().string};var O=y},77841:function(n,e){e.Z={htmlReportHR:{color:"rgba(0, 0, 0, 0.87)",fontWeight:400,fontSize:"1rem",lineHeight:"1.5",flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:"rgba(0, 0, 0, 0.12)",borderBottomWidth:"thin",margin:"48px 0 48px 0"},details:{maxWidth:{md:"60%",sm:"100%"},"& div":{marginBottom:"4px"},"& p":{color:function(n){return n.palette.grey[800]}}}}},38199:function(n,e,t){t.d(e,{X3:function(){return r},qv:function(){return i},GW:function(){return o},$P:function(){return l},vU:function(){return a},I4:function(){return d},KM:function(){return c}});var r={UID:"uid",ID:"id",REGION:"region",PROVINCE:"province",MUNICIPALITY:"municipality",TYPE:"type",CROP:"crop",STAGES:"stages",ACTIVITIES:"activities",MONTH:"month",CONDITION:"condition",CONDITIONS:"conditions",RISK:"risk",DATE_RANGE:"date_range",RAINFALL:"rainfall",TYPHOON:"typhoon",WIND_SIGNAL:"wind_signal",RECOMMENDATIONS:"recommendations",SMS_RECOMMENDATIONS:"smsRecommendations",UPDATED_BY:"updated_by",DATE_CREATED:"date_created"},i=[{field:r.REGION,label:"Region"},{field:r.PROVINCE,label:"Province"},{field:r.MUNICIPALITY,label:"Municipality"},{field:r.TYPE,label:"Report Type"},{field:r.CROP,label:"Crop"}],o=[{field:r.MONTH,label:"Month"},{field:r.STAGES,label:"Crop Stage(s)"},{field:r.ACTIVITIES,label:"Farming Activities"},{field:r.RISK,label:"Climate Risk"}],l=[{field:r.CONDITION,label:"Weather Condition"},{field:r.CONDITIONS,label:"Weather Condition"}],a=[{field:r.DATE_RANGE,label:"Weather data validity"},{field:r.RAINFALL,label:"Weather Condition"}],d=[{field:r.TYPHOON,label:"Typhoon Name"},{field:r.WIND_SIGNAL,label:"Wind Signal No."}],c={CROP_RECOMMENDATIONS:[{field:r.RECOMMENDATIONS,label:"Recommendations"},{field:r.SMS_RECOMMENDATIONS,label:"SMS Recommendations"}],USER_INFO:[{field:r.UPDATED_BY,label:"Created by"},{field:r.DATE_CREATED,label:"Date created"},{field:r.UID,label:"User ID"},{field:r.ID,label:"ID"}]}},69437:function(n,e,t){t.d(e,{Z:function(){return u}});var r=t(67294),i=t(47426),o=t(38199);function l(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function d(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){a(n,e,t[e])}))}return n}function c(n){return function(n){if(Array.isArray(n))return l(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,e){if(!n)return;if("string"===typeof n)return l(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return l(n,e)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=(0,r.useState)([]),l=t[0],a=t[1],u=function(n,e){var t="";switch(n){case o.X3.CONDITIONS:for(var r=function(n){var r,o,l,a,d;t+="".concat(null===(l=i.re[null===(r=e[n])||void 0===r||null===(o=r.mo)||void 0===o?void 0:o.toUpperCase()])||void 0===l?void 0:l.format,": "),t+=null!==(d=null===(a=Object.values(i.MW).find((function(t){var r;return t.label===(null===(r=e[n])||void 0===r?void 0:r.con)})))||void 0===a?void 0:a.sync)&&void 0!==d?d:"n/a",n<e.length-1&&(t+=", ")},l=0;l<(null!==e&&void 0!==e?e:[]).length;l+=1)r(l);break;case o.X3.CONDITION:var a;t=(null===(a=Object.values(i.MW).find((function(n){return n.label===e})))||void 0===a?void 0:a.sync)||"n/a";break;default:t=e}return Array.isArray(t)&&(t=t.toString().split(",").join(", ")),null!==t&&void 0!==t?t:"n/a"};return(0,r.useEffect)((function(){if((null===n||void 0===n?void 0:n.id)&&!(l.length>0)){var t=c(o.qv);"seasonal"===n[o.X3.TYPE]&&(t=c(t).concat(c(o.GW),c(o.$P),c(o.KM.USER_INFO))),"ten_day"===n[o.X3.TYPE]&&(t=c(t).concat(c(o.GW),c(o.vU),c(o.KM.USER_INFO))),"special_weather"===n[o.X3.TYPE]&&(t=c(t).concat(c(o.I4),c(o.KM.USER_INFO)));var r=t.map((function(e,t){return d({},e,{id:t,value:u(e.field,null===n||void 0===n?void 0:n[e.field])})})).filter((function(n){return!e.includes(n.field)&&!["-","n/a"].includes(n.value)}));a(r)}}),[n,e,l]),{fieldValues:l}}}}]);