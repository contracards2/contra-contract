import { config } from "dotenv";

import { ThirdwebSDK } from "@thirdweb-dev/sdk";

config();

const sdk = ThirdwebSDK.fromPrivateKey(process.env.PRIVATE_KEY, "goerli");
const IPFS_HASH = process.env.IPFS_HASH;

(async () => {
  const drop = await sdk.getContract(process.env.CONTRA_CONTRACT, "nft-drop");
  let batchArray = [];
  try {
    for (let i = 0; i <= 420; i++) {
      batchArray.push(`ipfs://${IPFS_HASH}/${i}`);
    }
    await drop.createBatch(batchArray);
    console.log("uploaded all nfts");
  } catch (error) {
    console.log(error);
  }
})();
