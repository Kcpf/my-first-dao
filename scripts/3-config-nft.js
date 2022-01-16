import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xf67257D7104FF834E86f2ef2c6a0d4Ef1734896b",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Handband",
        description: "This NFT will give you access to FernandoDAO!",
        image: readFileSync("scripts/assets/handband.jpeg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()