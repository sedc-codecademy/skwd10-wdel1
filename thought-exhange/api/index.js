import express from "express";
import cors from "cors";
import helmet from "helmet";
import { config } from "dotenv";
import { globalRouter } from "./const/router.const.js";

config();

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use(globalRouter);

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "0.0.0.0"; //localhost

app.listen(PORT, HOST, () => {
  console.log(`Server is up at port ${PORT}`);
});
