import { getEnvString } from "./env";
import jwt from "jsonwebtoken";
export const getToken = async (payload: any, renewToken: boolean = false) =>
  jwt.sign(
    payload,
    renewToken ? getEnvString("JWT_KEY") : getEnvString("JWT_KEY_RENEW"),
    {
      expiresIn: getSecretKEy(renewToken),
    }
  );

export const validateToken = (token: string, renewToken: boolean) => {
  try {
    jwt.verify(token, getSecretKEy(renewToken));
  } catch (e) {
    return false;
  }
  return true;
};

export const getTokenContent = async (token: string, renewToken: boolean) =>
  jwt.verify(token, getSecretKEy(renewToken));

const getSecretKEy = (renewToken: boolean) =>
  renewToken ? getEnvString("JWT_KEY") : getEnvString("JWT_KEY_RENEW");
