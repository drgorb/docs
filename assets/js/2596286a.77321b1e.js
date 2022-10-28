(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4537],{25380:function(e){function n(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}n.keys=function(){return[]},n.resolve=n,n.id=25380,e.exports=n},46793:function(e,n,t){"use strict";var i=t(67294),a=t(90814);n.Z=e=>{let{children:n,funcName:t="main",funcEnd:o="}",snippets:l,leadingSpaces:s=2,...r}=e;const d=n.split(/\r?\n/);let c="";if(l)c=JSON.parse(l).map((e=>Array.isArray(e)?d.slice(e[0],e[1]).map((e=>e.slice(s))).join("\n"):e)).join("\n");else if(t){let e,n;for(let i=0;i<d.length;i++)if(d[i].includes(t)){if(e=i,d[i].includes(" {"))break}else if(d[i].includes(" {")&&void 0!==e){e=i;break}for(let t=d.length-1;t>0;t--)if(d[t].includes(o)){n=t;break}c=d.slice(e+1,n).map((e=>e.slice(s))).join("\n")}return i.createElement(a.Z,r,c)}},89747:function(e,n,t){"use strict";var i=t(83117),a=t(67294),o=t(52263),l=t(73945),s=t(28182),r=t(12175),d=t(65488),c=t(85162),p=t(46793);n.Z=e=>{let{children:n,fileName:t,...u}=e;const m=n,{code:g}=(0,r.transform)(m,{plugins:["transform-typescript"],retainLines:!0}),{siteConfig:{customFields:{prettierConfig:f}}}=(0,o.Z)(),k=(0,l.format)(g,{parser:s.parsers.babel.parse,...f}),h=t?`${t}.ts`:void 0,y=t?`${t}.js`:void 0;return a.createElement(d.Z,{groupId:"ts-js-choice"},a.createElement(c.Z,{value:"ts",label:"Typescript",default:!0},a.createElement(p.Z,(0,i.Z)({},u,{className:"language-ts",title:h}),m)),a.createElement(c.Z,{value:"js",label:"Javascript"},a.createElement(p.Z,(0,i.Z)({},u,{className:"language-js",title:y}),k)))}},6001:function(e,n,t){"use strict";t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return r},toc:function(){return c}});var i=t(83117),a=(t(67294),t(3905)),o=t(89747);const l={id:"well-known-did-config",title:"Well Known DID Configuration"},s=void 0,r={unversionedId:"develop/dApp/well-known-did-config",id:"develop/dApp/well-known-did-config",title:"Well Known DID Configuration",description:"The Well Known DID Configuration is implemented as a security measure when setting up the communication session between the dapp and extension.",source:"@site/docs/develop/07_dApp/03_well-known-did-config.md",sourceDirName:"develop/07_dApp",slug:"/develop/dApp/well-known-did-config",permalink:"/docs/develop/dApp/well-known-did-config",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/07_dApp/03_well-known-did-config.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"well-known-did-config",title:"Well Known DID Configuration"},sidebar:"dApp",previous:{title:"Setting Up the Communication Session",permalink:"/docs/develop/dApp/session"},next:{title:"Overview",permalink:"/docs/develop/dApp/verifier/welcome"}},d={},c=[{value:"Dapp Steps",id:"dapp-steps",level:2},{value:"Attesting the Domain Linkage Credential",id:"attesting-the-domain-linkage-credential",level:3},{value:"Making the claim",id:"making-the-claim",level:4},{value:"Adding the signature",id:"adding-the-signature",level:4},{value:"Self-attesting the credential",id:"self-attesting-the-credential",level:4},{value:"Formatting the Domain Linkage Credential",id:"formatting-the-domain-linkage-credential",level:3}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Well Known DID Configuration is implemented as a security measure when setting up the communication session between the dapp and extension."),(0,a.kt)("p",null,"The implementation is based on the ",(0,a.kt)("a",{parentName:"p",href:"https://identity.foundation/.well-known/resources/did-configuration/"},"Well Known DID Configuration")," specified by the Decentralized Identity Foundation:"),(0,a.kt)("h2",{id:"dapp-steps"},"Dapp Steps"),(0,a.kt)("p",null,"Add the following URI to your dapp's root.\nThe extension will make an HTTP GET request to this URI, and your dapp will respond with the domain configuration resource."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"/.well-known/did-configuration.json")),(0,a.kt)("h3",{id:"attesting-the-domain-linkage-credential"},"Attesting the Domain Linkage Credential"),(0,a.kt)("p",null,"Upon receiving the GET request from the extension, your dapp will generate a self-issued credential containing its domain origin and DID.\nThis credential is referred to as a Domain Linkage Credential."),(0,a.kt)("h4",{id:"making-the-claim"},"Making the claim"),(0,a.kt)("p",null,"Your dapp's credential is based on the domain linkage CType, which can be created from the existing CType schema:"),(0,a.kt)(o.Z,{mdxType:"TsJsSnippet"},"/* eslint-disable @typescript-eslint/no-unused-vars */\nimport * as Kilt from '@kiltprotocol/sdk-js'\n\nexport function main() {\n  const domainLinkageCType: Kilt.ICType = {\n    $id: 'kilt:ctype:0x9d271c790775ee831352291f01c5d04c7979713a5896dcf5e81708184cc5c643',\n    $schema: 'http://kilt-protocol.org/draft-01/ctype#',\n    title: 'Domain Linkage Credential',\n    properties: {\n      id: {\n        type: 'string'\n      },\n      origin: {\n        type: 'string'\n      }\n    },\n    type: 'object'\n  }\n}\n"),(0,a.kt)("p",null,"The credential is built from the CType, claim contents, and your dapp's unique DID:"),(0,a.kt)(o.Z,{mdxType:"TsJsSnippet"},"/* eslint-disable @typescript-eslint/no-unused-vars */\nimport * as Kilt from '@kiltprotocol/sdk-js'\n\nlet domainLinkageCtype: Kilt.ICType\n\nexport function main() {\n  const did = 'did:kilt:4smcAoiTiCLaNrGhrAM4wZvt5cMKEGm8f3Cu9aFrpsh5EiNV'\n\n  const claimContents: Kilt.IClaimContents = {\n    id: did,\n    origin: 'https://example-dApp.com'\n  }\n\n  const claim = Kilt.Claim.fromCTypeAndClaimContents(\n    domainLinkageCtype,\n    claimContents,\n    did\n  )\n}\n"),(0,a.kt)("h4",{id:"adding-the-signature"},"Adding the signature"),(0,a.kt)("p",null,"Your dapp creates a presentation based on the credential and signs it with its assertion key."),(0,a.kt)(o.Z,{mdxType:"TsJsSnippet"},"/* eslint-disable @typescript-eslint/no-unused-vars */\nimport { blake2AsU8a, encodeAddress } from '@polkadot/util-crypto'\nimport { Keyring } from '@polkadot/api'\n\nimport * as Kilt from '@kiltprotocol/sdk-js'\n\nlet claim: Kilt.IClaim\nlet did: Kilt.DidDocument\nlet keyring: Keyring\n\nexport async function main() {\n  const credential = Kilt.Credential.fromClaim(claim)\n\n  const attestationKey = did.assertionMethod?.[0]\n  if (!attestationKey) {\n    return\n  }\n\n  // Create a callback that uses the DID attestation key to sign the credential.\n  const signCallback: Kilt.SignCallback = async ({ data }) => {\n    const { publicKey, type } = attestationKey\n    const address = encodeAddress(\n      type === 'ecdsa' ? blake2AsU8a(publicKey) : publicKey,\n      Kilt.Utils.ss58Format\n    )\n    const keypair = keyring.getPair(address) as Kilt.KiltKeyringPair\n    return {\n      signature: keypair.sign(data),\n      keyType: keypair.type,\n      keyUri: `${did.uri}${attestationKey.id}`\n    }\n  }\n\n  const selfSignedPresentation = await Kilt.Credential.createPresentation({\n    credential,\n    signCallback\n  })\n}\n"),(0,a.kt)("h4",{id:"self-attesting-the-credential"},"Self-attesting the credential"),(0,a.kt)("p",null,"Finally, your dapp self-attests the credential."),(0,a.kt)(o.Z,{mdxType:"TsJsSnippet"},"import type { ApiPromise } from '@polkadot/api'\n\nimport * as Kilt from '@kiltprotocol/sdk-js'\n\nlet api: ApiPromise\nlet selfSignedCredential: Kilt.ICredential\nlet did: Kilt.DidUri\nlet dappAccount: Kilt.KiltKeyringPair\n\nexport async function main() {\n  const { cTypeHash, claimHash } = Kilt.Attestation.fromCredentialAndDid(\n    selfSignedCredential,\n    did\n  )\n  const submitTx = api.tx.attestation.add(cTypeHash, claimHash, null)\n  await Kilt.Blockchain.signAndSubmitTx(submitTx, dappAccount)\n}\n"),(0,a.kt)("h3",{id:"formatting-the-domain-linkage-credential"},"Formatting the Domain Linkage Credential"),(0,a.kt)("p",null,"The Well Known DID Configuration specificaton requires a specific format (JSON-LD) for the domain linkage credential.\nHere's how you can present your credential to the extension in the expected format."),(0,a.kt)(o.Z,{mdxType:"TsJsSnippet"},"import type { ApiPromise } from '@polkadot/api'\n\nimport * as Kilt from '@kiltprotocol/sdk-js'\n\nlet api: ApiPromise\nlet domainLinkageCredential: Kilt.ICredentialPresentation\n\nexport async function main() {\n  const credentialSubject = {\n    ...domainLinkageCredential.claim.contents,\n    rootHash: domainLinkageCredential.rootHash\n  }\n\n  const encodedAttestationDetails = await api.query.attestation.attestations(\n    domainLinkageCredential.rootHash\n  )\n  const issuer = Kilt.Attestation.fromChain(\n    encodedAttestationDetails,\n    domainLinkageCredential.claim.cTypeHash\n  ).owner\n\n  const issuanceDate = new Date().toISOString()\n  const expirationDate = new Date(\n    Date.now() + 1000 * 60 * 60 * 24 * 365 * 5\n  ).toISOString() // 5 years, for example\n\n  const claimerSignature = domainLinkageCredential.claimerSignature\n  if (!claimerSignature) {\n    return\n  }\n\n  const proof = {\n    type: 'KILTSelfSigned2020',\n    proofPurpose: 'assertionMethod',\n    verificationMethod: claimerSignature.keyUri,\n    signature: claimerSignature.signature,\n    challenge: claimerSignature.challenge\n  }\n\n  return {\n    '@context': [\n      'https://www.w3.org/2018/credentials/v1',\n      'https://identity.foundation/.well-known/did-configuration/v1'\n    ],\n    issuer,\n    issuanceDate,\n    expirationDate,\n    type: [\n      'VerifiableCredential',\n      'DomainLinkageCredential',\n      'KiltCredential2020'\n    ],\n    credentialSubject,\n    proof\n  }\n}\n"))}u.isMDXComponent=!0}}]);