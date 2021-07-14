const TokenKey = "AccessTokenKey";
const RenewTokenKey = "RenewTokenKey";

export const storeTokenInSession = (Token: string) =>
  sessionStorage.setItem(TokenKey, Token);
export const getTokenInSession = () => sessionStorage.getItem(TokenKey);
