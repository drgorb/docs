"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9604],{3905:function(e,t,i){i.d(t,{Zo:function(){return h},kt:function(){return f}});var r=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},h=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=c(i),f=n,u=p["".concat(l,".").concat(f)]||p[f]||d[f]||a;return i?r.createElement(u,o(o({ref:t},h),{},{components:i})):r.createElement(u,o({ref:t},h))}));function f(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,o=new Array(a);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<a;c++)o[c]=i[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}p.displayName="MDXCreateElement"},21488:function(e,t,i){i.r(t),i.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return c}});var r=i(83117),n=(i(67294),i(3905));const a={id:"verification",title:"Verification"},o=void 0,s={unversionedId:"concepts/credentials/verification",id:"concepts/credentials/verification",title:"Verification",description:"KILT allows a Verifier to check if the information in a credential presented by a Claimer is correct and valid.",source:"@site/docs/concepts/04_credentials/05_verification.md",sourceDirName:"concepts/04_credentials",slug:"/concepts/credentials/verification",permalink:"/docs/concepts/credentials/verification",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/concepts/04_credentials/05_verification.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"verification",title:"Verification"},sidebar:"concepts",previous:{title:"Attestations",permalink:"/docs/concepts/credentials/attestation"},next:{title:"Distributed Trust",permalink:"/docs/concepts/distributed_trust"}},l={},c=[{value:"Requesting a Credential from a Claimer",id:"requesting-a-credential-from-a-claimer",level:2},{value:"Presenting a Credential with Selective Disclosure",id:"presenting-a-credential-with-selective-disclosure",level:2},{value:"Verifying a Presentation",id:"verifying-a-presentation",level:2},{value:"Verifying the Owner of the Presented Credential",id:"verifying-the-owner-of-the-presented-credential",level:3},{value:"Verifying the Content of the Presented Credential",id:"verifying-the-content-of-the-presented-credential",level:3}],h={toc:c};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"KILT allows a Verifier to check if the information in a credential presented by a Claimer is correct and valid.\nWith the presentation of the credential, the Claimer also presents evidence that a third party (i.e., an Attester) ensured the correctness of the Claimer\u2019s attributes."),(0,n.kt)("p",null,"The Verifier trusts this third party either because they trust their reputation directly or they trust a delegation structure that this Verifier is part of (e.g., a State department issuing driving licenses)."),(0,n.kt)("p",null,"For the verification process:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The Claimer needs their credential and the private key associated with their identifier"),(0,n.kt)("li",{parentName:"ul"},"The Verifier needs the identifier of the trusted Attester")),(0,n.kt)("p",null,"During the verification process the Claimer wants to prove three things to the Verifier:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The credential is valid (i.e., not revoked by its Attester)"),(0,n.kt)("li",{parentName:"ul"},"The attributes in the credential actually refer to the Claimer "),(0,n.kt)("li",{parentName:"ul"},"The credential contains information that is relevant for the Verifier in this use case")),(0,n.kt)("h2",{id:"requesting-a-credential-from-a-claimer"},"Requesting a Credential from a Claimer"),(0,n.kt)("p",null,"The Verifier may request a credential from a Claimer, providing the following data:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"CTypes"),": which CTypes the Verifier can work with for the use case. They can provide multiple options, which have to be regarded as alternatives."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"TrustedAttesters"),": which Attesters are considered trusted for each specified CType."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"RequiredProperties"),': which properties for each specified CType must at least be revealed for the presentation to be considered sufficient. More on "selective disclosure" later.'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Challenge"),": a nonce, which the Verifier can make use of to ensure that the presentation generated by the Claimer is fresh and is not being replayed by some other older interactions. More on that later.")),(0,n.kt)("h2",{id:"presenting-a-credential-with-selective-disclosure"},"Presenting a Credential with Selective Disclosure"),(0,n.kt)("p",null,"Given the ",(0,n.kt)("inlineCode",{parentName:"p"},"RequiredProperties")," specified by the Verifier, the Claimer can decide how much of the information they wish to reveal before they generate the presentation and send it to the Verifier.\nIf supported by the Verifier, they can choose to hide attributes and thus only disclose a subset of the original claim data."),(0,n.kt)("p",null,"For example, if verifying a driving license only requires the verification of the driver's name and picture, a Claimer can decide to hide additional information such as age and place of residence.\nThis increases the privacy of the Claimer since they only need to show attributes that are required in the specific context."),(0,n.kt)("p",null,"For a detailed developer-oriented guide to KILT presentation creation, see our ",(0,n.kt)("a",{parentName:"p",href:"/docs/develop/sdk/cookbook/claiming/presentation-creation"},"Presentation Cookbook section"),"."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"The presentations can still be correlated, since the hash of the credential always stays the same, even when creating new presentations and selecting different attributes to show.")),(0,n.kt)("h2",{id:"verifying-a-presentation"},"Verifying a Presentation"),(0,n.kt)("p",null,"The Verifier receives the presentation from the Claimer, re-calculates the root hash of the credential from which the presentation was generated, and queries the KILT blockchain to obtain the associated attestation information, including the revocation status of the credential."),(0,n.kt)("p",null,"If the Claimer tampered with the credential, the re-calculated root hash will not match any attestation on the chain.\nOn the other hand, if an attestation with the calculated hash can be found on the chain and has not been revoked, the credential is valid."),(0,n.kt)("p",null,"However, this does not give the Verifier the guarantee that the Claimer is the rightful/legitimate owner of the credential presented.\nThat problem is addressed in the next section."),(0,n.kt)("h3",{id:"verifying-the-owner-of-the-presented-credential"},"Verifying the Owner of the Presented Credential"),(0,n.kt)("p",null,"When issued, a credential is linked to the KILT Decentralized Identifier (DID) of the original Claimer.\nThe DID can be resolved to the public key of the Claimer according to the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/KILTprotocol/spec-kilt-did"},"KILT DID specification"),"."),(0,n.kt)("p",null,"The Verifier assumes that the private key for the DID public key is only known to the owner of the credential, and is not shared across users.\nTherefore, when requesting the Claimer to generate a presentation, the Verifier challenges the Claimer to sign a nonce (a random number that is used once) that the Verifier sends together with their request."),(0,n.kt)("p",null,"If the Claimer can sign both the nonce and the presentation with the private key that only the credential's owner should have knowledge of, the Verifier can be sure that the Claimer is indeed the legitimate owner of the credential."),(0,n.kt)("h3",{id:"verifying-the-content-of-the-presented-credential"},"Verifying the Content of the Presented Credential"),(0,n.kt)("p",null,"After the Verifier has checked that the credential is valid and belongs to the presenting Claimer, they still need to verify that they have received all the required information as the presentation received could contain the right values, but not the right semantics.\nFor example, the ",(0,n.kt)("em",{parentName:"p"},"age")," property could have different meanings depending on whether it is defined for a passport CType or a Whisky Certificate CType.\nTherefore, the Verifier has to check if the CType matches one of the requested CTypes, and that the properties disclosed in the presentation include at least all of the properties requested for that CType presentation."),(0,n.kt)("p",null,"For a detailed developer-oriented guide to KILT credential verification, see our ",(0,n.kt)("a",{parentName:"p",href:"/docs/develop/sdk/cookbook/claiming/presentation-verification"},"Verification Cookbook section"),"."))}d.isMDXComponent=!0}}]);