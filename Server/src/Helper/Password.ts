import bcrypt from "bcrypt";
import { getEnvString } from "./env";

export const hashPassword = (password: string) =>
  bcrypt.hashSync(password, getEnvString("PWD_SALTROUND"));

export const checkPassword = (password: string, hash: string) =>
  bcrypt.compareSync(password, hash);
