(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d8682394","chunk-2d0babe1"],{"29b3":function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("TopLinks"),t.adminuser?e("div",{staticClass:"content mt-5"},[e("h1",{staticClass:"title has-text-centered has-text-weight-bold has-text-white"},[t._v("Your Admin Zone")]),e("div",{staticClass:"loading"},[e("loading",{attrs:{active:t.loading,"can-cancel":!1,"is-full-page":t.fullpage},on:{"update:active":function(s){t.loading=s}}})],1),e("div",{staticClass:"columns has-text-white is-centered is-multiline"},[e("div",{class:t.notify?"column is-full":"column is-hidden is-full"},[e("div",{staticClass:"notification has-text-centered is-danger"},[e("button",{staticClass:"delete",on:{click:function(s){t.notify=!1}}}),e("h2",{staticClass:"title has-text-white has-text-weight-bold"},[t._v("Disclaimer !!")]),e("p",{staticClass:"subtitle has-text-weight-bold"},[t._v("Use your Admin Powers Wisely !!.")])])]),e("div",{staticClass:"column is-two-fifths"},[e("h2",{staticClass:"title has-text-primary has-text-centered has-text-weight-bold"},[t._v("Permissions")]),e("p",{staticClass:"subtitle has-text-primary-dark has-text-centered has-text-weight-medium"},[t._v("You Have Given Following Scopes of Permission in this Website")]),e("div",{staticClass:"columns is-multiline is-desktop is-centered"},[e("div",{staticClass:"column is-full"},[e("div",{staticClass:"box has-background-warning"},[e("h2",{staticClass:"title has-text-centered has-text-weight-bold"},[t._v("Related to New Users")]),e("div",{staticClass:"columns is-vcentered is-centered is-multiline is-mobile"},[t._m(0),e("div",{staticClass:"column is-one-third"},[e("button",{staticClass:"button is-rounded is-light",on:{click:function(s){return t.gotoPage("/0:register/user")}}},[t._m(1),e("span",[t._v("Add")])])]),t._m(2),e("div",{staticClass:"column is-one-third"},[e("button",{staticClass:"button is-rounded is-light",on:{click:function(s){return t.gotoPage("/0:invite/user")}}},[t._m(3),e("span",[t._v("Invite")])])])])])]),t.adminuser&&t.superadmin?e("div",{staticClass:"column is-full"},[e("div",{staticClass:"box has-background-primary"},[e("h2",{staticClass:"title has-text-centered has-text-weight-bold"},[t._v("Permission to Users")]),e("div",{staticClass:"columns is-vcentered is-centered is-multiline is-mobile"},[t._m(4),e("div",{staticClass:"column is-one-third"},[e("button",{staticClass:"button is-rounded is-black",on:{click:function(s){return t.gotoPage("/0:register/admin")}}},[t._m(5),e("span",[t._v("Promote")])])])])])]):t._e(),e("div",{staticClass:"column is-full"},[e("div",{staticClass:"box has-background-danger"},[e("h2",{staticClass:"title has-text-centered has-text-white has-text-weight-bold"},[t._v("Related to Existing Users")]),e("div",{staticClass:"columns is-vcentered is-centered is-multiline is-mobile"},[t._m(6),e("div",{staticClass:"column is-one-third"},[e("button",{staticClass:"button is-rounded is-warning",on:{click:function(s){return t.gotoPage("/0:delete/user")}}},[t._m(7),e("span",[t._v("Delete")])])])])])])])]),e("div",{staticClass:"column is-three-fifths"},[e("div",{staticClass:"columns is-multiline is-desktop is-centered"},[e("div",{staticClass:"column is-full"},[e("div",{staticClass:"box has-background-light"},[e("h3",{staticClass:"title has-text-centered has-text-weight-bold has-text-info-dark"},[t._v("Admin Details")]),e("div",{staticClass:"columns is-vcentered is-multiline is-mobile"},[t._m(8),e("div",{staticClass:"column is-two-fifths"},[e("p",{staticClass:"subtitle has-text-weight-bold"},[t._v(t._s(t.userinfo.name))])]),t._m(9),e("div",{staticClass:"column is-two-fifths"},[e("p",{staticClass:"subtitle has-text-weight-bold"},[t._v(t._s(t.userinfo.email))])]),t._m(10),e("div",{staticClass:"column is-two-fifths"},[e("p",{staticClass:"subtitle has-text-weight-bold"},[t._v(t._s(t.userinfo.role))])]),t.adminuser&&!t.superadmin?e("div",{staticClass:"column is-three-fifths"},[e("p",{staticClass:"subtitle"},[t._v("Request Superadmin Status for More Powers")])]):t._e(),t.adminuser&&!t.superadmin?e("div",{staticClass:"column is-two-fifths"},[e("button",{staticClass:"button is-success",on:{click:function(s){return t.gotoPage("/0:register/request/superadmin")}}},[t._m(11),e("span",[t._v("Request Superadmin")])])]):t._e(),t.adminuser&&t.superadmin?e("div",{staticClass:"column has-text-centered is-full"},[e("p",{staticClass:"subtitle has-text-warning-dark has-text-weight-bold"},[t._v("You Have Maximum Access to this Website")])]):t._e(),t._m(12),e("div",{staticClass:"column is-two-fifths"},[e("p",{staticClass:"subtitle has-text-weight-bold"},[t._v(t._s(t._f("moment")(t.tokeninfo.issuedate,"dddd, MMMM Do YYYY [at] hh:mm A")))])]),t._m(13),e("div",{staticClass:"column is-two-fifths"},[e("p",{staticClass:"subtitle has-text-weight-bold"},[t._v(t._s(t._f("moment")(t.tokeninfo.expirydate,"dddd, MMMM Do YYYY [at] hh:mm A")))])])])])]),e("div",{staticClass:"column is-full"},[e("div",{staticClass:"box has-background-info"},[e("h3",{staticClass:"title has-text-centered has-text-weight-bold has-text-white"},[t._v("Personal")]),e("p",{staticClass:"subtitle has-text-light has-text-centered has-text-weight-medium"},[t._v("Change Your Preferences")]),e("div",{staticClass:"columns is-vcentered is-centered is-multiline is-mobile"},[t._m(14),e("div",{staticClass:"column is-3"},[e("button",{staticClass:"button is-rounded is-light",on:{click:function(s){return t.gotoPage("/0:settings/")}}},[t._m(15),e("span",{staticClass:"is-hidden-mobile"},[t._v("Settings")])])])])])])])])])]):t._e()],1)},a=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"column is-two-thirds"},[e("p",{staticClass:"subtitle"},[t._v("Add a User(only Request Basis)")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"icon is-small"},[e("i",{staticClass:"fas fa-user-plus"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"column is-two-thirds"},[e("p",{staticClass:"subtitle"},[t._v("Invite Users")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"icon is-small"},[e("i",{staticClass:"fas fa-user-plus"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"column is-two-thirds"},[e("p",{staticClass:"subtitle"},[t._v("Change Permission of Users")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"icon is-small"},[e("i",{staticClass:"fas fa-user-shield"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"column is-two-thirds"},[e("p",{staticClass:"subtitle has-text-white"},[t._v("Delete Users")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"icon is-small"},[e("i",{staticClass:"fas fa-user-times"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"column is-three-fifths"},[e("p",{staticClass:"subtitle"},[t._v("Name")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"column is-three-fifths"},[e("p",{staticClass:"subtitle"},[t._v("Email")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"column is-three-fifths"},[e("p",{staticClass:"subtitle"},[t._v("Current Role")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"icon is-small"},[e("i",{staticClass:"fas fa-user-shield"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"column is-three-fifths"},[e("p",{staticClass:"subtitle"},[t._v("Last Token Issue Date")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"column is-three-fifths"},[e("p",{staticClass:"subtitle"},[t._v("Last Token Expiry Date")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"column is-9"},[e("p",{staticClass:"subtitle has-text-light"},[t._v("Go to My Settings")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"icon is-small"},[e("i",{staticClass:"fas fa-user-cog"})])}],n=(e("d3b7"),e("25f0"),e("3905")),l=e("9062"),c=e.n(l),o=(e("e40d"),{components:{TopLinks:n["default"],Loading:c.a},data:function(){return{notify:!0,userinfo:{},tokeninfo:{},adminuser:!1,superadmin:!1,loading:!0,fullpage:!0}},methods:{gotoPage:function(t){this.$router.push({name:"results",params:{id:0,cmd:"result",success:!0,data:"Super Secure Line on the Way. Please Wait!!",redirectUrl:t}})}},created:function(){var t=this;this.loading=!0;var s=localStorage.getItem("tokendata"),e=localStorage.getItem("userdata");if(null!=e&&null!=s){var i=JSON.parse(this.$hash.AES.decrypt(s,this.$pass).toString(this.$hash.enc.Utf8)),a=JSON.parse(this.$hash.AES.decrypt(e,this.$pass).toString(this.$hash.enc.Utf8));this.axios.post(window.apiRoutes.verifyRoute,{token:i.token}).then((function(s){s.data.auth||s.data.registered||null!=s.data.tokenuser?a.admin&&a.superadmin?(t.adminuser=!0,t.superadmin=!0,t.userinfo=a,t.tokeninfo=i,t.loading=!1):a.admin&&!a.superadmin?(t.adminuser=!0,t.superadmin=!1,t.userinfo=a,t.tokeninfo=i,t.loading=!1):(t.loading=!1,t.$router.push({name:"results",params:{id:0,cmd:"result",data:"You Have Not Given Super Admin Permissions.",redirectUrl:"/0:home/"}})):(t.loading=!1,t.$router.push({name:"results",params:{id:0,cmd:"result",success:!1,data:"I think Your Token Has Expired. Please Login to Regerate Another One",redirectUrl:"/0:login/"}}))}))}else this.superadmin=!1,this.loading=!1,this.adminuser=!1}}),r=o,u=e("2877"),d=Object(u["a"])(r,i,a,!1,null,null,null);s["default"]=d.exports},3905:function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div")},a=[],n=e("2877"),l={},c=Object(n["a"])(l,i,a,!1,null,null,null);s["default"]=c.exports}}]);