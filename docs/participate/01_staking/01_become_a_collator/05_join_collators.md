---
id: join
title: Join the Collator Candidate Pool
---

import StakingTxDisclaimer from '../_disclaimer_staking_tx.md';

Before a collator can author blocks, the node needs to fully sync up with both the KILT parachain and the Polkadot Relay Chain.
Depending on the size of the blockchain states, it may take from a number of hours to few days for the node to fully synchronize.
More details can be found on the [Polkadot network docs](https://wiki.polkadot.network/docs/maintain-guides-how-to-validate-polkadot#synchronize-chain-data).

After you have finished with the setup, you can finally tell the chain that you are ready to collate and join the pool of candidates.

:::warning
These steps should be followed only once your collator node has successfully [**linked a session key to its address**](./04_session_keys.md) and synced the parachain and relaychain states by following the previous steps.
:::

## Minimum Token Requirement

The maximum number of **active** collators is currently (2022-05-05) 16 on Peregrine and 30 on Spiritnet.

In order to become a collator, you must stake
- at least *10,000 KILT* tokens and
- at most *200,000 KILT* tokens.

## Execute the Joining Transaction

The collator must call an extrinsic `parachainStaking -> joinCandidates(stake)` with the desired stake to join the candidate pool.

<StakingTxDisclaimer />

![](/img/chain/parachainStaking-joinCandidates.png)

1. Select your collator KILT address as the extrinsic submitter (the *using the selected account* field)
2. Select the following extrinsic: `parachainStaking -> joinCandidates(stake)`
3. Insert the staked KILT amount for your collator (any value between `10,000,000,000,000,000,000` and `20,000,000,000,000,000,0000`)
4. Sign and submit the extrinsic (the *Submit Transaction* button)

:::info
A recent change in the blockchain metadata resulted in a change in the UI regarding how balances are shown.
In the current version of PolkadotJS Apps, specifying 1 KILT requires adding 15 trailing `0`s.
So, for instance, 1 KILT needs to be written as `1,000,000,000,000,000`, while 10,000 KILT would be written as `10,000,000,000,000,000,000`.
:::

## Check Your Position in the Collators Queue

As a collator candidate you can check the current top candidates to see their position and the required staked amount to become an active collator, i.e., to start authoring new blocks.

![](/img/chain/parachainStaking-topCandidates1.png)

In Polkadot JS ([wss://spiritnet.kilt.io](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkilt-rpc.dwellir.com#/explorer), or [wss://peregrine.kilt.io/parachain-public-ws](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fperegrine-stg.kilt.io%2Fpara-public-ws#/explorer)) go to `Developer -> Chain state -> Storage`

1. Selected state query: `parachainStaking -> topCandidates(): ParachainStakingSetOrderedSet`
2. Execute the query by pressing the "+" button on the right side

Now, you should see a window which lists collators (the *owner* field) ordered by their total stake (the *amount* field) from greatest to lowest.

![](/img/chain/parachainStaking-topCandidates2.png)

If a collator has enough self-stake and delegator stake it will be selected to collate.
The last address in the list will be the least staked candidate.
A time period of two sessions must pass before the selected collator will be authoring blocks, e.g.,  after the remainder of the current session and the entire next one.
