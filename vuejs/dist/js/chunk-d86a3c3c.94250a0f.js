(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d86a3c3c","chunk-2d0babe1"],{"0147":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content registration-page"},[a("TopLinks"),a("div",{staticClass:"loading"},[a("loading",{attrs:{active:e.loading,"can-cancel":!1,"is-full-page":e.fullPage},on:{"update:active":function(t){e.loading=t}}})],1),a("h4",[e._v("Invite - Admin")]),a("p",{staticStyle:{color:"#bac964"}},[e._v(e._s(e.databasemessage))]),a("p",{staticStyle:{color:"#f6f578"}},[e._v(e._s(e.resultmessage))]),a("form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[a("label",{attrs:{for:"email"}},[e._v(" > User's E-Mail Address")]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{id:"email",type:"email",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),a("label",{attrs:{for:"message"}},[e._v(" > Message to Him ")]),a("div",[e._v(" v "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],attrs:{id:"message",required:""},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}})]),a("label",{staticStyle:{color:"grey","font-size":"14px"}},[e._v(" (Why he Needs Admin Status Heaven?) ")]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"checked"}],attrs:{type:"checkbox",id:"terms",name:"terms"},domProps:{checked:Array.isArray(e.checked)?e._i(e.checked,null)>-1:e.checked},on:{change:function(t){var a=e.checked,s=t.target,i=!!s.checked;if(Array.isArray(a)){var n=null,o=e._i(a,n);s.checked?o<0&&(e.checked=a.concat([n])):o>-1&&(e.checked=a.slice(0,o).concat(a.slice(o+1)))}else e.checked=i}}}),e._m(0),a("br")]),e._m(1)])],1)},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{attrs:{for:"terms"}},[e._v(" I Accept and Read the "),a("a",{staticClass:"guidelines",attrs:{href:"https://github.com/tks18/gindex-v4/blob/dark-mode-0-1/CODE_OF_CONDUCT.md",target:"_blank"}},[e._v("Community Guidelines")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("button",{staticClass:"registration-button",attrs:{type:"submit"}},[e._v(" Invite User ")])])}],n=(a("99af"),a("b0c0"),a("3905")),o=a("9062"),r=a.n(o),l=(a("e40d"),{components:{TopLinks:n["default"],Loading:r.a},props:["nextUrl"],data:function(){return{userinfo:{},email:"",message:"",resultmessage:"",databasemessage:"",loading:!0,fullpage:!0}},methods:{handleSubmit:function(e){var t=this;if(this.loading=!0,e.preventDefault(),this.checked){var a=window.apiRoutes.inviteAdmin;this.$http.post(a,{email:this.email,message:this.message,adminuseremail:this.userinfo.email}).then((function(e){e&&(e.data.auth&&e.data.registered,t.resultmessage=e.data.message,t.loading=!1)})).catch((function(e){t.resultmessage=e}))}else this.loading=!1,this.resultmessage="> You Need to Accept Community Guidelines.",this.checked=!1}},mounted:function(){var e=this;this.loading=!0,this.$http.post(window.apiRoutes.homeRoute).then((function(t){console.log(t),"200"==t.status?e.databasemessage="🟢 Database is Live. Ping - ".concat(t.data.ping,"ms"):e.databasemessage="🔴 Database Offline / under Maintenance. Please Try Later";var a=JSON.parse(localStorage.getItem("userdata")),s=JSON.parse(localStorage.getItem("tokendata"));a&&s?a.verified&&a.admin&&a.superadmin?(e.userinfo=a,e.loading=!1,e.resultmessage="You are Currently Logged in as ".concat(a.name," as ").concat(a.role)):(e.loading=!1,e.$router.push({name:"results",params:{data:"You are Unauthorized",redirectUrl:"/0:home/"}})):(e.loading=!1,e.$router.push({name:"results",params:{data:"You are Unauthorized",redirectUrl:"/0:login/"}}))}))}}),u=l,c=a("2877"),d=Object(c["a"])(u,s,i,!1,null,null,null);t["default"]=d.exports},3905:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"navigation-buttons"},[a("li",{staticClass:"buttons",on:{click:e.homeRoute}},[e._v("Home")]),e.logged?a("li",{staticClass:"buttons",on:{click:e.settingsRoute}},[e._v("My Settings")]):e._e(),e.logged?e._e():a("li",{staticClass:"buttons",on:{click:e.otpRegisterRoute}},[e._v("OTP Registration")]),e.logged&&e.admin&&!e.superadmin?a("li",{staticClass:"buttons",on:{click:e.adminRoute}},[e._v("Admin Panel")]):e._e(),e.logged&&e.admin&&e.superadmin?a("li",{staticClass:"buttons",on:{click:e.superAdminRoute}},[e._v("Admin Panel")]):e._e(),e.logged?a("li",{staticClass:"buttons",on:{click:e.contentRoute}},[e._v("View Content")]):e._e(),e.logged?a("li",{staticClass:"buttons",on:{click:e.logoutRoute}},[e._v("Logout")]):e._e(),e.logged?e._e():a("li",{staticClass:"buttons",on:{click:e.requestRoute}},[e._v("Request Access")]),e.logged?e._e():a("li",{staticClass:"buttons",on:{click:e.loginRoute}},[e._v("Login")])]),a("hr")])},i=[],n={data:function(){return{logged:!1,admin:!1,superadmin:!1}},methods:{homeRoute:function(){this.$router.push("/0:home/")},settingsRoute:function(){this.$router.push({name:"results",params:{data:"You are Redirected Through a Secure Channel. Please Wait!!",redirectUrl:"/0:settings/"}})},adminRoute:function(){this.$router.push({name:"results",params:{data:"You are Redirected Through a Secure Channel. Please Wait!!",redirectUrl:"/0:admin/"}})},superAdminRoute:function(){this.$router.push({name:"results",params:{data:"You are Redirected Through a Secure Channel. Please Wait!!",redirectUrl:"/0:superadmin/"}})},contentRoute:function(){this.$router.push({name:"results",params:{data:"You are Redirected Through a Secure Channel. Please Wait!!",redirectUrl:"/0:/"}})},logoutRoute:function(){var e=JSON.parse(localStorage.getItem("tokendata")),t=JSON.parse(localStorage.getItem("userdata"));null!=t&&null!=e&&(localStorage.removeItem("tokendata"),localStorage.removeItem("userdata"),this.$router.push({name:"results",params:{data:"You are Being Logged Out. Please Wait",redirectUrl:"/0:home/"}}))},requestRoute:function(){this.$router.push("/0:register/request/user")},loginRoute:function(){this.$router.push("/0:login/")},otpRegisterRoute:function(){this.$router.push("/0:register/otp")}},created:function(){var e=this,t=JSON.parse(localStorage.getItem("tokendata")),a=JSON.parse(localStorage.getItem("userdata"));null!=a&&null!=t?this.axios.post(window.apiRoutes.verifyRoute,{token:t.token}).then((function(t){t.data.auth||t.data.registered||null!=t.data.tokenuser?a.admin&&!a.superadmin?(e.logged=!0,e.admin=!0):a.admin&&a.superadmin?(e.logged=!0,e.admin=!0,e.superadmin=!0):e.logged=!0:e.$router.push({name:"results",params:{data:"I think Your Token Has Expired. Please Login to Regerate Another One",redirectUrl:"/0:login/"}})})):this.logged=!1}},o=n,r=a("2877"),l=Object(r["a"])(o,s,i,!1,null,null,null);t["default"]=l.exports}}]);