
import mongoose from "mongoose";

export const connectDB = async () => {
  const DB = process.env.DB_URL.replace(
    "<db_password>",
    process.env.DB_PASSWORD,
  );

  mongoose.connection.on("connected", () => {
    console.log("✅ MongoDB connected");
  });

  mongoose.connection.on("error", (err) => {
    console.error("❌ MongoDB connection error:", err);
  });

  try {
    await mongoose.connect(DB);
  } catch (err) {
    console.error("DB connection failed:", err);
    process.exit(1);
  }
};