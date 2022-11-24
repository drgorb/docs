(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7550],{25380:e=>{function n(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}n.keys=()=>[],n.resolve=n,n.id=25380,e.exports=n},46793:(e,n,t)=>{"use strict";t.d(n,{Z:()=>o});var s=t(67294),i=t(90814);const o=e=>{let{children:n,funcName:t="main",funcEnd:o="}",snippets:r,leadingSpaces:a=2,...p}=e;const l=n.split(/\r?\n/);let d="";if(r)d=JSON.parse(r).map((e=>Array.isArray(e)?l.slice(e[0],e[1]).map((e=>e.slice(a))).join("\n"):e)).join("\n");else if(t){let e,n;for(let s=0;s<l.length;s++)if(l[s].includes(t)){if(e=s,l[s].includes(" {"))break}else if(l[s].includes(" {")&&void 0!==e){e=s;break}for(let t=l.length-1;t>0;t--)if(l[t].includes(o)){n=t;break}d=l.slice(e+1,n).map((e=>e.slice(a))).join("\n")}return s.createElement(i.Z,p,d)}},89747:(e,n,t)=>{"use strict";t.d(n,{Z:()=>u});var s=t(83117),i=t(67294),o=t(52263),r=t(73945),a=t(28182),p=t(12175),l=t(65488),d=t(85162),c=t(46793);const u=e=>{let{children:n,fileName:t,...u}=e;const h=n,{code:m}=(0,p.transform)(h,{plugins:["transform-typescript"],retainLines:!0}),{siteConfig:{customFields:{prettierConfig:y}}}=(0,o.Z)(),g=(0,r.format)(m,{parser:a.parsers.babel.parse,...y}),f=t?`${t}.ts`:void 0,k=t?`${t}.js`:void 0;return i.createElement(l.Z,{groupId:"ts-js-choice"},i.createElement(d.Z,{value:"ts",label:"Typescript",default:!0},i.createElement(c.Z,(0,s.Z)({},u,{className:"language-ts",title:f}),h)),i.createElement(d.Z,{value:"js",label:"Javascript"},i.createElement(c.Z,(0,s.Z)({},u,{className:"language-js",title:k}),g)))}},1110:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>d});var s=t(83117),i=(t(67294),t(3905)),o=t(89747);const r={id:"session",title:"Setting Up the Communication Session"},a=void 0,p={unversionedId:"develop/dApp/session",id:"develop/dApp/session",title:"Setting Up the Communication Session",description:"The first step in creating your dapp is to set up the communication session.",source:"@site/docs/develop/07_dApp/02_session.md",sourceDirName:"develop/07_dApp",slug:"/develop/dApp/session",permalink:"/docs/develop/dApp/session",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/07_dApp/02_session.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"session",title:"Setting Up the Communication Session"},sidebar:"dApp",previous:{title:"Overview",permalink:"/docs/develop/dApp/welcome"},next:{title:"Well Known DID Configuration",permalink:"/docs/develop/dApp/well-known-did-config"}},l={},d=[{value:"Dapp Indicates Credential API Support",id:"dapp-indicates-credential-api-support",level:2},{value:"Dapp Introduces Itself",id:"dapp-introduces-itself",level:2},{value:"Dapp checks the session values",id:"dapp-checks-the-session-values",level:2}],c={toc:d};function u(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,s.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The first step in creating your dapp is to set up the communication session.\nThe purpose of the session is to pass encrypted messages back and forth between your dapp and the extension."),(0,i.kt)("h2",{id:"dapp-indicates-credential-api-support"},"Dapp Indicates Credential API Support"),(0,i.kt)("p",null,"In order to indicate its support of the extension's API, the dapp creates the ",(0,i.kt)("inlineCode",{parentName:"p"},"window.kilt")," object as soon as possible.\nFor example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<head>\n  <script>\n    window.kilt = {}\n  <\/script>\n</head>\n")),(0,i.kt)("h2",{id:"dapp-introduces-itself"},"Dapp Introduces Itself"),(0,i.kt)("p",null,"The dapp introduces itself to the extension with its name, encryption key URI, and a challenge.\nA copy of the challenge should be stored on the server side.\nFor example:"),(0,i.kt)(o.Z,{mdxType:"TsJsSnippet"},"/* eslint-disable @typescript-eslint/no-unused-vars */\nimport * as Kilt from '@kiltprotocol/sdk-js'\n\n// eslint-disable-next-line @typescript-eslint/no-explicit-any\nlet window: {\n  kilt: {\n    sporran: {\n      startSession: (\n        dAppName: string,\n        dAppEncryptionKeyUri: Kilt.DidResourceUri,\n        challenge: string\n      ) => Promise<void>\n    }\n  }\n}\n\nexport async function main() {\n  const api = Kilt.ConfigService.get('api')\n\n  const did = 'did:kilt:4smcAoiTiCLaNrGhrAM4wZvt5cMKEGm8f3Cu9aFrpsh5EiNV'\n  const dAppName = 'Your dApp Name'\n\n  const encodedFullDid = await api.call.did.query(Kilt.Did.toChain(did))\n  const { document } = Kilt.Did.linkedInfoFromChain(encodedFullDid)\n  // If there is no DID, or the DID does not have any key agreement key, return\n  if (!document.keyAgreement || !document.keyAgreement[0]) {\n    return\n  }\n  const dAppEncryptionKeyUri =\n    `${document.uri}${document.keyAgreement[0].id}` as Kilt.DidResourceUri\n\n  // Generate and store challenge on the server side for the next step.\n  const response = await fetch('/challenge')\n  const challenge = await response.text()\n\n  const session = await window.kilt.sporran.startSession(\n    dAppName,\n    dAppEncryptionKeyUri,\n    challenge\n  )\n}\n"),(0,i.kt)("p",null,"At this point the extension has received the introduction of the dapp and returned a new session along with the encrypted challenge."),(0,i.kt)("h2",{id:"dapp-checks-the-session-values"},"Dapp checks the session values"),(0,i.kt)("p",null,"The extension has provided the session along with an encrypted challenge.\nThe dapp decrypts the challenge and verifies that it matches the original challenge.\nThis should happen on the server side:"),(0,i.kt)(o.Z,{mdxType:"TsJsSnippet"},"import { u8aToHex } from '@polkadot/util'\n\nimport * as Kilt from '@kiltprotocol/sdk-js'\n\nlet session: {\n  encryptionKeyUri: Kilt.DidResourceUri\n  encryptedChallenge: string\n  nonce: string\n}\nlet keyAgreementKey: Kilt.DidEncryptionKey\nlet originalChallenge: `0x{string}`\n\nexport async function main() {\n  const { encryptionKeyUri, encryptedChallenge, nonce } = session\n  const encryptionKey = await Kilt.Did.resolveKey(encryptionKeyUri)\n  if (!encryptionKey) {\n    return\n  }\n\n  const decryptedBytes = Kilt.Utils.Crypto.decryptAsymmetric(\n    { box: encryptedChallenge, nonce },\n    encryptionKey.publicKey,\n    keyAgreementKey.publicKey // derived from your seed phrase\n  )\n  // If it fails to decrypt, return.\n  if (!decryptedBytes) {\n    return\n  }\n\n  const decryptedChallenge = u8aToHex(decryptedBytes)\n\n  // Compare the decrypted challenge to the challenge you stored earlier.\n  if (decryptedChallenge === originalChallenge) {\n    return session\n  }\n}\n"),(0,i.kt)("p",null,"That's it! The communication session has been securely established and you're ready to start sending and receiving messages."))}u.isMDXComponent=!0}}]);