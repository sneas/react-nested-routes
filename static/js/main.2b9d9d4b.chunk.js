(window["webpackJsonpreact-nested-routes-example"]=window["webpackJsonpreact-nested-routes-example"]||[]).push([[0],{19:function(e,t,n){e.exports=n(31)},24:function(e,t,n){},25:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(15),c=n.n(o),l=(n(24),n(8)),u=n(9),s=n(5),i=(n(25),n(16));function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(n,!0).forEach(function(t){Object(i.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var h=function(e,t){return"".concat(e.replace(/\/$/,""),"/").concat(t.replace(/^\//,""))},f=function e(t){return t.parent?[t.parent].concat(Object(l.a)(e(t.parent))).flat(1/0):[]},v=function(e){var t=e.routes;return a.a.createElement("nav",{className:"menu"},t.map(function(e,t){return a.a.createElement(u.b,{key:t,to:e.path},e.label)}))},b=function(e){var t=e.route;return a.a.createElement(r.Fragment,null,[].concat(Object(l.a)(f(t).reverse()),[t]).filter(function(e){return e.routes}).map(function(e,t){return a.a.createElement(v,{key:t,routes:e.routes})}))},d=function(e){var t=e.route;return a.a.createElement("nav",{className:"breadcrumbs"},[].concat(Object(l.a)(f(t).reverse()),[t]).map(function(e,t,n){return a.a.createElement("div",{key:t,className:"item"},t<n.length-1&&a.a.createElement(u.b,{to:e.path},e.label),t===n.length-1&&e.label)}))},E=function(e){var t=e.route;return a.a.createElement(r.Fragment,null,a.a.createElement(b,{route:t}),t.parent&&a.a.createElement(d,{route:t}),t.content())},g=function(e){var t=e.routes;return a.a.createElement(u.a,{basename:"/react-nested-routes-example"},a.a.createElement(s.c,null,t.reverse().map(function(e,t){return a.a.createElement(s.a,{key:t,path:e.path,render:function(){return a.a.createElement(E,{route:e})}})})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var x=function(e){return function e(t){return t.map(function(t){return[t,t.routes?e(t.routes):[]]}).flat(1/0)}(function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return t.map(function(t){var r=m({},t,{},n&&{parent:n});return m({},r,{},r.routes&&{routes:e(r.routes,r)})})}(function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return t.map(function(t){var r=h(n,t.path);return m({},t,{path:r},t.routes&&{routes:e(t.routes,r)})})}(e)))}([{path:"/",label:"All categories",content:function(){return a.a.createElement("div",null,a.a.createElement("img",{src:"https://via.placeholder.com/640x480?text=All%20categories",alt:"All categories"}))},routes:[{path:"/electronics",label:"Electronics",content:function(){return a.a.createElement("div",null,a.a.createElement("img",{src:"https://via.placeholder.com/640x480?text=Electronics",alt:"Electronics"}))},routes:[{path:"/accessories",label:"Accessories",content:function(){return a.a.createElement("div",null,a.a.createElement("img",{src:"https://via.placeholder.com/640x480?text=Accessories",alt:"Accessories"}))}},{path:"/headphones",label:"Headphones",content:function(){return a.a.createElement("div",null,a.a.createElement("img",{src:"https://via.placeholder.com/640x480?text=Headphones",alt:"Headphones"}))}}]},{path:"/computers",label:"Computers",content:function(){return a.a.createElement("div",null,a.a.createElement("img",{src:"https://via.placeholder.com/640x480?text=Computers",alt:"Computers"}))},routes:[{path:"/laptops",label:"Laptops",content:function(){return a.a.createElement("div",null,a.a.createElement("img",{src:"https://via.placeholder.com/640x480?text=Laptops",alt:"Laptops"}))}},{path:"/tablets",label:"Tablets",content:function(){return a.a.createElement("div",null,a.a.createElement("img",{src:"https://via.placeholder.com/640x480?text=Tablets",alt:"Tablets"}))}}]},{path:"/books",label:"Books",content:function(){return a.a.createElement("div",null,a.a.createElement("img",{src:"https://via.placeholder.com/640x480?text=Books",alt:"Books"}))}}]}]);c.a.render(a.a.createElement(g,{routes:x}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.2b9d9d4b.chunk.js.map