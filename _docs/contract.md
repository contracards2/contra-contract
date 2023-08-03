# First steps.

Deploying contra requires the following previous steps related to the contra contract. Following these steps it is possible to generate a valid collection.

# Clone this project and install dependencies.

```bash
    git clone https://github.com/fewdao/contra-contracts
    cd contract-contracts
    yarn install
```

# Metadata generation.

- In the `generator` folder create the `metadata` empty folder.

- Create a `.env` file following the `.env.example` instructions.

- Run the following script to generate the metadata files.

```bash
    node generator/1-json-metadata.mjs
```

# Metadata upload to ipfs

We need to create a IPFS directory with the metadata for each token inside. This step will generate this directory and output the hash if the ipfs directory.

```bash
    node generator/2-upload-ipfs-metadata.mjs
```

Copy the output `IPFS_HASH` and save it, it will be used in the next step.

# Update the .env 
 
File with the `IPFS_HASH` variable extracted from the prev step.

# Contract deployment

Be aware of the network you want to deploy this contract, for `staging` and `testnet` we use `goerli` testnet.

```bash
yarn deploy
```
Go to thirdweb and finish the deployment to get the contract on the network.

Use the prev generated `IPFS_HASH` in the thirdweb deployment proccess. 

Remember to write a full IPFS uri. ipfs://IPFS_HASH/. note the "/" at the end.

For goerli network contract name use this: 

- `Staging` environment: `Tesnet Cards` & `TC`  for Symbol
- `Testnet` environment: `Contra` & `CON` for Symbol

Once the transaction is completed copy the `Contract Address`.

# Update the .env 
 
File with the `CONTRA_CONTRACT` variable extracted from the prev step.

# !IMPORTANT, continue with the `contract-api` instructions 

Then run the step 5 (Batch mint) in this documentation.

# Batch mint

With the API running we can run the batch mint.

```bash
    node generator/3-create-batch.mjs
```

# Claim conditions.

Go to thirdweb again and click on claim conditions, configure and sent the transaction.
