(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{16:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var a=c(9),s=c.n(a),n=c(4),i=(c(14),c(15),c(16),c(2)),b=c(0),j=c(6),r=c.n(j),l=c(1),d=function(e){var t=e.tabs,c=Object(i.i)().tabId,a=t.find((function(e){return e.id===c}));return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"tabs is-boxed",children:Object(l.jsx)("ul",{children:t.map((function(e){return Object(l.jsx)("li",{className:r()({"is-active":e.id===c}),"data-cy":"Tab",children:Object(l.jsx)(n.b,{to:"/tabs/".concat(e.id),"data-cy":"TabLink",children:e.title})},e.id)}))})}),Object(l.jsx)("div",{className:"block","data-cy":"TabContent",children:a?a.content:"Please select a tab"})]})},o=function(e){var t=e.to,c=e.text;return Object(l.jsx)(n.c,{className:function(e){var t=e.isActive;return r()("navbar-item",{"has-background-grey-lighter":t})},to:t,children:c})},x=Object(b.memo)((function(){return Object(l.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"Nav",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"navbar-brand",children:[Object(l.jsx)(o,{to:"/",text:"Home"}),Object(l.jsx)(o,{to:"tabs",text:"Tabs"})]})})})})),h=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],O=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(x,{}),Object(l.jsx)("div",{className:"section",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)(i.e,{children:[Object(l.jsx)(i.c,{path:"/",element:Object(l.jsx)("h1",{className:"title",children:"Home page"})}),Object(l.jsx)(i.c,{path:"home",element:Object(l.jsx)(i.a,{to:"/",replace:!0})}),Object(l.jsxs)(i.c,{path:"/tabs",element:Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{className:"title",children:"Tabs page"}),Object(l.jsx)(i.b,{})]}),children:[Object(l.jsx)(i.c,{index:!0,element:Object(l.jsx)(d,{tabs:h})}),Object(l.jsx)(i.c,{path:":tabId",element:Object(l.jsx)(d,{tabs:h})})]}),Object(l.jsx)(i.c,{path:"*",element:Object(l.jsx)("h1",{className:"title",children:"Page not found"})})]})})})]})};s.a.render(Object(l.jsx)(n.a,{children:Object(l.jsx)(O,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.05e843f1.chunk.js.map