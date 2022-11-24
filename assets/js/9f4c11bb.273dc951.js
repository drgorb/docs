"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6734],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,c=e.mdxType,s=e.originalType,i=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=p(n),f=c,y=u["".concat(i,".").concat(f)]||u[f]||l[f]||s;return n?r.createElement(y,o(o({ref:t},d),{},{components:n})):r.createElement(y,o({ref:t},d))}));function f(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var s=n.length,o=new Array(s);o[0]=u;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:c,o[1]=a;for(var p=2;p<s;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4734:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var r=n(83117),c=(n(67294),n(3905));const s={id:"nested-ctypes",title:"Nested CTypes"},o=void 0,a={unversionedId:"concepts/advanced_concepts/nested-ctypes",id:"concepts/advanced_concepts/nested-ctypes",title:"Nested CTypes",description:"A Nested CType is a hierarchical composite schema that includes other CTypes as substructures by referencing them.",source:"@site/docs/concepts/07_advanced_concepts/02_nested_ctypes.md",sourceDirName:"concepts/07_advanced_concepts",slug:"/concepts/advanced_concepts/nested-ctypes",permalink:"/docs/concepts/advanced_concepts/nested-ctypes",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/concepts/07_advanced_concepts/02_nested_ctypes.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"nested-ctypes",title:"Nested CTypes"},sidebar:"concepts",previous:{title:"Terms and Quotes",permalink:"/docs/concepts/advanced_concepts/terms-and-quotes"}},i={},p=[{value:"Referencing",id:"referencing",level:2}],d={toc:p};function l(e){let{components:t,...n}=e;return(0,c.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"A Nested CType is a hierarchical composite schema that includes other CTypes as substructures by referencing them.\nFor example, a company could use a Nested CType that includes the required credentials, qualifications, health and safety certificates, etc. of its current employees.\nWhen verifying a Nested CType, the sub-CTypes need to be available."),(0,c.kt)("h2",{id:"referencing"},"Referencing"),(0,c.kt)("p",null,"JSON-schema provides a referencing keyword ",(0,c.kt)("inlineCode",{parentName:"p"},"$ref")," that can be used as a pointer from other JSON schemas.\nThis allows CTypes to either reference fields in other CTypes or nest entire CTypes within one another, providing flexibility for several different use cases.\nA claim from a Nested CType requires the given CType, a list of comprised schemas, the claim content and the address of the owner."),(0,c.kt)("p",null,"This facility requires all JSON objects to build the schema and allows the reuse of previous schemas, reducing the need for copy-and-paste."))}l.isMDXComponent=!0}}]);