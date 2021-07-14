import { cryptData, decryptData } from "./crypt";

const TokenKey = "AccessTokenKey";
const RenewTokenKey = "RenewTokenKey";

export const storeTokenInSession = (Token: string) =>
  sessionStorage.setItem(TokenKey, Token);
export const getTokenInSession = () => sessionStorage.getItem(TokenKey);
export const storeRenewTokenInLocal = (Token: string, pin: string) => {
  console.log(Token);
  localStorage.setItem(RenewTokenKey, cryptData(Token, pin));
};
export const storeRenewTokenInSession = (Token: string) =>
  sessionStorage.setItem(RenewTokenKey, Token);
export const getRenewTokenInLocal = (pin: string) =>
  decryptData(localStorage.getItem(RenewTokenKey) || "", pin);
export const getRenewTokenInSession = () =>
  sessionStorage.getItem(RenewTokenKey);
