import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";
import dotenv from "dotenv";
dotenv.config();

(async () => {
    try {
    const editionDrop = await sdk.getContract(process.env.REACT_APP_EDITION_DROP_ADDRESS, "edition-drop");

        await editionDrop.createBatch([
            {
                name: "Leaf Village Headband",
                description: "This NFT will give you access to AvatarDAO!",
                image: readFileSync("scripts/assets/headband.webp"),
              },
          ]);
        console.log("✅ Successfully created a new NFT in the drop!");
      } catch (error) {
        console.error("failed to create the new NFT", error);
      }
  })();
