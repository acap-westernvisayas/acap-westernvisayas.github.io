(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2300],{86880:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/login",function(){return t(51445)}])},84846:function(n,e,t){"use strict";t.d(e,{Z:function(){return C}});var r=t(34051),o=t.n(r),i=t(85893),a=t(67294),c=t(11163),u=t(63835),s=t(47426),l=t(11057),p=t(87357),f=t(61903),g=t(20719),d=t(15861),m=t(94229),v={container:{width:"100%",display:"grid",minHeight:"50vh",placeItems:"center"},loginContainer:{width:{xs:"100%",sm:"400px"},display:"flex",flexDirection:"column",textAlign:"center",padding:function(n){return n.spacing(1)},"& .MuiTextField-root, button":{marginTop:function(n){return n.spacing(2)}},"& h5":{marginBottom:function(n){return n.spacing(2)}},"& svg":{fontSize:"45px",margin:"auto",marginBottom:"8px"}},btnContainer:{display:"flex",gap:3,"& button":{flexGrow:1}}};var x=function(n){var e=n.loading,t=n.hasUser,r=n.state,o=n.loginTitle,a=n.onInputChange,c=n.onInputClick,u=n.onBtnClick;return(0,i.jsxs)("div",{children:[e&&(0,i.jsx)(g.Z,{}),!e&&!t&&(0,i.jsx)(p.Z,{sx:v.container,id:"bacap-login",children:(0,i.jsxs)(p.Z,{component:"form",noValidate:!0,autoComplete:"off",sx:v.loginContainer,children:["Superadmin"===o&&(0,i.jsx)(m.Z,{color:"primary",size:"large"}),(0,i.jsxs)(d.Z,{variant:"h5",children:["ACAP ",(0,i.jsx)("br",{}),o||"Admin"," Login"]}),(0,i.jsx)(f.Z,{error:""!==r.error,id:"email",label:"Enter email",variant:"outlined",value:r.email,onChange:a,onClick:c}),(0,i.jsx)(f.Z,{error:""!==r.error,id:"password",label:"Enter password",type:"password",variant:"outlined",value:r.password,onChange:a,onClick:c,helperText:r.error}),(0,i.jsx)(l.Z,{variant:"contained",size:"large",onClick:u,children:"Log in"})]})})]})};function h(n,e,t,r,o,i,a){try{var c=n[i](a),u=c.value}catch(s){return void t(s)}c.done?e(u):Promise.resolve(u).then(r,o)}function j(n){return function(){var e=this,t=arguments;return new Promise((function(r,o){var i=n.apply(e,t);function a(n){h(i,r,o,a,c,"next",n)}function c(n){h(i,r,o,a,c,"throw",n)}a(void 0)}))}}function y(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function w(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){y(n,e,t[e])}))}return n}var b={email:"",password:"",error:""};var C=function(n){var e=n.accLevel,t=void 0===e?2:e,r=n.loginTitle,l=void 0===r?"":r,p=(0,a.useState)(b),f=p[0],g=p[1],d=(0,u.aC)(),m=(0,c.useRouter)();(0,a.useEffect)((function(){if(d.user&&!d.loading&&""===d.error){var n=t===s.DW.ADMIN?"/admin":"/superadmin";d.user.accountlevel===t?m.push(n):(d.logOut(),g((function(n){return w({},n,{error:"Unauthorized account level."})})))}}),[d,t,m]),(0,a.useEffect)((function(){""!==d.error&&g((function(n){return w({},n,{error:d.error})}))}),[d.error]);var v=function(){var n=j(o().mark((function n(){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,d.signIn({email:f.email,password:f.password});case 3:n.next=8;break;case 5:n.prev=5,n.t0=n.catch(0),g((function(e){return w({},e,{error:(0,u.Z)(n.t0.message)})}));case 8:case"end":return n.stop()}}),n,null,[[0,5]])})));return function(){return n.apply(this,arguments)}}(),h=function(){var n=j(o().mark((function n(){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d.logOut();case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,i.jsx)(x,{loading:d.loading,hasUser:d.user,state:f,loginTitle:l,onInputChange:function(n){var e=n.target,t=e.id,r=e.value;g((function(n){return w({},n,y({},t,r))})),""!==f.error&&g(w({},f,{error:""}))},onInputClick:function(n){g((function(e){var t;return w({},e,(y(t={},n.target.id,""),y(t,"error",""),t))}))},onBtnClick:v,onBtnLogoutClick:h})}},43370:function(n,e,t){"use strict";var r=t(85893),o=t(9008),i=t(47426);e.Z=function(n){var e=n.title,t=n.ogDescription,a=n.ogImageURL,c=n.ogImgAlt,u=void 0===c?"Picture":c,s=n.ogSiteName,l=void 0===s?"ACAP-".concat(i.Gt.toUpperCase()):s,p=n.ogURL;return(0,r.jsxs)(o.default,{children:[(0,r.jsx)("meta",{name:"description",content:t}),(0,r.jsx)("meta",{name:"og:description",content:t}),(0,r.jsx)("meta",{property:"og:title",content:e}),(0,r.jsx)("meta",{property:"og:site_name",content:l}),(0,r.jsx)("meta",{property:"og:image",content:a}),(0,r.jsx)("meta",{property:"og:image:width",content:"600"}),(0,r.jsx)("meta",{property:"og:image:height",content:"315"}),(0,r.jsx)("meta",{property:"og:image:alt",content:u}),(0,r.jsx)("meta",{property:"og:url",content:p}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{name:"twitter:title",content:e}),(0,r.jsx)("meta",{name:"twitter:image",content:a}),(0,r.jsx)("title",{children:e})]})}},20719:function(n,e,t){"use strict";t.d(e,{Z:function(){return l}});var r=t(85893),o=t(87357),i=t(98456),a=t(15861),c={container:{width:"100%",backgroundColor:"#fff",minHeight:"50vh",display:"grid",placeItems:"center"},loading:{display:"flex",justifyContent:"center",alignItems:"center"}};function u(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){u(n,e,t[e])}))}return n}var l=function(n){var e=n.sx;return(0,r.jsx)(o.Z,{sx:s({},c.container,e&&s({},e)),children:(0,r.jsxs)(o.Z,{sx:c.loading,children:[(0,r.jsx)(a.Z,{variant:"subtitle1",children:"Loading..."}),(0,r.jsx)(i.Z,{size:"32px"})]})})}},51445:function(n,e,t){"use strict";t.r(e),t.d(e,{__N_SSG:function(){return c}});var r=t(85893),o=t(47426),i=t(84846),a=t(43370);var c=!0;e.default=function(n){var e=n.media;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Z,{title:"Agro-Climatic Advisory Portal - ".concat(o.Gt," (ACAP-").concat(o.Gt.toUpperCase(),") Admin Login"),ogDescription:e.description,ogImageURL:e.url,ogURL:e.path}),(0,r.jsx)(i.Z,{loginTitle:"Admin",accLevel:o.DW.ADMIN})]})}}},function(n){n.O(0,[5778,3593,9964,8858,1903,9476,9774,2888,179],(function(){return e=86880,n(n.s=e);var e}));var e=n.O();_N_E=e}]);