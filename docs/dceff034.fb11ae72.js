(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{134:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return i}));var a=n(3),r=n(7),o=(n(0),n(151)),c={id:"ktor",title:"Ktor Matchers",slug:"ktor-matchers.html",sidebar_label:"Ktor"},s={unversionedId:"assertions/ktor",id:"assertions/ktor",isDocsHomePage:!1,title:"Ktor Matchers",description:"Matchers for Ktor are provided by the kotest-assertions-ktor module.",source:"@site/docs/assertions/ktor.md",slug:"/assertions/ktor-matchers.html",permalink:"/docs/assertions/ktor-matchers.html",editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/assertions/ktor.md",version:"current",sidebar_label:"Ktor",sidebar:"assertions",previous:{title:"Json Matchers",permalink:"/docs/assertions/json-matchers.html"},next:{title:"Android Matchers",permalink:"/docs/assertions/android-matchers.html"}},b=[{value:"Test Application Response",id:"test-application-response",children:[]},{value:"HttpResponse",id:"httpresponse",children:[]}],l={rightToc:b};function i(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Matchers for ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://ktor.io/"}),"Ktor")," are provided by the ",Object(o.b)("inlineCode",{parentName:"p"},"kotest-assertions-ktor")," module."),Object(o.b)("h3",{id:"test-application-response"},"Test Application Response"),Object(o.b)("p",null,"The following matchers are used when testing via the ktor server testkit."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Matcher"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"shouldHaveStatus(HttpStatusCode)")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Tests that the response had the given http status code")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"shouldHaveContent(content)")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Tests that the response has the given body")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"shouldHaveContentType(ContentType)")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Tests that the response has the given Content Type")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"shouldHaveHeader(name, value)")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Tests that the response included the given name=value header")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"shouldHaveCookie(name, value)")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Tests that the response included the given cookie")))),Object(o.b)("h3",{id:"httpresponse"},"HttpResponse"),Object(o.b)("p",null,"The following matchers can be used against responses from the ktor http client."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Matcher"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"shouldHaveStatus(HttpStatusCode)")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Tests that the response had the given http status code")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"shouldHaveContentType(ContentType)")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Tests that the response has the given Content Type")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"shouldHaveHeader(name, value)")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Tests that the response included the given name=value header")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"shouldHaveVersion(HttpProtocolVersion)")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Tests that the response used the given protocol version")))))}i.isMDXComponent=!0},151:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),i=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=i(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),p=i(n),u=a,m=p["".concat(c,".").concat(u)]||p[u]||d[u]||o;return n?r.a.createElement(m,s(s({ref:t},l),{},{components:n})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=u;var s={};for(var b in t)hasOwnProperty.call(t,b)&&(s[b]=t[b]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var l=2;l<o;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);