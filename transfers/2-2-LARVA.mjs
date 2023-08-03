import { config } from "dotenv";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import people from "./test_list.mjs";
import allowedCollections from "./nfts_list.mjs";

config();

const sdk = ThirdwebSDK.fromPrivateKey(process.env.PRIVATE_KEY, "goerli");

(async () => {
  try {
    const larvaChads = await sdk.getContract(allowedCollections[1].address);
    let txStartAtTokenId = 70;

    for (let i = 0; i < people.length; i++) {
      // Address of the wallet to get the NFTs of
      const address = people[i].address;
      console.log("---------------------------------");
      console.log("----------", people[i].name);
      console.log("----------", people[i].address);

      const user_larvaChads = await larvaChads.erc721.getOwned(address);
      console.log("----user_larvaChads------", user_larvaChads.length);

      if (user_larvaChads.length == 0) {
        // do tx
        await larvaChads.erc721.transfer(people[i].address, txStartAtTokenId);
        txStartAtTokenId++;
        await larvaChads.erc721.transfer(people[i].address, txStartAtTokenId);
        txStartAtTokenId++;
      }
    }
  } catch (error) {
    console.log(error);
  }
})();
