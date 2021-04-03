(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{135:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),s=(n(0),n(151)),i={id:"test_containers",title:"Test Containers",sidebar_label:"Test Containers",slug:"test_containers.html"},a={unversionedId:"extensions/test_containers",id:"extensions/test_containers",isDocsHomePage:!1,title:"Test Containers",description:"Test Containers",source:"@site/docs/extensions/test_containers.md",slug:"/extensions/test_containers.html",permalink:"/docs/extensions/test_containers.html",editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/extensions/test_containers.md",version:"current",sidebar_label:"Test Containers",sidebar:"extensions",previous:{title:"System Extensions",permalink:"/docs/extensions/system_extensions.html"},next:{title:"Embedded Kafka Extension",permalink:"/docs/extensions/embedded-kafka.html"}},c=[{value:"Test Containers",id:"test-containers",children:[]}],l={rightToc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"test-containers"},"Test Containers"),Object(s.b)("p",null,Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/testcontainers/testcontainers-java"}),"testcontainers-java")," library that provide lightweight, throwaway instances of common databases, Selenium web browsers, or anything else that can run in a Docker container."),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"kotest-extensions-testcontainers")," provides integration for using testcontainers-java with kotest."),Object(s.b)("p",null,"To use ",Object(s.b)("inlineCode",{parentName:"p"},"kotest-extensions-testcontainers"),", add the below dependency to your Gradle build file."),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-groovy"}),'testImplementation("io.kotest:kotest-extensions-testcontainers:${kotest.version}")\n')),Object(s.b)("p",null,"For Maven, you will need these dependencies:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),"            <dependency>\n                <groupId>io.kotest</groupId>\n                <artifactId>kotest-extensions-testcontainers</artifactId>\n                <version>${kotest.version}</version>\n                <scope>test</scope>\n            </dependency>\n            <dependency>\n                <groupId>io.kotest</groupId>\n                <artifactId>kotest-extensions-testcontainers-jvm</artifactId>\n                <version>${kotest.version}</version>\n                <scope>test</scope>\n            </dependency>\n")),Object(s.b)("p",null,"Having these dependencies in test classpath will bring extension methods into scope which let you convert any ",Object(s.b)("inlineCode",{parentName:"p"},"Startable")," such as a ",Object(s.b)("inlineCode",{parentName:"p"},"DockerContainer")," into a kotest ",Object(s.b)("inlineCode",{parentName:"p"},"TestListener"),", which you can register with Kotest and then Kotest will manage lifecycle of container for you."),Object(s.b)("p",null,"For example:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-kotlin"}),'import io.kotest.core.spec.style.FunSpec\nimport io.kotest.extensions.testcontainers.perTest\nimport org.testcontainers.containers.GenericContainer\n\nclass DatabaseRepositoryTest : FunSpec({\n   val redisContainer = GenericContainer<Nothing>("redis:5.0.3-alpine")\n   listener(redisContainer.perTest()) //converts container to listener and registering it with Kotest.\n\n   test("some test which assume to have redis container running") {\n      //\n   }\n})\n')),Object(s.b)("p",null,"In above example, the ",Object(s.b)("inlineCode",{parentName:"p"},"perTest()")," extension method converts the container into a ",Object(s.b)("inlineCode",{parentName:"p"},"TestListener"),", which starts the\nredis container before each test and stops it after test. Similarly if you want to reuse the container for all tests\nin a single spec class you can use ",Object(s.b)("inlineCode",{parentName:"p"},"perSpec()")," extension method, which converts the container into a ",Object(s.b)("inlineCode",{parentName:"p"},"TestListener"),"\nwhich starts the container before running any test in the spec, and stops it after all tests, thus a single container is\nused by all tests in spec class."))}p.isMDXComponent=!0},151:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||s;return n?o.a.createElement(m,a(a({ref:t},l),{},{components:n})):o.a.createElement(m,a({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var l=2;l<s;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);