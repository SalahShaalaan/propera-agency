import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import propertiesRouter from "./routes/properties.route.js";
import compression from "compression";
//////////////////////////////////////////////////////////

const app = express();
dotenv.config();
app.use(express.json());
app.use(
  cors({
    origin: "https://propera-agency-production.up.railway.app",
    credentials: true,
  }),
);

app.use(compression())

app.use("/api/properties", propertiesRouter);

export default app;
