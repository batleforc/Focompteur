import mongoose from "mongoose";
import { getEnvString } from "./env";

const DB_URI = `${getEnvString("DB_PREFIX")}${getEnvString(
  "DB_USERNAME"
)}:${getEnvString("DB_PASSWORD")}@${getEnvString("DB_URL")}/${getEnvString(
  "DB_NAME"
)}`;

mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

export default connection;
