"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9430],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(34334);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(83117),r=n(67294),o=n(34334),i=n(72389),l=n(67392),s=n(7094),c=n(12466);const p="tabList__CuJ",u="tabItem_LNqP";function d(e){var t;const{lazy:n,block:i,defaultValue:d,values:h,groupId:m,className:f}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=h??k.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,l.l)(b,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===d?d:d??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==v&&!b.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,s.U)(),[N,x]=(0,r.useState)(v),T=[],{blockElementScrollPositionUntilNextRender:S}=(0,c.o5)();if(null!=m){const e=y[m];null!=e&&e!==N&&b.some((t=>t.value===e))&&x(e)}const I=e=>{const t=e.currentTarget,n=T.indexOf(t),a=b[n].value;a!==N&&(S(t),x(a),null!=m&&w(m,String(a)))},E=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]??T[T.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},f)},b.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>T.push(e),onKeyDown:E,onFocus:I,onClick:I},i,{className:(0,o.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":N===t})}),n??t)}))),n?(0,r.cloneElement)(k.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function h(e){const t=(0,i.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},4621:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var a=n(83117),r=(n(67294),n(3905)),o=n(65488),i=n(85162);const l={id:"fullnode-setup",title:"Set Up a KILT Full Node"},s=void 0,c={unversionedId:"develop/chain/fullnode-setup",id:"develop/chain/fullnode-setup",title:"Set Up a KILT Full Node",description:"We will guide you through the process of setting up and connecting to a KILT full node.",source:"@site/docs/develop/02_chain/04_fullnode.md",sourceDirName:"develop/02_chain",slug:"/develop/chain/fullnode-setup",permalink:"/docs/develop/chain/fullnode-setup",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/02_chain/04_fullnode.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"fullnode-setup",title:"Set Up a KILT Full Node"},sidebar:"chain",previous:{title:"Deployments and Services",permalink:"/docs/develop/chain/deployments"}},p={},u=[{value:"Setup",id:"setup",level:2},{value:"WASM Runtime Execution",id:"wasm-runtime-execution",level:3},{value:"Specify the Right Chainspec",id:"specify-the-right-chainspec",level:3},{value:"Specify the Blockchain Storage Path",id:"specify-the-blockchain-storage-path",level:3},{value:"Join the Network",id:"join-the-network",level:2},{value:"Build the Full Node",id:"build-the-full-node",level:3},{value:"Run an Archive Node",id:"run-an-archive-node",level:3},{value:"Run an Archive Node",id:"run-an-archive-node-1",level:3},{value:"Sync the Blockchain State",id:"sync-the-blockchain-state",level:2}],d={toc:u};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We will guide you through the process of setting up and connecting to a KILT full node.\nIn contrast ",(0,r.kt)("a",{parentName:"p",href:"/docs/participate/staking/become_a_collator/setup-node"},"to a collator"),", full nodes do not author blocks.\nThey act as a backend for websites and help to verify new blocks or validate extrinsics (e.g., coin transfers and other transactions) directly on the network without relying on a centralized infrastructure provider."),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,"There are currently two different runtimes (i.e., two different parachain environments) that a KILT full node can be part of:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Spiritnet"),": the official public network, which contains only stable and thoroughly-tested features"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Peregrine"),": the public test network whose runtime is as close to that of Spiritnet as possible. It can be used to test applications that use KILT before connecting them to the production Spiritnet chain, which requires tokens that have real monetary value")),(0,r.kt)("p",null,"Each runtime has its own benchmark measurements."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The remainder of this guide will focus on the official ",(0,r.kt)("strong",{parentName:"p"},"Spiritnet"),".\nNevertheless, we recommend trying out the setup on our Peregrine testnet first.\nHence, at each step where it is applicable, we indicate what differs between the Peregrine and Spiritnet configuration for the full node to join either network.")),(0,r.kt)("h3",{id:"wasm-runtime-execution"},"WASM Runtime Execution"),(0,r.kt)("p",null,"A KILT full node should use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--execution=wasm")," parameter for both the Relay Chain and parachain collation.\nThe alternative to WASM runtime execution is native runtime execution, which might be faster but can, in some cases, deviate from the WASM execution logic and result in a different state.\nWhen this happens, the full node will crash and will stop synchronizing with the network.\nSince the WASM runtime logic is part of the blockchain state itself and hence represents the single source of truth, all nodes should execute the WASM version of the runtime logic."),(0,r.kt)("h3",{id:"specify-the-right-chainspec"},"Specify the Right Chainspec"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain")," parameter indicates which blockchain the KILT full node will join.\nThis parameter must be specified for both the parachain ",(0,r.kt)("strong",{parentName:"p"},"and")," the Relay Chain, since both chains are, as a matter of fact, separate blockchains.\nThe KILT parachain accepts an additional parameter to select the environment to use for the WASM runtime execution.\nThis can either be ",(0,r.kt)("inlineCode",{parentName:"p"},"peregrine")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"spiritnet"),"."),(0,r.kt)("p",null,"Hence, to start a full node for the Spiritnet network, the parameter would be ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain=spiritnet"),".\nUnfortunately, there is no hardcoded chain spec for the Peregrine network, so the full path of the chainspec file must be provided ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain=/node/dev-specs/kilt-parachain/peregrine-kilt.json"),".\nPlease refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KILTprotocol/kilt-node/blob/develop/dev-specs/kilt-parachain/peregrine-kilt.json"},"KILT node repository")," or the ",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/kiltprotocol/kilt-node/tags"},"Docker image")," for more information."),(0,r.kt)("h3",{id:"specify-the-blockchain-storage-path"},"Specify the Blockchain Storage Path"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"--base-path")," parameter specifies where all the persistent files must be stored.\nBy default, the session keys will also be stored in the ",(0,r.kt)("em",{parentName:"p"},"base path"),", but we recommend separating them from the other files.\nThis makes sure that the keyfiles are not accidentally lost or published when the blockchain database is either backed up or restored.\nYou can configure where to store the session keys using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--keystore-path")," option.\nSince the collator will collate only for the parachain, there is no need to add this to the Relay Chain part of the command."),(0,r.kt)("h2",{id:"join-the-network"},"Join the Network"),(0,r.kt)(o.Z,{groupId:"exec-strategy",defaultValue:"Binary",values:[{label:"Binary",value:"Binary"},{label:"Docker",value:"Docker"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Binary",mdxType:"TabItem"},(0,r.kt)("h3",{id:"build-the-full-node"},"Build the Full Node"),(0,r.kt)("p",null,"In order to build the KILT full node executable, you need to have a ",(0,r.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/tools/install"},"nightly version of Rust")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"wasm32-unknown-unknown")," target for this toolchain installed.\nWe recommend aligning your nightly version with the one used in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KILTprotocol/kilt-node"},"KILT node repository")," by executing the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KILTprotocol/kilt-node/blob/develop/scripts/init.sh"},"init script"),".\nAfter cloning the repository, you can build the executable by running the ",(0,r.kt)("inlineCode",{parentName:"p"},"build")," command below from the root directory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Clone the repository\ngit clone https://github.com/KILTprotocol/kilt-node.git\n# Check out master branch\ngit checkout master\n# Set up the build environment by installing the Rust compiler.\n./scripts/init.sh\n# Build the executable from source enabling all the optimizations with --release.\ncargo build --release -p kilt-parachain\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You must not use the default ",(0,r.kt)("inlineCode",{parentName:"p"},"develop")," branch to build the executable.\nInstead, the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KILTprotocol/kilt-node/releases"},"latest release")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"master")," should be used.")),(0,r.kt)("p",null,"The compiled executable can be found in ",(0,r.kt)("inlineCode",{parentName:"p"},"./target/release/kilt-parachain")," after the build process completes successfully."),(0,r.kt)("h3",{id:"run-an-archive-node"},"Run an Archive Node"),(0,r.kt)("p",null,"To run an Archive full node, add the option ",(0,r.kt)("inlineCode",{parentName:"p"},"--pruning archive")," to the command."),(0,r.kt)(o.Z,{groupId:"runtime",defaultValue:"Spiritnet",values:[{label:"Spiritnet",value:"Spiritnet"},{label:"Peregrine",value:"Peregrine"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Spiritnet",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'./target/release/kilt-parachain \\\n  --chain=spiritnet \\\n  --runtime=spiritnet \\\n  --rpc-port=9933 \\\n  --rpc-cors=all \\\n  --rpc-external \\\n  --ws-external \\\n  --name="name of full node" \\\n  --execution=wasm \\\n  --pruning archive \\\n  --state-cache-size=1 \\\n  -- \\\n  --chain=kusama \\\n  --execution=wasm\n'))),(0,r.kt)(i.Z,{value:"Peregrine",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'./target/release/kilt-parachain \\\n  --chain=/node/dev-specs/kilt-parachain/peregrine-kilt.json \\\n  --runtime=peregrine \\\n  --rpc-port=9933 \\\n  --rpc-cors=all \\\n  --rpc-external \\\n  --ws-external \\\n  --name="name of full node" \\\n  --execution=wasm \\\n  --pruning archive \\\n  --state-cache-size=1 \\\n  -- \\\n  --chain=/node/dev-specs/kilt-parachain/peregrine-relay.json \\\n  --execution=wasm\n'))))),(0,r.kt)(i.Z,{value:"Docker",mdxType:"TabItem"},(0,r.kt)("h3",{id:"run-an-archive-node-1"},"Run an Archive Node"),(0,r.kt)("p",null,"The full node can also be started as a Docker container.\nTo expose the WebSockets ensure that the ",(0,r.kt)("inlineCode",{parentName:"p"},"--rpc-external")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"--ws-external")," flags are set."),(0,r.kt)("p",null,"To run an Archive full node add the option ",(0,r.kt)("inlineCode",{parentName:"p"},"--pruning archive")," to the command."),(0,r.kt)("p",null,"First, you can fetch the latest pre-built image:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull kiltprotocol/kilt-node:latest\n")),(0,r.kt)("p",null,"Once you have the image, you can spin up the container.\nMake sure to choose whether you want to start a full node for Peregrine or Spiritnet by selecting the correct runtime and chain."),(0,r.kt)(o.Z,{groupId:"runtime",defaultValue:"Spiritnet",values:[{label:"Spiritnet",value:"Spiritnet"},{label:"Peregrine",value:"Peregrine"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Spiritnet",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'docker run -v kilt-node-data:/data kiltprotocol/kilt-node:latest \\\n  --base-path=/data/para \\\n  --chain=spiritnet \\\n  --runtime=spiritnet \\\n  --rpc-port=9933 \\\n  --rpc-cors=all \\\n  --rpc-external \\\n  --ws-external \\\n  --name="name of full node" \\\n  --execution=wasm \\\n  --pruning archive \\\n  --state-cache-size=1 \\\n  -- \\\n  --base-path=/data/relay \\\n  --chain=kusama \\\n  --execution=wasm\n'))),(0,r.kt)(i.Z,{value:"Peregrine",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'docker run -v kilt-node-data:/data kiltprotocol/kilt-node:latest \\\n  --base-path=/data/para \\\n  --chain=/node/dev-specs/kilt-parachain/peregrine-kilt.json \\\n  --runtime=peregrine \\\n  --rpc-port=9933 \\\n  --rpc-cors=all \\\n  --rpc-external \\\n  --ws-external \\\n  --name="name of full node" \\\n  --execution=wasm \\\n  --pruning archive \\\n  --state-cache-size=1 \\\n  -- \\\n  --base-path=/data/relay \\\n  --chain=/node/dev-specs/kilt-parachain/peregrine-relay.json \\\n  --execution=wasm\n')))))),(0,r.kt)("h2",{id:"sync-the-blockchain-state"},"Sync the Blockchain State"),(0,r.kt)("p",null,"Once started, the full node needs to fully sync up with both the parachain and the Relay Chain states.\nDepending on the size of both blockchain states and the node hardware specs, it may take from a number of hours to a few days for the node to fully synchronize.\nMore details can be found in the ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/maintain-guides-how-to-validate-kusama#synchronize-chain-data"},"Polkadot network documentation"),"."),(0,r.kt)("admonition",{title:"Example of node sync",type:"note"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-Example",metastring:"of node sync",of:!0,node:!0,sync:!0},"2021-06-17 02:34:34 \ud83d\udd0d Discovered new external address for our node: /ip4/100.102.231.64/tcp/30333/ws/p2p/12D3KooWLE7ivpuXJQpFVP4fuuutAqEsk8nrNEpuR3tddqnXgLPB\n2021-06-17 02:34:36 \u2699\ufe0f  Syncing 409.2 bps, target=#8062689 (5 peers), best: #3477 (0x63ad\u2026e046), finalized #3072 (0x0e4c\u2026f587), \u2b07 153.2kiB/s \u2b06 12.9kiB/s\n2021-06-17 02:34:37 \ud83d\udd0d Discovered new external address for our node: /ip4/100.111.175.0/tcp/30333/ws/p2p/12D3KooWLE7ivpuXJQpFVP4fuuutAqEsk8nrNEpuR3tddqnXgLPB\n2021-06-17 02:34:38 \ud83d\udd0d Discovered new external address for our node: /ip4/100.100.176.0/tcp/30333/ws/p2p/12D3KooWLE7ivpuXJQpFVP4fuuutAqEsk8nrNEpuR3tddqnXgLPB\n2021-06-17 02:34:41 \u2699\ufe0f  Syncing 386.2 bps, target=#8062690 (7 peers), best: #5409 (0x1d76\u20268c3d), finalized #5121 (0x8ad1\u2026b6dc), \u2b07 96.1kiB/s \u2b06 10.9kiB/s\n2021-06-17 02:34:46 \u2699\ufe0f  Syncing 394.8 bps, target=#8062691 (11 peers), best: #7383 (0x0689\u20266f1e), finalized #7168 (0x72a9\u20268d8c), \u2b07 352.9kiB/s \u2b06 5.1kiB/s\n2021-06-17 02:34:51 \u2699\ufe0f  Syncing 347.0 bps, target=#8062692 (12 peers), best: #9118 (0x66fc\u2026cce3), finalized #8704 (0x14c9\u2026705e), \u2b07 62.7kiB/s \u2b06 1.7kiB/s\n"))))}h.isMDXComponent=!0}}]);