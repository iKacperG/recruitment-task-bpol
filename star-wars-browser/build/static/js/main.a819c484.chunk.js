(this["webpackJsonpstar-wars-browser"]=this["webpackJsonpstar-wars-browser"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),c=n.n(a),s=n(8),i=n.n(s),o=n(2),u=Object(a.createContext)({currentPage:1}),l=function(e){var t=e.children,n=Object(a.useState)(1),c=Object(o.a)(n,2),s=c[0],i=c[1];return Object(r.jsx)(u.Provider,{value:{currentPage:s,setCurrentPage:i},children:t})},j=function(e){var t=e.logoImage;return Object(r.jsx)("div",{children:Object(r.jsx)("img",{src:t,alt:"star wars browser logo",className:"logo__image"})})},b=Object(a.createContext)({peopleData:[]}),p=n(3),d=n.n(p),f=n(4),x=function(){var e=Object(f.a)(d.a.mark((function e(t,n,r){var a,c,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],console.log("Getting data"),e.next=4,fetch("https://swapi.dev/api/people/?search=".concat(t));case 4:return c=e.sent,e.next=7,c.json();case 7:s=e.sent,a.push(s.results);case 9:if(null==s.next){e.next=20;break}return console.log("getting next page",s.next),e.next=13,fetch(s.next);case 13:return c=e.sent,e.next=16,c.json();case 16:s=e.sent,a.push(s.results),e.next=9;break;case 20:a.push(s.results),n(a);case 22:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),O=function(){var e=Object(a.useContext)(u),t=(e.currentPage,e.setCurrentPage),n=Object(a.useContext)(b),c=(n.peopleData,n.setPeopleData),s=Object(a.useState)(""),i=Object(o.a)(s,2),l=i[0],j=i[1];return Object(r.jsx)("div",{className:"search__container",children:Object(r.jsxs)("form",{className:"search__form",onSubmit:function(e){e.preventDefault(),t(1),x(l,c)},children:[Object(r.jsx)("input",{className:"search__input",value:l,onChange:function(e){j(e.target.value)},placeholder:"search for your fav movie"}),Object(r.jsx)("button",{className:"search__button"})]})})},h=n.p+"static/media/star-wars-logo.ce8dfaa2.png",m=function(){return Object(r.jsxs)("div",{className:"navbar__container",children:[Object(r.jsx)(O,{}),Object(r.jsx)(j,{logoImage:h})]})},v=function(){var e=Object(f.a)(d.a.mark((function e(t,n){var r,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t.homeworld);case 2:return r=e.sent,e.next=5,r.json();case 5:a=e.sent,n(a);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),g=n(9),_=function(){var e=Object(f.a)(d.a.mark((function e(t,n,r){var a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.next=5,a.json();case 5:c=e.sent,r((function(e){return[].concat(Object(g.a)(e),[c])}));case 7:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),P=function(e,t,n){var r=0;return!0===t?e.split(" ").map((function(e){if((r+=e.length)<n)return e})).join(" ")+"(...)":e},C=function(e){var t=e.filmProperty,n=e.shrinkable,a=e.maxCharacters,c=e.label;return Object(r.jsxs)("li",{className:"film-details__list-element",children:[Object(r.jsx)("div",{className:"film-details__label",children:c}),Object(r.jsx)("div",{className:"film-details__content",children:P(t,n,a)})]})},N=function(e,t,n){if(!0===t)return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("ul",{className:"film-details__list",children:[Object(r.jsx)("div",{className:"ui__container",children:Object(r.jsxs)("span",{className:"character-attended__span",children:[e," attended in"]})}),null===n||void 0===n?void 0:n.map((function(e){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(C,{filmProperty:e.title,label:"Title"}),Object(r.jsx)(C,{filmProperty:e.release_date,label:"Release date"}),Object(r.jsx)(C,{filmProperty:e.opening_crawl,shrinkable:!0,maxCharacters:130,label:"Opening crawl"})]})}))]}),Object(r.jsx)("div",{className:"modal__mask",onClick:function(){}})]})},w=function(e){var t=e.personProperty;return Object(r.jsx)("li",{className:"person-info__element",children:t})},k=function(e){var t=e.person,n=Object(a.useContext)(u),c=n.currentPage,s=(n.setCurrentPage,Object(a.useContext)(b)),i=s.peopleData,l=(s.setPeopleData,Object(a.useState)("")),j=Object(o.a)(l,2),p=j[0],d=j[1],f=Object(a.useState)([]),x=Object(o.a)(f,2),O=x[0],h=x[1],m=Object(a.useState)(!1),g=Object(o.a)(m,2),P=g[0],C=g[1];return Object(a.useEffect)((function(){v(t,d)}),[i,c]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("ul",{className:"person-info__container",onClick:function(){C(!1),h([]),t.films.forEach((function(e){_(e,O,h)})),C(!0),N(P,O)},children:[Object(r.jsx)(w,{personProperty:t.name}),Object(r.jsx)(w,{personProperty:p.name}),Object(r.jsx)(w,{personProperty:p.population})]}),N(t.name,P,O)]})},y=function(e){var t=e.number,n=e.setCurrentPage;return Object(r.jsx)("li",{className:"page-changing__button",id:t,onClick:function(e){n(Number(e.target.id))},children:t},t)},D=function(e,t,n){for(var a=n[e-1],c=[],s=1;s<Math.ceil((null===n||void 0===n?void 0:n.length)/1);s++)c.push(s);return{currentCharactersPage:a,renderPageNumbers:c.map((function(e){if(1!==c.length)return Object(r.jsx)(y,{number:e,setCurrentPage:t})}))}},S=function(){var e,t=Object(a.useContext)(u),n=t.currentPage,c=t.setCurrentPage,s=Object(a.useContext)(b),i=s.peopleData,o=(s.setPeopleData,D(n,c,i));return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{children:null===(e=o.currentCharactersPage)||void 0===e?void 0:e.map((function(e){return Object(r.jsx)(k,{person:e})}))}),Object(r.jsx)("div",{className:"page-changing__container",children:o.renderPageNumbers})]})},F=function(){return Object(r.jsx)("div",{})},E=function(){return Object(r.jsxs)("div",{className:"home__container",children:[Object(r.jsxs)(l,{children:[Object(r.jsx)(m,{}),Object(r.jsx)(S,{})]}),Object(r.jsx)(F,{})]})},I=function(e){var t=e.children,n=Object(a.useState)([[]]),c=Object(o.a)(n,2),s=c[0],i=c[1];return Object(r.jsx)(b.Provider,{value:{peopleData:s,setPeopleData:i},children:t})};n(16);var J=function(){return Object(r.jsx)(I,{children:Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(E,{})})})};i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(J,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.a819c484.chunk.js.map