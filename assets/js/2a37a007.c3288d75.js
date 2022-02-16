"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[933],{6793:function(e,n,t){var i=t(102),r=t(7294),a=t(1736),o=["children","snippets"];n.Z=function(e){var n=e.children,t=e.snippets,s=(0,i.Z)(e,o),l=n.split(/\r?\n/),c=t?JSON.parse(t).map((function(e){return Array.isArray(e)?l.slice(e[0],e[1]).join("\n"):e})).join("\n"):l.join("\n");return r.createElement(a.Z,s,c)}},6791:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return d},metadata:function(){return u},toc:function(){return m}});var i=t(3117),r=t(102),a=(t(7294),t(3905)),o=t(1736),s=t(6793),l=t(5739),c=["components"],d={id:"did",title:"DID"},p=void 0,u={unversionedId:"sdk/workshop/claimer/did",id:"sdk/workshop/claimer/did",title:"DID",description:"Time to make a light DID using the previously created account for the Claimer.",source:"@site/docs/sdk/1-workshop/04-claimer/02-did.md",sourceDirName:"sdk/1-workshop/04-claimer",slug:"/sdk/workshop/claimer/did",permalink:"/docs/sdk/workshop/claimer/did",editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/sdk/1-workshop/04-claimer/02-did.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"did",title:"DID"},sidebar:"sdk",previous:{title:"Account",permalink:"/docs/sdk/workshop/claimer/account"},next:{title:"Request an Attestation",permalink:"/docs/sdk/workshop/claimer/request"}},m=[{value:"generateKeypairs",id:"generatekeypairs",children:[],level:2},{value:"getFullDid",id:"getfulldid",children:[],level:2},{value:"Claimer Index",id:"claimer-index",children:[],level:2},{value:"Run",id:"run",children:[],level:2}],g={toc:m};function k(e){var n=e.components,t=(0,r.Z)(e,c);return(0,a.kt)("wrapper",(0,i.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Time to make a light DID using the previously created account for the ",(0,a.kt)("span",{class:"label-role claimer"},"Claimer"),".\nSince a light DID is not registered on the blockchain, you don't need funds for creating one.\nRemember light DIDs can:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Sign claims and attestations with the authentication keys"),(0,a.kt)("li",{parentName:"ul"},"Encrypting messages with the encryption keys")),(0,a.kt)("p",null,"Take a look at our ",(0,a.kt)("a",{parentName:"p",href:"/docs/sdk/core-feature/did"},"DID documentation")," if you want to learn more about DIDs and the difference between their light and full versions."),(0,a.kt)("h2",{id:"generatekeypairs"},"generateKeypairs"),(0,a.kt)("p",null,"As before we'll first create our signing and encryption ",(0,a.kt)("inlineCode",{parentName:"p"},"keypairs"),". We'll use an inbound keystore to generate them.\nCreate a file ",(0,a.kt)("inlineCode",{parentName:"p"},"claimer/generateKeypairs.js")," and copy the code below."),(0,a.kt)(o.Z,{className:"language-js",title:"claimer/generateKeypairs.js",mdxType:"CodeBlock"},"const Kilt = require('@kiltprotocol/sdk-js');\n\nasync function generateKeypairs(keystore, mnemonic) {\n  // signing keypair\n  const signing = await keystore.generateKeypair({\n    alg: Kilt.Did.SigningAlgorithms.Sr25519,\n    seed: mnemonic,\n  });\n\n  // encryption keypair\n  const encryption = await keystore.generateKeypair({\n    alg: Kilt.Did.EncryptionAlgorithms.NaclBox,\n    seed: mnemonic,\n  });\n\n  return { signing, encryption }\n}\n\nmodule.exports = generateKeypairs;\n"),(0,a.kt)("h2",{id:"getfulldid"},"getFullDid"),(0,a.kt)("p",null,"Once our ",(0,a.kt)("inlineCode",{parentName:"p"},"keypairs")," are generated we can create our light DID. Because it's off-chain\nwe can just create the DID object everytime, no need to resolve. But we'll still accept\n",(0,a.kt)("inlineCode",{parentName:"p"},"didUri")," and prompt to save it in ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," for our reference."),(0,a.kt)(o.Z,{className:"language-js",title:"claimer/getLightDid.js",mdxType:"CodeBlock"},"const Kilt = require('@kiltprotocol/sdk-js');\nconst generateKeypairs = require('./generateKeypairs');\n\nasync function createLightDid(didUri, keypairs) {\n  // build the Claimer keys object\n  const keys = {\n    authenticationKey: {\n      publicKey: keypairs.signing.publicKey,\n      type: Kilt.Did.DemoKeystore.getKeypairTypeForAlg(\n        keypairs.signing.alg\n      ),\n    },\n    encryptionKey: {\n      publicKey: keypairs.encryption.publicKey,\n      type: Kilt.Did.DemoKeystore.getKeypairTypeForAlg(\n        keypairs.encryption.alg\n      ),\n    },\n  };\n\n  // create the DID\n  const lightDid = new Kilt.Did.LightDidDetails(keys);\n\n  // prompt to store it for reference\n  if (!didUri) {\n    console.log('\\nsave following to .env to continue\\n');\n    console.error(`CLAIMER_DID_URI=${lightDid.didUri}\\n`);\n    process.exit();\n  }\n\n  return lightDid\n}\n\nasync function getLightDid(didUri, keystore, mnemonic) {\n  const keypairs = await generateKeypairs(keystore, mnemonic);\n  return await createLightDid(didUri, keypairs);\n}\n\nmodule.exports = getLightDid;\n"),(0,a.kt)("h2",{id:"claimer-index"},"Claimer Index"),(0,a.kt)("p",null,"Ok let's update our ",(0,a.kt)("inlineCode",{parentName:"p"},"claimer/index.js"),". We bring in the ",(0,a.kt)("inlineCode",{parentName:"p"},"CLAIMER_DID_URI")," form ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," and our ",(0,a.kt)("inlineCode",{parentName:"p"},"getLightDid")," function.\nFinally we'll return the ",(0,a.kt)("inlineCode",{parentName:"p"},"keystore"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"account")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"lightDid")," for use elsewhere later."),(0,a.kt)(s.Z,{title:"claimer/index.js",className:"language-js",snippets:'[ [0, 17], [20,31], "initialize();" ]',mdxType:"SnippetBlock"},l.Z),(0,a.kt)("h2",{id:"run"},"Run"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"node ./claimer/index.js\n")),(0,a.kt)("p",null,"Your output will provide you with ",(0,a.kt)("inlineCode",{parentName:"p"},"CLAIMER_DID_URI"),". Be sure to save it in your ",(0,a.kt)("inlineCode",{parentName:"p"},".env"),"\nfile, it should now look similar to this."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-env",metastring:'title=".env"',title:'".env"'},'WSS_ADDRESS=wss://peregrine.kilt.io/parachain-public-ws\n\nATTESTER_MNEMONIC="gold upset segment ca...\nATTESTER_ADDRESS=5CUoo2vAegeaZHPNdxZyuMe...\nATTESTER_DID_URI=did:kilt:4pjUYTbttjJHqT...\n\nCLAIMER_MNEMONIC="gold upset segment cak...\nCLAIMER_ADDRESS=5CUoo2vAegeaZHPNdxZyuMes...\nCLAIMER_DID_URI=did:kilt:light:004tTDugL...\n')),(0,a.kt)("p",null,"Well done - You've successfully generated a light DID!"))}k.isMDXComponent=!0},5739:function(e,n){n.Z="// make environment variables available in process.env\nrequire('dotenv').config();\n\n// bring in dependencies\nconst Kilt = require('@kiltprotocol/sdk-js');\nconst { cryptoWaitReady } = require('@polkadot/util-crypto');\n\n// bring in environment variables\nconst {\n  WSS_ADDRESS: address,\n  CLAIMER_MNEMONIC: mnemonic,\n  CLAIMER_DID_URI: didUri,\n} = process.env\n\n// load Claimer helper functions\nconst getAccount = require('./getAccount');\nconst getLightDid = require('./getLightDid');\nconst createClaim = require('./createClaim');\nconst createRequest = require('./createRequest');\nconst createPresentation = require('./createPresentation');\n\n// initialize the Claimer account\nasync function initialize() {\n  await cryptoWaitReady();\n  await Kilt.init({ address });\n  const keystore = new Kilt.Did.DemoKeystore();\n  const account = getAccount(mnemonic);\n  const lightDid = await getLightDid(didUri, keystore, mnemonic);\n  return { keystore, account, lightDid }\n}\n\n// export convenience functions\nmodule.exports = {\n  // creates claim from a CType and content returning data\n  async createClaim(ctypeJSON, content) {\n    const ctype = JSON.parse(ctypeJSON);\n    const { lightDid } = await initialize();\n    const claim = createClaim(lightDid, ctype, content);\n    return JSON.stringify(claim);\n  },\n  // creates claim request from claim returning data\n  async createRequest(claimJSON) {\n    // parse claim, load account, build request return data\n    const claim = JSON.parse(claimJSON);\n    const { lightDid, keystore } = await initialize();\n\n    try {\n      // use test request if it exists\n      const oldRequest = require('./_request.json');\n      return JSON.stringify(oldRequest);\n    } catch(e) {\n      // otherwise create a new one\n      const newRequest = await createRequest(lightDid, keystore, claim);\n      return JSON.stringify(newRequest);\n    }\n  },\n  async createPresentation(credentialJSON, challenge) {\n    const credential = JSON.parse(credentialJSON);\n    const { lightDid, keystore } = await initialize();\n    const presentation = await createPresentation(credential, challenge, lightDid, keystore);\n    return JSON.stringify(presentation);\n  },\n}\n"}}]);