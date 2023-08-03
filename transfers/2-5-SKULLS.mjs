import { config } from "dotenv";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import people from "./test_list.mjs";
import allowedCollections from "./nfts_list.mjs";

config();

const sdk = ThirdwebSDK.fromPrivateKey(process.env.PRIVATE_KEY, "goerli");

(async () => {
  try {
    const SKULLS = await sdk.getContract(allowedCollections[4].address);

    let txStartAtTokenId = 10;

    for (let i = 0; i < people.length; i++) {
      // Address of the wallet to get the NFTs of
      console.log("---------------------------------");
      console.log("----------", people[i].name);
      console.log("----------", people[i].address);

      await SKULLS.call("transferFrom", [
        "0xD540F6F04E022dc6B7473389C215a51b83c1b4F6",
        people[i].address,
        txStartAtTokenId,
      ]);
      txStartAtTokenId++;
      await SKULLS.call("transferFrom", [
        "0xD540F6F04E022dc6B7473389C215a51b83c1b4F6",
        people[i].address,
        txStartAtTokenId,
      ]);
      txStartAtTokenId++;
      console.log("---------------------------------");
    }
  } catch (error) {
    console.log(error);
  }
})();
