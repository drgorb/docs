"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[720],{6793:function(e,t,n){var i=n(102),a=n(7294),r=n(1736),o=["children","snippets"];t.Z=function(e){var t=e.children,n=e.snippets,s=(0,i.Z)(e,o),l=t.split(/\r?\n/),d=n?JSON.parse(n).map((function(e){return Array.isArray(e)?l.slice(e[0],e[1]).join("\n"):e})).join("\n"):l.join("\n");return a.createElement(r.Z,s,d)}},9379:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return y},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return k}});var i=n(3117),a=n(102),r=(n(7294),n(3905)),o=n(1736),s=n(6793),l=n(6324),d=["components"],c={id:"did",title:"DID"},p=void 0,u={unversionedId:"sdk/workshop/attester/did",id:"sdk/workshop/attester/did",title:"DID",description:"Time to make a DID using the previously created account for the Attester.",source:"@site/docs/sdk/1-workshop/03-attester/02-did.md",sourceDirName:"sdk/1-workshop/03-attester",slug:"/sdk/workshop/attester/did",permalink:"/docs/sdk/workshop/attester/did",editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/sdk/1-workshop/03-attester/02-did.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"did",title:"DID"},sidebar:"sdk",previous:{title:"Account",permalink:"/docs/sdk/workshop/attester/account"},next:{title:"CType",permalink:"/docs/sdk/workshop/attester/ctype"}},k=[{value:"Account vs DID",id:"account-vs-did",children:[],level:2},{value:"Create a DID",id:"create-a-did",children:[],level:2},{value:"Get DID",id:"get-did",children:[],level:2},{value:"Execute",id:"execute",children:[],level:2}],m={toc:k};function y(e){var t=e.components,n=(0,a.Z)(e,d);return(0,r.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Time to make a DID using the previously created account for the ",(0,r.kt)("span",{class:"label-role attester"},"Attester"),"."),(0,r.kt)("p",null,"A DID may represents any entity, may it be a person, an organization or a machine."),(0,r.kt)("p",null,"A KILT Decentralised Identifier (DID) is a string uniquely identifying each KILT user.\nYou can store information about your DID on the KILT chain.\nThis is useful for many different use cases.\nOne example would be messaging.\nYou would store a public encryption key and a service endpoint on chain, that can both be queried using your DID.\nOther users can now encrypt messages using your public encryption key and send the message to your service endpoint."),(0,r.kt)("p",null,"There are light and full DIDs.\nI this workshop we will only talk about full DIDs.\nTake a look at our ",(0,r.kt)("a",{parentName:"p",href:"/docs/sdk/core-feature/did"},"DID documentation")," if you want to learn more about DIDs and the difference between their light and full versions."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"KILT DID")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"There are currently four different key types that a DID supports:"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"An ",(0,r.kt)("em",{parentName:"li"},"authentication keypair")," (for signing) that is used to sign claims and attestations"),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("em",{parentName:"li"},"key-agreement keypair")," (fpr encryption), used to encrypt messages"),(0,r.kt)("li",{parentName:"ul"},"An ",(0,r.kt)("em",{parentName:"li"},"assertion-method keypair")," (for signing), used to write ctypes and attestations on chain"),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("em",{parentName:"li"},"capability-delegation keypair")," (for signing), used to write delegations on the blockchain")),(0,r.kt)("p",{parentName:"div"},"Keypairs can be replaced over time, even if the key has been compromised."))),(0,r.kt)("h2",{id:"account-vs-did"},"Account vs DID"),(0,r.kt)("p",null,"A full DID needs to be registered on the blockchain.\nFor that an account has to submit the create-did-call.\nThere is always an account that submits the transactions and pays for the fees and the DID that authorized the call.\nBecause the DID and the account are not connected, DIDs can't hold any coins."),(0,r.kt)("h2",{id:"create-a-did"},"Create a DID"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Keystore")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"A keystore has multiple purposes:"),(0,r.kt)("p",{parentName:"div"},"The keystore ..."),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"stores private keys that belong to a DID"),(0,r.kt)("li",{parentName:"ul"},"creates new keys"),(0,r.kt)("li",{parentName:"ul"},"encrypts and decrypts arbitrary data")))),(0,r.kt)("p",null,"In order to create a DID we need a keystore.\nFor our ",(0,r.kt)("span",{class:"label-role attester"},"Attester")," we'll need all four types of keys.\nSince three of the key types use are used for signatures, we can use the same key for these.\nWe'll use a demo keystore to generate them.\nCreate a file ",(0,r.kt)("inlineCode",{parentName:"p"},"attester/generateKeypairs.js")," and copy the code below."),(0,r.kt)(o.Z,{className:"language-js",title:"attester/generateKeypairs.js",mdxType:"CodeBlock"},"const Kilt = require('@kiltprotocol/sdk-js');\n\nasync function generateKeypairs(keystore, mnemonic) {\n  // signing keypair\n  const signing = await keystore.generateKeypair({\n    alg: Kilt.Did.SigningAlgorithms.Sr25519,\n    seed: mnemonic,\n  });\n\n  // encryption keypair\n  const encryption = await keystore.generateKeypair({\n    alg: Kilt.Did.EncryptionAlgorithms.NaclBox,\n    seed: mnemonic,\n  });\n\n  return { signing, encryption }\n}\n\nmodule.exports = generateKeypairs;\n"),(0,r.kt)("p",null,"Now we have all we need to create our ",(0,r.kt)("inlineCode",{parentName:"p"},"DID"),": a ",(0,r.kt)("inlineCode",{parentName:"p"},"keystore"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"keypairs")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"account"),". Create\na file ",(0,r.kt)("inlineCode",{parentName:"p"},"attester/createFullDid.js")," and paster the following code."),(0,r.kt)("p",null,"Let's walk through ",(0,r.kt)("inlineCode",{parentName:"p"},"attester/createFullDid.js"),". First we create the required ",(0,r.kt)("inlineCode",{parentName:"p"},"keys"),".\nWe use the ",(0,r.kt)("inlineCode",{parentName:"p"},"keys"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"keystore"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"address")," to get the ",(0,r.kt)("inlineCode",{parentName:"p"},"didUri")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"extrinsic"),".\nFinally we use the ",(0,r.kt)("inlineCode",{parentName:"p"},"extrinsic")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"account")," to write the ",(0,r.kt)("inlineCode",{parentName:"p"},"DID")," on chain."),(0,r.kt)("p",null,"Once you have the ",(0,r.kt)("inlineCode",{parentName:"p"},"didUri"),", we can then resolve the ",(0,r.kt)("inlineCode",{parentName:"p"},"DID")," from chain, So this creation\nfunction only needs to run once per ",(0,r.kt)("inlineCode",{parentName:"p"},"DID"),". You'll be prompted to save the ",(0,r.kt)("inlineCode",{parentName:"p"},"didUri")," to ",(0,r.kt)("inlineCode",{parentName:"p"},".env"),"."),(0,r.kt)(o.Z,{className:"language-js",title:"attester/createFullDid.js",mdxType:"CodeBlock"},"const Kilt = require('@kiltprotocol/sdk-js')\n\nasync function createFullDid(keystore, keypairs, account) {\n  // build the Attester keys object\n  const keys = {\n    authentication: {\n      publicKey: keypairs.signing.publicKey,\n      type: Kilt.Did.DemoKeystore.getKeypairTypeForAlg(\n        keypairs.signing.alg\n      ),\n    },\n    keyAgreement: {\n      publicKey: keypairs.encryption.publicKey,\n      type: Kilt.Did.DemoKeystore.getKeypairTypeForAlg(\n        keypairs.encryption.alg\n      ),\n    },\n    capabilityDelegation: {\n      publicKey: keypairs.signing.publicKey,\n      type: Kilt.Did.DemoKeystore.getKeypairTypeForAlg(\n        keypairs.signing.alg\n      ),\n    },\n    assertionMethod: {\n      publicKey: keypairs.signing.publicKey,\n      type: Kilt.Did.DemoKeystore.getKeypairTypeForAlg(\n        keypairs.signing.alg\n      ),\n    },\n  };\n\n  // get extrinsic and didUri\n  const { extrinsic, did: didUri } = await Kilt.Did.DidUtils.writeDidFromPublicKeys(\n    keystore,\n    account.address,\n    keys\n  );\n\n  // write the DID to blockchain\n  await Kilt.BlockchainUtils.signAndSubmitTx(extrinsic, account, {\n    reSign: true,\n    resolveOn: Kilt.BlockchainUtils.IS_FINALIZED,\n  });\n\n  // save the didUri so we don't attempt to write it to chain again\n  console.log('\\nsave following to .env to continue\\n');\n  console.error(`ATTESTER_DID_URI=${didUri}\\n`);\n  process.exit();\n}\n\nmodule.exports = createFullDid;\n"),(0,r.kt)("h2",{id:"get-did"},"Get DID"),(0,r.kt)("p",null,"Create a file ",(0,r.kt)("inlineCode",{parentName:"p"},"attester/getFullDid.js"),". This is a convenience function that\nfirst tries to load the ",(0,r.kt)("inlineCode",{parentName:"p"},"DID")," from ",(0,r.kt)("inlineCode",{parentName:"p"},".env"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"DID_URI"),". If it doesn't exist\nit will create and write it to chain. Once it exists it resolves and returns the full ",(0,r.kt)("inlineCode",{parentName:"p"},"DID"),"."),(0,r.kt)(o.Z,{className:"language-js",title:"attester/getFullDid.js",mdxType:"CodeBlock"},"const Kilt = require('@kiltprotocol/sdk-js');\nconst generateKeypairs = require('./generateKeypairs');\nconst createFullDid = require('./createFullDid');\n\nasync function getFullDid(didUri, keystore, mnemonic, account) {\n  // generate the keypairs and load the DID if we have it\n  const keypairs = await generateKeypairs(keystore, mnemonic);\n\n  // if we don't have the didUri create the on chain DID\n  if (!didUri) return await createFullDid(keystore, keypairs, account);\n\n  // make sure the did is already on chain\n  const onChain = await Kilt.Did.DidChain.queryById(account.address)\n  if (!onChain) throw Error(`failed to find on chain: ${didUri}\\n`)\n\n  // load and return the DID using the default resolver\n  return await Kilt.Did.DefaultResolver.resolveDoc(didUri);\n}\n\nmodule.exports = getFullDid;\n"),(0,r.kt)("h2",{id:"execute"},"Execute"),(0,r.kt)("p",null,"Ok let's update our ",(0,r.kt)("inlineCode",{parentName:"p"},"attester/index.js"),".\nWe bring in the ",(0,r.kt)("inlineCode",{parentName:"p"},"ATTESTER_DID_URI")," form ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," and our ",(0,r.kt)("inlineCode",{parentName:"p"},"getFullDid")," function.\nFinally we'll return the ",(0,r.kt)("inlineCode",{parentName:"p"},"keystore"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"account")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"fullDid")," for use elsewhere later."),(0,r.kt)(s.Z,{title:"attester/index.js",className:"language-js",snippets:'[ [0,17], [19,30], "initialize();" ]',mdxType:"SnippetBlock"},l.Z),(0,r.kt)("p",null,"You can now execute the script with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"node ./attester/index.js\n")),(0,r.kt)("p",null,"Once you executed the script, the output should provide you with your ",(0,r.kt)("inlineCode",{parentName:"p"},"ATTESTER_DID_URI"),".\nYour output should look like this (but it won't be identical since the DIDs are constructed from your account):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"save following to .env to continue\n\nATTESTER_DID_URI=did:kilt:4rgeGJNgHNiZ9TngzQTwmSAYXxMJCUFVbMCcwqwGobwQvc9X\n")),(0,r.kt)("p",null,"Be sure to save it in your ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file, it should now look similar to this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-env",metastring:'title=".env"',title:'".env"'},'WSS_ADDRESS=wss://peregrine.kilt.io/parachain-public-ws\n\nATTESTER_MNEMONIC="gold upset segment ca...\nATTESTER_ADDRESS=5CUoo2vAegeaZHPNdxZyuMe...\nATTESTER_DID_URI=did:kilt:4pjUYTbttjJHqT...\n')),(0,r.kt)("p",null,"Well done - You've successfully generated a full DID! Let's create a CType!"))}y.isMDXComponent=!0},6324:function(e,t){t.Z="// make environment variables available in process.env\nrequire('dotenv').config();\n\n// bring in dependencies\nconst Kilt = require('@kiltprotocol/sdk-js');\nconst { cryptoWaitReady } = require('@polkadot/util-crypto');\n\n// bring in environment variables\nconst {\n  WSS_ADDRESS: address,\n  ATTESTER_MNEMONIC: mnemonic,\n  ATTESTER_DID_URI: didUri,\n} = process.env\n\n// load Attester helper functions\nconst getAccount = require('./getAccount');\nconst getFullDid = require('./getFullDid');\nconst getCtype = require('./getCtype');\nconst attestCredential = require('./attestCredential');\n\n// initialize the Attester account\nasync function initialize() {\n  await cryptoWaitReady();\n  await Kilt.init({ address });\n  const account = getAccount(mnemonic);\n  const keystore = new Kilt.Did.DemoKeystore();\n  const fullDid = await getFullDid(didUri, keystore, mnemonic, account);\n  return { keystore, account, fullDid }\n}\n\n// export for the outside world\nmodule.exports = {\n  async getCtype() {\n    // load the account, get the CType, return as data\n    const { fullDid, account, keystore } = await initialize();\n    const ctype = await getCtype(fullDid, keystore, account);\n    return JSON.stringify(ctype);\n  },\n  async attestCredential(requestJSON) {\n    // parse, load account, attest credential, return as data\n    const request = JSON.parse(requestJSON);\n    const { account, fullDid, keystore } = await initialize();\n    const credential = await attestCredential(account, fullDid, keystore, request);\n    return JSON.stringify(credential);\n  },\n}\n"}}]);