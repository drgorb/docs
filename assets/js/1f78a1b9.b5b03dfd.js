(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7311],{25380:function(t){function e(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}e.keys=function(){return[]},e.resolve=e,e.id=25380,t.exports=e},51909:function(t,e,o){"use strict";var i=o(83117),n=o(67294),a=o(52263),r=o(73945),s=o(28182),l=o(12175),c=o(65488),d=o(85162),m=o(90814);e.Z=t=>{let{children:e,fileName:o,...u}=t;const k=e,{code:p}=(0,l.transform)(k,{plugins:["transform-typescript"],retainLines:!0}),{siteConfig:{customFields:{prettierConfig:h}}}=(0,a.Z)(),v=(0,r.format)(p,{parser:s.parsers.babel.parse,...h}),f=o?`${o}.ts`:void 0,b=o?`${o}.js`:void 0;return n.createElement(c.Z,{groupId:"ts-js-choice"},n.createElement(d.Z,{value:"ts",label:"Typescript",default:!0},n.createElement(m.Z,(0,i.Z)({},u,{className:"language-ts",title:f}),k)),n.createElement(d.Z,{value:"js",label:"Javascript"},n.createElement(m.Z,(0,i.Z)({},u,{className:"language-js",title:b}),v)))}},951:function(t,e,o){"use strict";o.r(e),o.d(e,{assets:function(){return c},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return d}});var i=o(83117),n=(o(67294),o(3905)),a=o(51909);const r={id:"attestation-removal",title:"Revoke a Credential"},s=void 0,l={unversionedId:"develop/sdk/cookbook/claiming/attestation-removal",id:"develop/sdk/cookbook/claiming/attestation-removal",title:"Revoke a Credential",description:"If the conditions that make a credential valid cease to exist, an Attester can revoke and optionally remove their attestation from the KILT blockchain.",source:"@site/docs/develop/01_sdk/02_cookbook/04_claiming/06_credential_revocation.md",sourceDirName:"develop/01_sdk/02_cookbook/04_claiming",slug:"/develop/sdk/cookbook/claiming/attestation-removal",permalink:"/docs/develop/sdk/cookbook/claiming/attestation-removal",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/01_sdk/02_cookbook/04_claiming/06_credential_revocation.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"attestation-removal",title:"Revoke a Credential"},sidebar:"sdk",previous:{title:"Verify a Credential or a Presentation",permalink:"/docs/develop/sdk/cookbook/claiming/presentation-verification"},next:{title:"Protect Against Replay Attacks",permalink:"/docs/develop/sdk/cookbook/messaging/replay_protection"}},c={},d=[{value:"Claim Back an Attestation Deposit",id:"claim-back-an-attestation-deposit",level:2}],m={toc:d};function u(t){let{components:e,...o}=t;return(0,n.kt)("wrapper",(0,i.Z)({},m,o,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"If the conditions that make a credential valid cease to exist, an Attester can revoke and optionally remove their attestation from the KILT blockchain.\nThis does not automatically delete the credential from the Claimer's wallet, of course, but it makes it impossible for the Claimer to use the credential in the future."),(0,n.kt)("p",null,"Since the attestation creation reserved some KILT tokens from the submitter's balance, removing an attestation would return those funds into the payer's pockets."),(0,n.kt)(a.Z,{mdxType:"TsJsBlock"},"import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function revokeCredential(\n  attester: Kilt.DidUri,\n  submitterAccount: Kilt.KiltKeyringPair,\n  signCallback: Kilt.SignExtrinsicCallback,\n  credential: Kilt.ICredential,\n  shouldRemove = false\n): Promise<void> {\n  const api = Kilt.ConfigService.get('api')\n\n  const tx = shouldRemove\n    ? // If the attestation is to be removed, create a `remove` tx,\n      // which revokes and removes the attestation in one go.\n      api.tx.attestation.remove(credential.rootHash, null)\n    : // Otherwise, simply revoke the attestation but leave it on chain.\n      // Hence, the storage is not cleared and the deposit not returned.\n      api.tx.attestation.revoke(credential.rootHash, null)\n\n  const authorizedTx = await Kilt.Did.authorizeTx(\n    attester,\n    tx,\n    signCallback,\n    submitterAccount.address\n  )\n\n  // Submit the right tx to the KILT blockchain.\n  await Kilt.Blockchain.signAndSubmitTx(authorizedTx, submitterAccount)\n}\n"),(0,n.kt)("h2",{id:"claim-back-an-attestation-deposit"},"Claim Back an Attestation Deposit"),(0,n.kt)("p",null,"Claiming back the deposit of an attestation is semantically equivalent to revoking and removing the attestation, with the difference that the extrinsic to claim the deposit can only be called by the deposit owner and does not require the Attester's signature:"),(0,n.kt)(a.Z,{mdxType:"TsJsBlock"},"import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function reclaimAttestationDeposit(\n  depositPayer: Kilt.KiltKeyringPair,\n  credential: Kilt.ICredential\n): Promise<void> {\n  const api = Kilt.ConfigService.get('api')\n\n  // Generate the tx to claim the deposit back.\n  const depositReclaimTx = api.tx.attestation.reclaimDeposit(\n    credential.rootHash\n  )\n\n  // Submit the revocation tx to the KILT blockchain.\n  await Kilt.Blockchain.signAndSubmitTx(depositReclaimTx, depositPayer)\n}\n"))}u.isMDXComponent=!0}}]);