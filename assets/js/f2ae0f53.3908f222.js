(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1765],{25380:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=25380,e.exports=t},51909:function(e,t,n){"use strict";var i=n(83117),o=n(67294),a=n(52263),r=n(73945),s=n(28182),l=n(12175),c=n(65488),d=n(85162),p=n(90814);t.Z=e=>{let{children:t,fileName:n,...u}=e;const f=t,{code:m}=(0,l.transform)(f,{plugins:["transform-typescript"],retainLines:!0}),{siteConfig:{customFields:{prettierConfig:k}}}=(0,a.Z)(),h=(0,r.format)(m,{parser:s.parsers.babel.parse,...k}),g=n?`${n}.ts`:void 0,v=n?`${n}.js`:void 0;return o.createElement(c.Z,{groupId:"ts-js-choice"},o.createElement(d.Z,{value:"ts",label:"Typescript",default:!0},o.createElement(p.Z,(0,i.Z)({},u,{className:"language-ts",title:g}),f)),o.createElement(d.Z,{value:"js",label:"Javascript"},o.createElement(p.Z,(0,i.Z)({},u,{className:"language-js",title:v}),h)))}},55972:function(e,t,n){"use strict";n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return d}});var i=n(83117),o=(n(67294),n(3905)),a=n(51909);const r={id:"presentation-creation",title:"Present a Credential"},s=void 0,l={unversionedId:"develop/sdk/cookbook/claiming/presentation-creation",id:"develop/sdk/cookbook/claiming/presentation-creation",title:"Present a Credential",description:"With a valid credential, Claimers can now go to Verifiers to request some service upon providing proof of validity of a certain credential.",source:"@site/docs/develop/01_sdk/02_cookbook/04_claiming/04_presentation_creation.md",sourceDirName:"develop/01_sdk/02_cookbook/04_claiming",slug:"/develop/sdk/cookbook/claiming/presentation-creation",permalink:"/docs/develop/sdk/cookbook/claiming/presentation-creation",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/01_sdk/02_cookbook/04_claiming/04_presentation_creation.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"presentation-creation",title:"Present a Credential"},sidebar:"sdk",previous:{title:"Attest a Claim (Issue a Credential)",permalink:"/docs/develop/sdk/cookbook/claiming/attestation-creation"},next:{title:"Verify a Credential or a Presentation",permalink:"/docs/develop/sdk/cookbook/claiming/presentation-verification"}},c={},d=[],p={toc:d};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"With a valid credential, Claimers can now go to Verifiers to request some service upon providing proof of validity of a certain credential.\nThe process of presenting one or more credentials to a Verifier is called ",(0,o.kt)("inlineCode",{parentName:"p"},"Presentation"),"."),(0,o.kt)("p",null,"This step, similar to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/develop/sdk/cookbook/claiming/attestation-request"},"attestation request"),", requires that a communication channel exist between the Claimer and the Verifier so that information about the presentation can be shared.\nTo verify the revocation status of the presented credential(s), a Verifier must be able to interact with a KILT full node."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"KILT supports selective disclosure of claims when creating presentations.\nThis means that given a credential, it is possible for the Claimer to reveal only a subset of its claims, depending on the requirements set by the Verifier.\nCheck the snippet below to see how that is done using the KILT SDK.")),(0,o.kt)("p",null,"The Claimer can generate a presentation starting from a credential, optionally specifying the fields to reveal and a presentation challenge, which is useful to prove freshness of the generated presentation."),(0,o.kt)(a.Z,{mdxType:"TsJsBlock"},"import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function createPresentation(\n  credential: Kilt.ICredential,\n  signCallback: Kilt.SignCallback,\n  selectedAttributes: string[] | undefined = undefined,\n  challenge: string | undefined = undefined\n): Promise<Kilt.ICredentialPresentation> {\n  // Create a presentation with only the specified fields revealed, if specified.\n  return Kilt.Credential.createPresentation({\n    credential,\n    signCallback,\n    selectedAttributes,\n    challenge\n  })\n}\n"))}u.isMDXComponent=!0}}]);