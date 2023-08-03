import { config } from "dotenv";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import people from "./test_list.mjs";

config();

const sdk = ThirdwebSDK.fromPrivateKey(process.env.PRIVATE_KEY, "goerli");

(async () => {
  const contract = await sdk.getContract(
    process.env.CONTRA_CONTRACT,
    "nft-drop"
  );

  try {
    for (let i = 0; i < people.length; i++) {
      console.log("---------------------------------");
      console.log("----------", people[i].name);
      console.log("----------", people[i].address);
      const tx = await contract.erc721.claimTo(people[i].address, 4);
      console.log("tx", tx.length);
    }
  } catch (error) {
    console.log(error);
  }
})();
