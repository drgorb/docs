(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7894],{25380:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=25380,e.exports=t},51909:(e,t,i)=>{"use strict";i.d(t,{Z:()=>h});var n=i(83117),o=i(67294),a=i(52263),r=i(73945),s=i(28182),l=i(12175),c=i(65488),d=i(85162),p=i(90814);const h=e=>{let{children:t,fileName:i,...h}=e;const m=t,{code:f}=(0,l.transform)(m,{plugins:["transform-typescript"],retainLines:!0}),{siteConfig:{customFields:{prettierConfig:k}}}=(0,a.Z)(),v=(0,r.format)(f,{parser:s.parsers.babel.parse,...k}),u=i?`${i}.ts`:void 0,g=i?`${i}.js`:void 0;return o.createElement(c.Z,{groupId:"ts-js-choice"},o.createElement(d.Z,{value:"ts",label:"Typescript",default:!0},o.createElement(p.Z,(0,n.Z)({},h,{className:"language-ts",title:u}),m)),o.createElement(d.Z,{value:"js",label:"Javascript"},o.createElement(p.Z,(0,n.Z)({},h,{className:"language-js",title:g}),v)))}},94273:(e,t,i)=>{"use strict";i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=i(83117),o=(i(67294),i(3905)),a=i(51909);const r={id:"presentation-verification",title:"Verify a Credential or a Presentation"},s=void 0,l={unversionedId:"develop/sdk/cookbook/claiming/presentation-verification",id:"develop/sdk/cookbook/claiming/presentation-verification",title:"Verify a Credential or a Presentation",description:"Whether a presentation involves selective disclosure or a whole credential is not technically relevant to Verifiers.",source:"@site/docs/develop/01_sdk/02_cookbook/04_claiming/05_presentation_verification.md",sourceDirName:"develop/01_sdk/02_cookbook/04_claiming",slug:"/develop/sdk/cookbook/claiming/presentation-verification",permalink:"/docs/develop/sdk/cookbook/claiming/presentation-verification",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/01_sdk/02_cookbook/04_claiming/05_presentation_verification.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"presentation-verification",title:"Verify a Credential or a Presentation"},sidebar:"sdk",previous:{title:"Present a Credential",permalink:"/docs/develop/sdk/cookbook/claiming/presentation-creation"},next:{title:"Revoke a Credential",permalink:"/docs/develop/sdk/cookbook/claiming/attestation-removal"}},c={},d=[],p={toc:d};function h(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Whether a presentation involves selective disclosure or a whole credential is not technically relevant to Verifiers.\nThis is because in KILT a presentation ",(0,o.kt)("strong",{parentName:"p"},"is")," a credential.\nThis means that the logic for Verifiers does not change depending on the case, thus verifying a presentation is as easy as calling one SDK function, like the following code snippet:"),(0,o.kt)(a.Z,{mdxType:"TsJsBlock"},"import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function verifyPresentation(\n  presentation: Kilt.ICredentialPresentation,\n  challenge: string | undefined = undefined\n): Promise<void> {\n  // Verify the presentation with the provided challenge.\n  await Kilt.Credential.verifyPresentation(presentation, { challenge })\n}\n"),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Verifying a presentation provides proof that all the information is correct and authentic, and that the credential has not been revoked.\nVerifiers still need to match the subject of the credential to the entity that is presenting it.\nOne way of achieving this is by asking the Claimer to include a challenge in the presentation signature, as shown in the snippet above.\nWithout a challenge, Verifiers must implement other measures to be certain about the identity of the presenter.")))}h.isMDXComponent=!0}}]);