import app from "./app.js";
import dotenv from "dotenv";
import { connectDB } from "./data/connectDB.js";
///////////////////////////////////////
dotenv.config({ path: "../.env" });
const PORT = process.env.PORT || 7000;

// app.listen(PORT, () => {
//   console.log(`Server Is Running On Port ${PORT}`);
// });


(async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server Is Running On Port ${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1);
  }
})();