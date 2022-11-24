"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9197],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(34334);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(83117),a=n(67294),o=n(34334),l=n(72389),i=n(67392),s=n(7094),p=n(12466);const c="tabList__CuJ",u="tabItem_LNqP";function d(e){var t;const{lazy:n,block:l,defaultValue:d,values:m,groupId:k,className:h}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=m??v.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),b=(0,i.l)(f,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===d?d:d??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==y&&!f.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:w}=(0,s.U)(),[T,j]=(0,a.useState)(y),N=[],{blockElementScrollPositionUntilNextRender:I}=(0,p.o5)();if(null!=k){const e=g[k];null!=e&&e!==T&&f.some((t=>t.value===e))&&j(e)}const O=e=>{const t=e.currentTarget,n=N.indexOf(t),r=f[n].value;r!==T&&(I(t),j(r),null!=k&&w(k,String(r)))},x=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;n=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;n=N[t]??N[N.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},h)},f.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>N.push(e),onKeyDown:x,onFocus:O,onClick:O},l,{className:(0,o.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":T===t})}),n??t)}))),n?(0,a.cloneElement)(v.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function m(e){const t=(0,l.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},71058:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var r=n(83117),a=(n(67294),n(3905)),o=n(65488),l=n(85162);const i={id:"setup",title:"\ud83c\udf92 Setup"},s=void 0,p={unversionedId:"develop/workshop/setup",id:"develop/workshop/setup",title:"\ud83c\udf92 Setup",description:"Node.js",source:"@site/docs/develop/03_workshop/02_setup.md",sourceDirName:"develop/03_workshop",slug:"/develop/workshop/setup",permalink:"/docs/develop/workshop/setup",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/03_workshop/02_setup.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"setup",title:"\ud83c\udf92 Setup"},sidebar:"workshop",previous:{title:"\ud83d\udc4b\ud83c\udffb Welcome",permalink:"/docs/develop/workshop/welcome"},next:{title:"\ud83d\udc53 Overview",permalink:"/docs/develop/workshop/overview"}},c={},u=[{value:"Node.js",id:"nodejs",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Project Folder",id:"project-folder",level:2},{value:"PILT Tokens",id:"pilt-tokens",level:2},{value:"Blockchain Connection",id:"blockchain-connection",level:2}],d={toc:u};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"nodejs"},"Node.js"),(0,a.kt)("p",null,"You need to have ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/"},"Node.js")," installed.\nAny stable (LTS >= 14.0) version is sufficient."),(0,a.kt)("h2",{id:"dependencies"},"Dependencies"),(0,a.kt)("p",null,"Navigate into your newly created folder ",(0,a.kt)("inlineCode",{parentName:"p"},"kilt-rocks"),", initialize the project and install dependencies.",(0,a.kt)("br",null)),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/KILTprotocol/sdk-js#readme"},"KILT SDK-JS")," - for KILT functionality"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/motdotla/dotenv#readme"},"dotenv")," - to help us load variables from ",(0,a.kt)("inlineCode",{parentName:"li"},".env")),(0,a.kt)("li",{parentName:"ul"},"(Only in case you are using Typescript and not Javascript) ",(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/ts-node"},"ts-node")," and ",(0,a.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/"},"Typescript")," - to execute our TS code")),(0,a.kt)(o.Z,{groupId:"ts-js-choice",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"ts",label:"Typescript",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"  Install the needed packages:"),(0,a.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm init -y\nnpm install @kiltprotocol/sdk-js dotenv ts-node typescript\n"))),(0,a.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn init -y\nyarn add @kiltprotocol/sdk-js dotenv ts-node typescript\n"))))),(0,a.kt)(l.Z,{value:"js",label:"Javascript",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"  Install the needed packages:"),(0,a.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm init -y\nnpm install @kiltprotocol/sdk-js dotenv\n"))),(0,a.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn init -y\nyarn add @kiltprotocol/sdk-js dotenv\n")))))),(0,a.kt)("h2",{id:"project-folder"},"Project Folder"),(0,a.kt)("p",null,"The project structure looks like the following:"),(0,a.kt)(o.Z,{groupId:"ts-js-choice",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"ts",label:"Typescript",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u2514\u2500 kilt-rocks/ # project\n    \u251c\u2500 attester/ # all attester code\n    \u251c\u2500 claimer/ # all claimer code\n    \u251c\u2500 verify.ts # all verifier code\n    \u251c\u2500 .env # environment variables\n    \u251c\u2500 package.json # the project file\n    \u2514\u2500 yarn.lock # dependency lock file\n"))),(0,a.kt)(l.Z,{value:"js",label:"Javascript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u2514\u2500 kilt-rocks/ # project\n    \u251c\u2500 attester/ # all attester code\n    \u251c\u2500 claimer/ # all claimer code\n    \u251c\u2500 verify.js # all verifier code\n    \u251c\u2500 .env # environment variables\n    \u251c\u2500 package.json # the project file\n    \u2514\u2500 yarn.lock # dependency lock file\n")))),(0,a.kt)("p",null,"You can set up the directories now or later when we need them."),(0,a.kt)("h2",{id:"pilt-tokens"},"PILT Tokens"),(0,a.kt)("p",null,"In this workshop, you will interact with the Peregrine blockchain.\nYou are required to pay for each transaction with PILT coins.\nBut worry not!\nPILT coins don't have any value and can be requested from the ",(0,a.kt)("a",{parentName:"p",href:"https://faucet.peregrine.kilt.io"},"faucet"),"."),(0,a.kt)("h2",{id:"blockchain-connection"},"Blockchain Connection"),(0,a.kt)("p",null,"Before you call any SDK functionality, you need to initialize the crypto libraries and configure the SDK.\nFor this workshop, we'll be using ",(0,a.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fperegrine.kilt.io%2Fparachain-public-ws%2F#/explorer"},"Peregrine Testnet"),".\nThis is done by calling ",(0,a.kt)("inlineCode",{parentName:"p"},"await Kilt.connect(address)")," where ",(0,a.kt)("inlineCode",{parentName:"p"},"address")," is the address of the full node you want to connect to.\nFor this workshop, use ",(0,a.kt)("inlineCode",{parentName:"p"},"wss://peregrine.kilt.io/parachain-public-ws"),".\nAdd the address to your ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-env",metastring:'title=".env"',title:'".env"'},"WSS_ADDRESS=wss://peregrine.kilt.io/parachain-public-ws\n")),(0,a.kt)("p",null,"That's it for the basic setup - We're good to go!"))}m.isMDXComponent=!0}}]);