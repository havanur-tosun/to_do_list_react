(this.webpackJsonpto_do_list_react=this.webpackJsonpto_do_list_react||[]).push([[0],{13:function(t,e,o){},14:function(t,e,o){"use strict";o.r(e);var n=o(1),c=o.n(n),r=o(6),i=o.n(r),d=o(5),l=o(7),u=o(0);function a(t){var e=t.todo,o=t.toggleTodo;return Object(u.jsx)("div",{children:Object(u.jsxs)("label",{children:[Object(u.jsx)("input",{type:"checkbox",checked:e.complete,onChange:function(){o(e.id)}}),e.name]})})}function s(t){var e=t.todos,o=t.toggleTodo;return e.map((function(t){return Object(u.jsx)(a,{toggleTodo:o,todo:t},t.id)}))}var j=o(16),f=(o(13),"todoApp.todos");var b=function(){var t=Object(n.useState)([]),e=Object(l.a)(t,2),o=e[0],c=e[1],r=Object(n.useRef)();return Object(n.useEffect)((function(){var t=JSON.parse(localStorage.getItem(f));t&&c(t)}),[]),Object(n.useEffect)((function(){localStorage.setItem(f,JSON.stringify(o))}),[o]),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(s,{todos:o,toggleTodo:function(t){var e=Object(d.a)(o),n=e.find((function(e){return e.id===t}));n.complete=!n.complete,c(e)}}),Object(u.jsx)("input",{ref:r,type:"text",id:"inputField"}),Object(u.jsx)("button",{onClick:function(t){var e=r.current.value;""!==e&&(c((function(t){return[].concat(Object(d.a)(t),[{id:Object(j.a)(),name:e,complete:!1}])})),r.current.value=null)},id:"addToDo",children:"Add Todo"}),Object(u.jsx)("button",{onClick:function(){var t=o.filter((function(t){return!t.complete}));c(t)},id:"clear",children:"Clear Complete"}),Object(u.jsxs)("div",{children:[o.filter((function(t){return!t.complete})).length," left to do"]})]})};i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(b,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.cd5bd725.chunk.js.map