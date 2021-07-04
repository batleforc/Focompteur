import { getEnvString } from "./env";
import jwt from "jsonwebtoken";
import { JwtPayload } from "jsonwebtoken";
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
  jwt.decode(token);

const getSecretKEy = (renewToken: boolean) =>
  renewToken ? getEnvString("JWT_KEY") : getEnvString("JWT_KEY_RENEW");

export const getPayloadJson = (payload: string | JwtPayload | null) => {
  if (payload === null) return {};
  if (typeof payload === "string") {
    return JSON.parse(payload);
  } else {
    return payload as Object;
  }
};
