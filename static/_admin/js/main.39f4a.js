(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{0:function(e,t,n){e.exports=n(29)(1)},1:function(e,t,n){e.exports=n(29)(0)},101:function(e,t,n){e.exports=n(29)(51)},20:function(e,t,n){e.exports=n(29)(83)},219:function(e,t,n){"use strict";var a={articleBlogCount:{},articleCommentCount:{},articleCount:{},count:{},dynamicCommentCount:{},dynamicCount:{},new_article:[],new_comment:[],new_user:[]};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ADMIN_COUNT":return Object.assign({},e,{},t.data);default:return e}}},242:function(e,t,n){e.exports=n(29)(57)},243:function(e,t,n){e.exports=n(29)(95)},254:function(e,t,n){e.exports=n(29)(2)},263:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(97),r=function(e,t){return function(n){a.a.get("/admin-index/statistics",e).then((function(e){return t&&t(e),n({type:"SET_ADMIN_COUNT",data:e})}))}}},264:function(e,t,n){e.exports=n(29)(31)},267:function(e,t,n){n(268),e.exports=n(549)},29:function(e,t){e.exports=vendor_library},3:function(e,t,n){e.exports=n(29)(38)},439:function(e,t,n){},440:function(e,t,n){},48:function(e,t,n){e.exports=n(29)(87)},521:function(e,t,n){},524:function(e,t,n){e.exports=n(29)(61)},547:function(e,t,n){},548:function(e,t,n){},549:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(3),o=n.n(i),l=n(96),c=n(241),s=n(242),u=n(48),m=n(243),d=n(244),_={title:""};var g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TITLE":return Object.assign({},e,{title:t.title});default:return e}},h={asideList:"",user:{},website:{}};var p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ASIDE_LIST":return Object.assign({},e,{asideList:t.all_authority_name_id});case"SET_CURRENT_USER_INFO":return Object.assign({},e,{user:t.admin_user_info,website:t.website});default:return e}},f={isLoading:!1,isAppLogin:!1};var E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING":return Object.assign({},e,{},t.payload);default:return e}},y=n(219),v={user_list:[],count:"",current_user_info:{}};var b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_USER_LIST":return Object.assign({},e,{},t.data);case"SET_CURRENT_USER_INFO":return Object.assign({},e,{current_user_info:t.data});default:return e}},O={list:[],count:"",current_info:{},current_role_info:{},role_authority_list_all:[]};var T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_USER_ROLE_LIST":return Object.assign({},e,{},t.data);case"SET_USER_ROLE_INFO":return Object.assign({},e,{current_info:t.data});case"SET_CURRENT_USER_ROLE_INFO":return Object.assign({},e,{current_role_info:t.data});case"SET_USER_ROLE_AUTHORITY_LIST_ALL":return Object.assign({},e,{role_authority_list_all:t.data});default:return e}},k={user_authority_list:[],user_authority_source_list:[],count:"",current_authority_info:{}};function S(e,t){var n=[];for(var a in e)e[a].authority_parent_id===t&&(e[a].children=S(e,e[a].authority_id),n.push(e[a]));return n}var I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_USER_AUTHORITY_LIST":return Object.assign({},e,{user_authority_list:S(t.data,""),user_authority_source_list:t.data});case"SET_CURRENT_USER_AUTHORITY_INFO":return Object.assign({},e,{current_authority_info:t.data});default:return e}},C={list:[],count:"",current_info:{}};var N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_AVATAR_REVIEW_LIST":return Object.assign({},e,{},t.data);case"AVATAR_REVIEW_SET_CURRENT_INFO":return Object.assign({},e,{current_info:t.data});default:return e}},w={list:[],count:"",current_info:{}};var R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ARTICLE_LIST":return Object.assign({},e,{},t.data);case"ARTICLE_SET_CURRENT_INFO":return Object.assign({},e,{current_info:t.data});default:return e}},L={list:[],count:"",current_info:{}};var j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_COMMENT_LIST":return Object.assign({},e,{},t.data);case"SET_COMMENT_INFO":return Object.assign({},e,{current_info:t.data});default:return e}},A={list:[],count:"",current_info:{}};var M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ARTICLE_TAGS_LIST":return Object.assign({},e,{},t.data);case"SET_ARTICLE_TAG_INFO":return Object.assign({},e,{current_info:t.data});default:return e}},U={list:[],count:"",current_info:{}};var x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ARTICLE_BLOG_LIST":return Object.assign({},e,{},t.data);case"SET_ARTICLE_BLOG_INFO":return Object.assign({},e,{current_info:t.data});default:return e}},P={list:[],count:"",current_info:{}};var G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ARTICLE_COLUMN_LIST":return Object.assign({},e,{},t.data);case"SET_ARTICLE_COLUMN_INFO":return Object.assign({},e,{current_info:t.data});default:return e}},F={list:[],count:"",current_info:{}};var D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PICTURE_LIST":return Object.assign({},e,{},t.data);case"SET_PICTURE_INFO":return Object.assign({},e,{current_info:t.data});default:return e}},B={admin_user_list:[],count:"",current_user_info:{},admin_role_all:[]};var K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ADMIN_USER_LIST":return Object.assign({},e,{},t.data);case"SET_ADMIN_CURRENT_USER_INFO":return Object.assign({},e,{current_user_info:t.data});case"SET_ADMIN_ROlE_ALL":return Object.assign({},e,{admin_role_all:t.data});default:return e}},Y={info:{email:{},website:{}}};var H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SYSTEM_CONFIG_INFO":return Object.assign({},e,{info:t.data});default:return e}},q={admin_role_list:[],role_authority_list_all:[],count:"",current_role_info:{}};var W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ADMIN_ROLE_LIST":return Object.assign({},e,{},t.data);case"SET_CURRENT_ADMIN_ROLE_INFO":return Object.assign({},e,{current_role_info:t.data});case"SET_ADMIN_ROLE_AUTHORITY_LIST_ALL":return Object.assign({},e,{role_authority_list_all:t.data});default:return e}},V={admin_authority_list:[],admin_authority_source_list:[],count:"",current_authority_info:{}};function z(e,t){var n=[];for(var a in e)e[a].authority_parent_id===t&&(e[a].children=z(e,e[a].authority_id),n.push(e[a]));return n}var J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ADMIN_AUTHORITY_LIST":return Object.assign({},e,{admin_authority_list:z(t.data,""),admin_authority_source_list:t.data});case"SET_CURRENT_AUTHORITY_INFO":return Object.assign({},e,{current_authority_info:t.data});default:return e}},X={list:[],count:"",current_info:{}};var Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ADMIN_SYSTEM_LOG_LIST":return Object.assign({},e,{},t.data);case"SET_ADMIN_SYSTEM_LOG_INFO":return Object.assign({},e,{current_info:t.data});default:return e}},Z={notice:[],advertise:[]};var $=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_WEBSITE_CONFIG_NOTICE":return Object.assign({},e,{notice:t.data});case"SET_WEBSITE_CONFIG_ADVERTISE":return Object.assign({},e,{advertise:t.data});default:return e}},ee={list:[],count:"",current_info:{}};var te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_DYNAMIC_TOPICS_LIST":return Object.assign({},e,{},t.data);case"SET_DYNAMIC_TOPIC_INFO":return Object.assign({},e,{current_info:t.data});default:return e}},ne={list:[],count:"",current_info:{}};var ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_DYNAMIC_COMMENT_LIST":return Object.assign({},e,{},t.data);case"SET_DYNAMIC_COMMENT_INFO":return Object.assign({},e,{current_info:t.data});default:return e}},re={list:[],count:"",current_info:{}};var ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_DYNAMIC_LIST":return Object.assign({},e,{},t.data);case"DYNAMIC_SET_CURRENT_INFO":return Object.assign({},e,{current_info:t.data});default:return e}},oe={list:[],count:"",current_info:{}};var le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_BOOK_LIST":return Object.assign({},e,{},t.data);case"BOOK_SET_CURRENT_INFO":return Object.assign({},e,{current_info:t.data});default:return e}},ce={list:[],count:"",current_info:{}};var se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_BOOKS_LIST":return Object.assign({},e,{},t.data);case"BOOKS_SET_CURRENT_INFO":return Object.assign({},e,{current_info:t.data});default:return e}},ue={list:[],count:"",current_info:{}};var me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_BOOK_COMMENT_LIST":return Object.assign({},e,{},t.data);case"SET_BOOK_COMMENT_INFO":return Object.assign({},e,{current_info:t.data});default:return e}},de={list:[],count:"",current_info:{}};var _e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_BOOKS_COMMENT_LIST":return Object.assign({},e,{},t.data);case"SET_BOOKS_COMMENT_INFO":return Object.assign({},e,{current_info:t.data});default:return e}},ge={stateTitle:g,stateMange:p,stateLoading:E,stateIndex:y.a,stateUser:b,stateUserRole:T,stateUserAuthority:I,stateUserAvatarReview:N,stateArticle:R,stateArticleComment:j,stateArticleTag:M,stateArticleBlog:x,stateArticleColumn:G,statePicture:D,stateAdminUser:K,stateAdminRole:W,stateAdminAuthority:J,stateAdminSystemLog:Q,stateSystemConfig:H,stateWebsiteConfig:$,stateDynamic:ie,stateDynamicTopic:te,stateDynamicComment:ae,stateBook:le,stateBooks:se,stateBookComment:me,stateBooksComment:_e},he=n(99),pe=n.n(he),fe=(n(438),n(439),n(440),n(49)),Ee=n.n(fe),ye=n(50),ve=n.n(ye),be=n(51),Oe=n.n(be),Te=n(52),ke=n.n(Te),Se=n(53),Ie=n.n(Se),Ce=n(20),Ne=n(175),we=n.n(Ne),Re=[{path:"/sign_in",title:"登录",component:function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(32)]).then(n.bind(null,1192))}},{path:"/manager",component:n(550).default,authority:["admin","user"],routes:[{path:"/manager/index",name:"index",title:"首页",component:function(){return Promise.all([n.e(0),n.e(2),n.e(4),n.e(31),n.e(33)]).then(n.bind(null,1168))}},{path:"/manager/user",name:"user",title:"前台用户管理",component:function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(3),n.e(8)]).then(n.bind(null,1184))}},{path:"/manager/article",name:"article",title:"文章汇总",component:function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(3),n.e(13)]).then(n.bind(null,1185))}},{path:"/manager/article-tag",name:"articleTag",title:"文章标签",component:function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(3),n.e(25)]).then(n.bind(null,1188))}},{path:"/manager/article-column",name:"articleColumn",title:"文章专栏",component:function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(3),n.e(11)]).then(n.bind(null,1189))}},{path:"/manager/article-blog",name:"articleBlog",title:"个人专栏",component:function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(3),n.e(19)]).then(n.bind(null,1190))}},{path:"/manager/user-role",name:"userRole",title:"用户角色",component:function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(3),n.e(10)]).then(n.bind(null,1169))}},{path:"/manager/user-authority",name:"userAuthority",title:"用户权限",component:function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(3),n.e(29)]).then(n.bind(null,1170))}},{path:"/manager/user-avatar-review",name:"userAvatarReview",title:"用户头像审核",component:function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(4),n.e(27)]).then(n.bind(null,1191))}},{path:"/manager/picture",name:"picture",title:"图片管理",component:function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(3),n.e(9)]).then(n.bind(null,1180))}},{path:"/manager/article-comment",name:"articleComment",title:"评论管理",component:function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(3),n.e(20)]).then(n.bind(null,1174))}},{path:"/manager/admin-user",name:"adminUser",title:"后台管理员管理",component:function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(3),n.e(17)]).then(n.bind(null,1182))}},{path:"/manager/admin-role",name:"adminRole",title:"后台角色",component:function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(3),n.e(12)]).then(n.bind(null,1181))}},{path:"/manager/admin-authority",name:"adminAuthority",title:"后台权限",component:function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(3),n.e(28)]).then(n.bind(null,1171))}},{path:"/manager/system-config",name:"systemConfig",title:"系统配置",component:function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(3),n.e(30)]).then(n.bind(null,1172))}},{path:"/manager/admin-system-log",name:"adminSystemLog",title:"后台系统日志",component:function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(3),n.e(26)]).then(n.bind(null,1178))}},{path:"/manager/website-config",name:"websiteConfig",title:"网站配置",component:function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(3),n.e(24)]).then(n.bind(null,1173))}},{path:"/manager/dynamic",name:"dynamic",title:"动态",component:function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(3),n.e(16)]).then(n.bind(null,1179))}},{path:"/manager/dynamic-topic",name:"dynamicTopic",title:"动态的话题",component:function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(3),n.e(18)]).then(n.bind(null,1183))}},{path:"/manager/dynamic-comment",name:"dynamicComment",title:"动态的评论管理",component:function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(3),n.e(23)]).then(n.bind(null,1176))}},{path:"/manager/books",name:"books",title:"小书章节",component:function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(3),n.e(15)]).then(n.bind(null,1186))}},{path:"/manager/book",name:"book",title:"小书章节",component:function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(3),n.e(14)]).then(n.bind(null,1187))}},{path:"/manager/books-comment",name:"booksComment",title:"小书评价",component:function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(3),n.e(22)]).then(n.bind(null,1175))}},{path:"/manager/book-comment",name:"bookComment",title:"小书评价",component:function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(3),n.e(21)]).then(n.bind(null,1177))}}]}],Le=function(e){var t=e.isLoading,n=e.error;return t?r.a.createElement("div",null,"Loading..."):n?r.a.createElement("div",null,"Sorry, there was a problem loading the page."):null},je=function(e){function t(){return Ee()(this,t),Oe()(this,ke()(t).apply(this,arguments))}return Ie()(t,e),ve()(t,[{key:"render",value:function(){return r.a.createElement(Ce.HashRouter,null,r.a.createElement(a.Fragment,null,Re.map((function(e,t){return e.routes?r.a.createElement(Ce.Route,{render:function(){return r.a.createElement(e.component,null,e.routes.map((function(e,t){return r.a.createElement(Ce.Route,{component:we()({loader:e.component,loading:Le}),key:t,path:e.path})})))},key:t,path:e.path}):r.a.createElement(Ce.Route,{component:we()({loader:e.component,loading:Le}),key:t,path:e.path})})),r.a.createElement(Ce.Route,{exact:!0,path:"/",render:function(){return r.a.createElement(Ce.Redirect,{to:"/manager/index"})}})))}}]),t}(a.PureComponent);pe.a.locale("zh-cn");var Ae,Me=[m.default],Ue=Object(l.createStore)(Object(l.combineReducers)(Object.assign({routing:s.routerReducer},ge)),Object(c.composeWithDevTools)(l.applyMiddleware.apply(void 0,Me)));Ae=je,o.a.render(r.a.createElement(d.AppContainer,null,r.a.createElement(u.Provider,{store:Ue},r.a.createElement(Ae,null))),document.getElementById("app"))},550:function(e,t,n){"use strict";n.r(t);n(443);var a,r,i=n(247),o=n.n(i),l=n(49),c=n.n(l),s=n(50),u=n.n(s),m=n(51),d=n.n(m),_=n(52),g=n.n(_),h=n(53),p=n.n(h),f=(n(130),n(25)),E=n.n(f),y=n(0),v=n.n(y),b=n(20),O=n(48),T=n(85),k=n(97),S=(n(261),n(239)),I=n.n(S),C=(n(176),n(21)),N=n.n(C),w=(n(182),n(17)),R=n.n(w),L=(n(521),n(263),R.a.SubMenu),j=(R.a.ItemGroup,v.a.createElement(R.a,null,v.a.createElement(R.a.Item,null,v.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.alipay.com/"},"个人资料")),v.a.createElement(R.a.Item,null,v.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.tmall.com/"},"退出"))),a=Object(O.connect)((function(e){return{stateTitle:e.stateTitle,stateMange:e.stateMange}})),Object(b.withRouter)(r=a(r=function(e){function t(){var e,n;c()(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=d()(this,(e=g()(t)).call.apply(e,[this].concat(r)))).state={current:""},n.topMenuClick=function(e){n.setState({current:e.key})},n._esc=function(){localStorage.box_tokens="",n.props.history.push("/sign_in")},n}return p()(t,e),u()(t,[{key:"render",value:function(){var e=this.props,t=e.collapsed,n=e.onCollapseChange,a=e.stateMange.user,r=void 0===a?{}:a;return v.a.createElement(E.a.Header,{className:{"k-header":!0,collapsed:t}},v.a.createElement("div",{className:"clearfix"},v.a.createElement("div",{className:"pull-left"},v.a.createElement(N.a,{className:"trigger",type:t?"menu-unfold":"menu-fold",onClick:function(){return n(!t)}})),v.a.createElement("div",{className:"pull-right"},v.a.createElement(R.a,{onClick:this.topMenuClick,selectedKeys:[this.state.current],mode:"horizontal"},v.a.createElement(R.a.Item,{key:"alipay"}),v.a.createElement(L,{title:v.a.createElement("div",{className:"personal"},v.a.createElement(I.a,{src:r.avatar}),v.a.createElement("div",{className:"personal-info"},v.a.createElement("span",{className:"name"},r.nickname),v.a.createElement("span",{className:"role"},r.account)))},v.a.createElement(R.a.Item,{key:"setting",onClick:this._esc},"退出"))))))}}]),t}(y.Component))||r)||r),A=(n(131),n(246)),M=n.n(A),U=(n(546),n(547),M.a),x=(n(548),E.a.Header,E.a.Content,E.a.Footer,E.a.Sider,R.a.SubMenu),P=(R.a.ItemGroup,function(e){function t(){var e,n;c()(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=d()(this,(e=g()(t)).call.apply(e,[this].concat(r)))).state={openKeys:["web"],isMobile:!1,aside_list:[{title:"主页",key:"index",icon:"home",link:"/manager/index"},{title:"文章管理",key:"article_mange",icon:"file-text",children:[{title:"文章汇总",key:"article",link:"/manager/article"},{title:"个人专栏",key:"articleBlog",link:"/manager/article-blog"},{title:"文章标签",key:"article_tag",link:"/manager/article-tag"},{title:"文章专栏",key:"article_column",link:"/manager/article-column"},{title:"文章评论管理",key:"comment",link:"/manager/article-comment"}]},{title:"动态管理",key:"dynamic",icon:"message",children:[{title:"动态汇总",key:"dynamics",link:"/manager/dynamic"},{title:"动态话题",key:"dynamicTopic",link:"/manager/dynamic-topic"},{title:"动态评论",key:"dynamicComment",link:"/manager/dynamic-comment"}]},{title:"小书管理",key:"bookManager",icon:"book",children:[{title:"小书",key:"books",link:"/manager/books"},{title:"小书章节",key:"book",link:"/manager/book"},{title:"小书评论",key:"booksComment",link:"/manager/books-comment"},{title:"小书章节评论",key:"bookComment",link:"/manager/book-comment"}]},{title:"用户管理",key:"user_manger",icon:"user",children:[{title:"用户管理",key:"user",link:"/manager/user"},{title:"用户角色",key:"user_role",link:"/manager/user-role"},{title:"用户权限",key:"user_authority",link:"/manager/user-authority"},{title:"用户头像审核",key:"user_avatar_review",link:"/manager/user-avatar-review"}]},{title:"网站管理",key:"web",icon:"desktop",children:[{title:"网站配置",key:"website_config",link:"/manager/website-config"},{title:"图库",key:"picture",link:"/manager/picture"}]},{title:"系统管理",key:"admin",icon:"setting",children:[{title:"管理员管理",key:"admin_user",link:"/manager/admin-user"},{title:"角色管理",key:"admin_role",link:"/manager/admin-role"},{title:"权限菜单",key:"admin_authority",link:"/manager/admin-authority"},{title:"系统配置",key:"system_config",link:"/manager/system-config"},{title:"系统日志",key:"admin_system_log",link:"/manager/admin-system-log"}]}]},n.rootSubmenuKeys=["home","article_mange","dynamic","user_manger","web","admin"],n.onOpenChange=function(e){var t=e.find((function(e){return-1===n.state.openKeys.indexOf(e)}));-1===n.rootSubmenuKeys.indexOf(t)?n.setState({openKeys:e}):n.setState({openKeys:t?[t]:[]})},n}return p()(t,e),u()(t,[{key:"componentDidMount",value:function(){var e=this;this.eHandler=Object(T.enquireScreen)((function(t){e.state.isMobile!==t&&e.setState({isMobile:t})}))}},{key:"componentWillUnmount",value:function(){Object(T.unenquireScreen)(this.eHandler)}},{key:"render",value:function(){var e=this.state,t=e.aside_list,n=void 0===t?[]:t,a=e.isMobile,r=this.props,i=r.collapsed,o=r.onCollapseChange,l=r.stateMange;return v.a.createElement(E.a.Sider,{breakpoint:"lg",trigger:null,width:a?200:256,collapsible:!0,collapsed:i,onCollapse:function(e,t){o(e)},className:"admin-aside-menu"},v.a.createElement("div",{className:"admin-aside-menu-view"},v.a.createElement("div",{className:"admin-aside-header"},v.a.createElement(b.Link,{className:"admin-logo-view",to:"/manager/index"},v.a.createElement(N.a,{type:"heat-map",className:"login-icon"}),v.a.createElement("span",{className:"logo-text"},l.website&&l.website.website_name))),v.a.createElement("div",{className:"admin-aside-content clearfix"},v.a.createElement(U,{option:{suppressScrollX:!0}},v.a.createElement(R.a,{defaultOpenKeys:["web"],openKeys:this.state.openKeys,onOpenChange:this.onOpenChange,theme:"dark",mode:"inline"},v.a.createElement(R.a.Item,null,v.a.createElement(b.Link,{to:"#"},v.a.createElement(N.a,{type:" "}),v.a.createElement("span",null,"NAVIGATION"))),v.a.createElement(R.a.Item,null,v.a.createElement(b.Link,{to:"/manager/index"},v.a.createElement(N.a,{type:"dashboard"}),v.a.createElement("span",null,"仪表盘"))),n.map((function(e){return e.link&&l.asideList&&~l.asideList.indexOf(e.key)?v.a.createElement(R.a.Item,{key:e.key},v.a.createElement(b.Link,{to:e.link},e.icon?v.a.createElement(N.a,{type:e.icon}):"",v.a.createElement("span",null,e.title))):l.asideList&&~l.asideList.indexOf(e.key)?v.a.createElement(x,{key:e.key,title:v.a.createElement("span",null,v.a.createElement(N.a,{type:e.icon}),v.a.createElement("span",null,e.title))},e.children.map((function(e){if(~l.asideList.indexOf(e.key))return v.a.createElement(R.a.Item,{key:e.key},v.a.createElement(b.Link,{to:e.link},e.icon?v.a.createElement(N.a,{type:e.icon}):"",e.title))}))):void 0})))))))}}]),t}(y.Component)),G=Object(O.connect)((function(e){return{stateMange:e.stateMange}}))(P),F=E.a.Content,D=E.a.Footer,B=(E.a.Sider,function(e){function t(){var e,n;c()(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=d()(this,(e=g()(t)).call.apply(e,[this].concat(r)))).state={isMobile:!1,collapsed:!1},n.onCollapseChange=function(e){n.setState({collapsed:e})},n}return p()(t,e),u()(t,[{key:"componentDidMount",value:function(){var e,t,n=this;this.eHandler=Object(T.enquireScreen)((function(e){n.state.isMobile!==e&&n.setState({isMobile:e})})),this.props.dispatch((e={},t=function(e){console.log("result",e),e.website&&(document.title=e.website.website_name)},function(n){k.a.post("/admin-user/info",e).then((function(e){return t&&t(e),n({type:"SET_CURRENT_USER_INFO",admin_user_info:e.admin_user_info,website:e.website}),n({type:"SET_ASIDE_LIST",all_authority_name_id:e.all_authority_name_id})}))}))}},{key:"componentWillUnmount",value:function(){Object(T.unenquireScreen)(this.eHandler)}},{key:"render",value:function(){var e=this.state,t=e.collapsed,n=e.isMobile,a={collapsed:t,onCollapseChange:this.onCollapseChange},r={collapsed:t,onCollapseChange:this.onCollapseChange};return v.a.createElement(E.a,{className:"admin-manager"},n?v.a.createElement(o.a,{maskClosable:!0,placement:"left",closable:!1,onClose:this.onCollapseChange.bind(this,!t),visible:!t,width:200,style:{padding:0,height:"100vh"}},v.a.createElement(G,Object.assign({},a,{collapsed:!1,onCollapseChange:function(){}}))):v.a.createElement(G,a),v.a.createElement(E.a,{className:"admin-wrapper"},v.a.createElement(j,r),v.a.createElement(F,{className:"admin-content"},this.props.children,v.a.createElement(D,{style:{textAlign:"center"}},v.a.createElement("a",{href:"https://github.com/maoxiaoquan/kite",target:"_blank"},"Kite"),"©2019"))))}}]),t}(y.PureComponent));t.default=Object(O.connect)((function(e){return{stateTitle:e.stateTitle}}))(B)},96:function(e,t,n){e.exports=n(29)(34)},97:function(e,t,n){"use strict";var a=n(131),r=n.n(a),i=(n(466),n(98)),o=r.a.create({baseURL:"/api-admin/v1",headers:{"x-requested-with":"XMLHttpRequest"}});o.interceptors.request.use((function(e){return localStorage.box_tokens&&(e.headers["x-access-token"]=localStorage.box_tokens),e})),o.interceptors.response.use((function(e){var t=e.data;return e.config.direct?t:t.is_login?"error"===t.state?(i.a.message_warning(t.message),Promise.reject(new Error(t.message))):t.data:(i.a.message_warning(t.message),location.replace("#/sign_in"),!1)}),(function(e){return console.warn(e),i.a.message_warning("服务器正忙，请稍后重试!"),Promise.reject(new Error("服务器正忙!"))})),t.a=o},98:function(e,t,n){"use strict";n(469);var a=n(125),r=n.n(a);t.a={message_success:function(e){r.a.success(e)},message_error:function(e){r.a.error(e)},message_warning:function(e){r.a.warning(e)}}}},[[267,6,7]]]);