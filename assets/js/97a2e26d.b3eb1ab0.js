"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6401],{59952:function(e,t,i){i.r(t),i.d(t,{contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return d},metadata:function(){return c},toc:function(){return u}});var n=i(83117),o=i(80102),a=(i(67294),i(3905)),l=i(31736),r=["components"],d={id:"full-did-creation",title:"Create a Full DID"},s=void 0,c={unversionedId:"develop/sdk/cookbook/dids/full-did-creation",id:"develop/sdk/cookbook/dids/full-did-creation",title:"Create a Full DID",description:"The following is an example of how to create and write on the blockchain a full DID that specifies only an authentication key, by using the FullDidCreationBuilder class.",source:"@site/docs/develop/01_sdk/02_cookbook/01_dids/02_full_did_creation.md",sourceDirName:"develop/01_sdk/02_cookbook/01_dids",slug:"/develop/sdk/cookbook/dids/full-did-creation",permalink:"/docs/develop/sdk/cookbook/dids/full-did-creation",editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/01_sdk/02_cookbook/01_dids/02_full_did_creation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"full-did-creation",title:"Create a Full DID"},sidebar:"sdk",previous:{title:"Create a Light DID",permalink:"/docs/develop/sdk/cookbook/dids/light-did-creation"},next:{title:"Update a Full DID",permalink:"/docs/develop/sdk/cookbook/dids/full-did-update"}},u=[{value:"Upgrade a light DID to a full DID",id:"upgrade-a-light-did-to-a-full-did",children:[],level:2}],p={toc:u};function y(e){var t=e.components,i=(0,o.Z)(e,r);return(0,a.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The following is an example of how to create and write on the blockchain a full DID that specifies only an authentication key, by using the FullDidCreationBuilder class."),(0,a.kt)(l.Z,{className:"language-ts",mdxType:"CodeBlock"},"import type { KeyringPair } from '@polkadot/keyring/types'\n\nimport { ApiPromise } from '@polkadot/api'\n\nimport * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function createSimpleFullDid(\n  keystore: Kilt.Did.DemoKeystore,\n  api: ApiPromise,\n  submitterAccount: KeyringPair,\n  authenticationSeed: string | undefined = undefined,\n  resolveOn: Kilt.SubscriptionPromise.ResultEvaluator = Kilt.BlockchainUtils\n    .IS_FINALIZED\n): Promise<Kilt.Did.FullDidDetails> {\n  // Ask the keystore to generate a new keypair to use for authentication.\n  // If no `authenticationSeed` is provided, a random one will be generated.\n  const authenticationKeyPublicDetails = await keystore.generateKeypair({\n    seed: authenticationSeed,\n    alg: Kilt.Did.SigningAlgorithms.Ed25519\n  })\n\n  // Generate the DID-signed creation extrinsic and submit it to the blockchain with the specified account.\n  // The submitter account parameter, ensures that only an entity authorized by the DID subject\n  // can submit the extrinsic to the KILT blockchain.\n  const fullDid = await new Kilt.Did.FullDidCreationBuilder(api, {\n    publicKey: authenticationKeyPublicDetails.publicKey,\n    type: Kilt.VerificationKeyType.Ed25519\n  }).buildAndSubmit(keystore, submitterAccount.address, async (creationTx) => {\n    await Kilt.BlockchainUtils.signAndSubmitTx(creationTx, submitterAccount, {\n      resolveOn\n    })\n  })\n\n  if (!fullDid) {\n    throw 'Could not find the DID just created.'\n  }\n  return fullDid\n}\n"),(0,a.kt)("p",null,"If additional keys or service endpoints are to be specified, then they can be batched into the builder before building the creation transaction."),(0,a.kt)(l.Z,{className:"language-ts",mdxType:"CodeBlock"},"import type { KeyringPair } from '@polkadot/keyring/types'\n\nimport { blake2AsHex, randomAsHex } from '@polkadot/util-crypto'\nimport { ApiPromise } from '@polkadot/api'\n\nimport * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function createCompleteFullDid(\n  keystore: Kilt.Did.DemoKeystore,\n  api: ApiPromise,\n  submitterAccount: KeyringPair,\n  authenticationSeed: string | undefined = undefined,\n  resolveOn: Kilt.SubscriptionPromise.ResultEvaluator = Kilt.BlockchainUtils\n    .IS_FINALIZED\n): Promise<Kilt.Did.FullDidDetails> {\n  authenticationSeed = authenticationSeed || randomAsHex(32)\n  // Create the attestation key seed by hasing the provided authentication seed.\n  const attestationSeed = blake2AsHex(authenticationSeed)\n  // Create the delegation key seed by hasing the generated attestation key seed.\n  const delegationSeed = blake2AsHex(attestationSeed)\n\n  // Ask the keystore to generate a new keypair to use for authentication.\n  const authenticationKeyPublicDetails = await keystore.generateKeypair({\n    seed: authenticationSeed,\n    alg: Kilt.Did.SigningAlgorithms.Ed25519\n  })\n\n  const encryptionSeed = randomAsHex(32)\n  // Ask the keystore to generate a new keypar to use for encryption.\n  const encryptionKeyPublicDetails = await keystore.generateKeypair({\n    seed: encryptionSeed,\n    alg: Kilt.Did.EncryptionAlgorithms.NaclBox\n  })\n\n  const attestationKeyPublicDetails = await keystore.generateKeypair({\n    seed: attestationSeed,\n    alg: Kilt.Did.SigningAlgorithms.Sr25519\n  })\n\n  const delegationKeyPublicDetails = await keystore.generateKeypair({\n    seed: delegationSeed,\n    alg: Kilt.Did.SigningAlgorithms.EcdsaSecp256k1\n  })\n\n  const fullDid = await new Kilt.Did.FullDidCreationBuilder(api, {\n    publicKey: authenticationKeyPublicDetails.publicKey,\n    type: Kilt.VerificationKeyType.Ed25519\n  })\n    .addEncryptionKey({\n      publicKey: encryptionKeyPublicDetails.publicKey,\n      type: Kilt.EncryptionKeyType.X25519\n    })\n    .setAttestationKey({\n      publicKey: attestationKeyPublicDetails.publicKey,\n      type: Kilt.VerificationKeyType.Sr25519\n    })\n    .setDelegationKey({\n      publicKey: delegationKeyPublicDetails.publicKey,\n      type: Kilt.VerificationKeyType.Ecdsa\n    })\n    .addServiceEndpoint({\n      id: 'my-service',\n      types: ['service-type'],\n      urls: ['https://www.example.com']\n    })\n    .buildAndSubmit(keystore, submitterAccount.address, async (creationTx) => {\n      await Kilt.BlockchainUtils.signAndSubmitTx(creationTx, submitterAccount, {\n        resolveOn\n      })\n    })\n\n  if (!fullDid) {\n    throw 'Could not find the DID just created.'\n  }\n  return fullDid\n}\n"),(0,a.kt)("h2",{id:"upgrade-a-light-did-to-a-full-did"},"Upgrade a light DID to a full DID"),(0,a.kt)("p",null,"Another way to obtain a full DID is by upgrading a previously-created light DID.\nKILT supports this operation in a way that does not invalidate any Credentials that have been issued to the light DID before being upgraded."),(0,a.kt)("p",null,"The following code shows how to migrate a light DID to a full DID.\nCredentials, Presentations, and verifications remain unchanged as adding support for DID migration does not affect the public API that the SDK exposes."),(0,a.kt)(l.Z,{className:"language-ts",mdxType:"CodeBlock"},"import type { KeyringPair } from '@polkadot/keyring/types'\n\nimport * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function migrateLightDid(\n  keystore: Kilt.Did.DemoKeystore,\n  submitterAccount: KeyringPair,\n  lightDid: Kilt.Did.LightDidDetails,\n  resolveOn: Kilt.SubscriptionPromise.ResultEvaluator = Kilt.BlockchainUtils\n    .IS_FINALIZED\n): Promise<Kilt.Did.FullDidDetails> {\n  // Generate the DID migration extrinsic.\n  const migratedFullDid = await lightDid.migrate(\n    submitterAccount.address,\n    keystore,\n    async (migrationTx) => {\n      // The extrinsic can then be submitted by the authorized account as usual.\n      await Kilt.BlockchainUtils.signAndSubmitTx(\n        migrationTx,\n        submitterAccount,\n        {\n          resolveOn\n        }\n      )\n    }\n  )\n\n  if (!migratedFullDid) {\n    throw 'Could not find the DID just migrated.'\n  }\n  return migratedFullDid\n}\n"))}y.isMDXComponent=!0}}]);