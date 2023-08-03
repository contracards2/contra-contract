import { config } from "dotenv";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import people from "./test_list.mjs";
import allowedCollections from "./nfts_list.mjs";

config();

const sdk = ThirdwebSDK.fromPrivateKey(process.env.PRIVATE_KEY, "goerli");

(async () => {
  try {
    const mfers = await sdk.getContract(allowedCollections[2].address);
    let txStartAtTokenId = 10;

    for (let i = 0; i < people.length; i++) {
      // Address of the wallet to get the NFTs of
      const address = people[i].address;
      console.log("---------------------------------");
      console.log("----------", people[i].name);
      console.log("----------", people[i].address);

      const user_mfers = await mfers.erc721.getOwned(address);
      console.log("----user_mfers------", user_mfers.length);

      if (user_mfers.length == 0) {
        // do tx
        await mfers.erc721.transfer(people[i].address, txStartAtTokenId);
        txStartAtTokenId++;
        await mfers.erc721.transfer(people[i].address, txStartAtTokenId);
        txStartAtTokenId++;
      }
    }
  } catch (error) {
    console.log(error);
  }
})();
