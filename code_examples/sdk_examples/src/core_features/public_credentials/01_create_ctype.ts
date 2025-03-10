import * as Kilt from '@kiltprotocol/sdk-js'

export async function createNftCollectionCType(
  creator: Kilt.DidUri,
  submitterAccount: Kilt.KiltKeyringPair,
  signCallback: Kilt.SignExtrinsicCallback
): Promise<Kilt.ICType> {
  const api = Kilt.ConfigService.get('api')

  // Create a new CType definition.
  const ctype = Kilt.CType.fromProperties(
    `NFT Collection Certification CType by ${creator}`,
    {
      name: {
        type: 'string'
      },
      pieces: {
        type: 'integer'
      },
      creationDate: {
        type: 'string'
      },
      artistIdentity: {
        type: 'string'
      }
    }
  )

  // Generate a creation tx.
  const encodedCtype = Kilt.CType.toChain(ctype)
  const ctypeCreationTx = api.tx.ctype.add(encodedCtype)
  // Sign it with the right DID key.
  const authorizedCtypeCreationTx = await Kilt.Did.authorizeTx(
    creator,
    ctypeCreationTx,
    signCallback,
    submitterAccount.address
  )
  // Submit the creation tx to the KILT blockchain
  // using the KILT account specified in the creation operation.
  await Kilt.Blockchain.signAndSubmitTx(
    authorizedCtypeCreationTx,
    submitterAccount
  )

  return ctype
}
