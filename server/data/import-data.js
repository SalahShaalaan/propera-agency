import fs from "fs";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import Property from "../models/property.model.js";
import dotenv from "dotenv";
import { connectDB } from "./connectDB.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: `${__dirname}/../../.env` });

// READ THE DATA
const data = JSON.parse(fs.readFileSync(`${__dirname}/data.json`, "utf-8"));

const importData = async () => {
  try {
    await Property.create(data);
    console.log("Data successfully loaded");
  } catch (err) {
    console.log("Import error:", err);
  }
  process.exit();
};

const deleteData = async () => {
  try {
    await Property.deleteMany();
    console.log("Data successfully deleted");
  } catch (err) {
    console.log("Delete error:", err);
  }
  process.exit();
};

// IIFE
(async () => {
  await connectDB();

  if (process.argv[2] === "--import") {
    await importData();
  } else if (process.argv[2] === "--delete") {
    await deleteData();
  }
})();

export default data;
