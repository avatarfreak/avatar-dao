import sdk from "./1-initialize-sdk.js";
import { MaxUint256 } from "@ethersproject/constants";
import dotenv from "dotenv";
dotenv.config();

(async () => {
  try {
    const editionDrop = sdk.getContract(process.env.REACT_APP_EDITION_DROP_ADDRESS, "edition-drop");
    // we define ou claim conditions, this is an array of objects because
    // we can have multiple phases starting at different times if we want to 
    const claimConditions = [{
      // When people are gonna be able to start claiming the NFTS (now)
      startTime: new Date(),
      // The maxium number of NFTs that can be claimed.
      maxClaimable: 50_000,
      // The price of our NFT (free)
      price: 0,
      // The amount of NFTs people can claim in one transaction.
      maxClaimablePerWallet: 1,
      // We set the wait between transactions to unlimited, which means
      // people are only allowed to claim once.
      waitInSeconds: MaxUint256,
    }]

    await (await editionDrop).claimConditions.set("0", claimConditions);
    console.log("✅ Sucessfully set claim condition!");
  }
  catch (error) {
    console.log("Failed to set claim condition", error);
  }
})();