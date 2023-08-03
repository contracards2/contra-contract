import { config } from "dotenv";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import people from "./test_list.mjs";
import allowedCollections from "./nfts_list.mjs";

config();

const sdk = ThirdwebSDK.fromPrivateKey(process.env.PRIVATE_KEY, "goerli");

(async () => {
  try {
    const rekts = await sdk.getContract(allowedCollections[3].address);

    let txStartAtTokenId = 10;

    for (let i = 0; i < people.length; i++) {
      // Address of the wallet to get the NFTs of
      console.log("---------------------------------");
      console.log("----------", people[i].name);
      console.log("----------", people[i].address);

      await rekts.erc721.transfer(people[i].address, txStartAtTokenId);
      txStartAtTokenId++;
    }
  } catch (error) {
    console.log(error);
  }
})();
