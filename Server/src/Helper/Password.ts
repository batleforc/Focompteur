import bcrypt from "bcrypt";
import { getEnvNumber, getEnvString } from "./env";

export const hashPassword = (password: string) =>
  bcrypt.hashSync(password, getEnvNumber("PWD_SALTROUND"));

export const checkPassword = (password: string, hash: string) =>
  bcrypt.compareSync(password, hash);
