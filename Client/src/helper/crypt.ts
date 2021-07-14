import AES from "crypto-js/aes";
import enc from "crypto-js/enc-utf8";
const CRYPTKEY = "crypTkey";

export const decryptData = (data: string, key: string) =>
  AES.decrypt(data.toString(), key.toString()).toString(enc);
export const cryptData = (data: string, key: string) =>
  AES.encrypt(data.toString(), key.toString()).toString();
export const setCryptKey = (data: string, pin: string) =>
  localStorage.setItem(CRYPTKEY, cryptData(data, pin));
export const getCryptKey = (pin: string) =>
  decryptData(localStorage.getItem(CRYPTKEY) || "", pin);
export const resetCryptKey = () => localStorage.setItem(CRYPTKEY, "");
export const PinCorrect = (pin: string) => getCryptKey(pin) !== "";
export const cryptKeyExist = () =>
  localStorage.getItem(CRYPTKEY) !== null &&
  localStorage.getItem(CRYPTKEY) !== "";
export const StoreTemporaryDecryptedKey = (key: string) =>
  sessionStorage.setItem(CRYPTKEY, key);
export const getTemporaryDecryptedKey = () => sessionStorage.getItem(CRYPTKEY);
export const StoreDecryptedKey = (pin: string) =>
  sessionStorage.setItem(CRYPTKEY, getCryptKey(pin));
export const getSessionDecryptedKey = () => sessionStorage.getItem(CRYPTKEY);
export const hasSessionDecryptedKey = () => getSessionDecryptedKey() !== "";
export const resetSessionDecryptedKey = () =>
  sessionStorage.setItem(CRYPTKEY, "");
export const hasCryptedKey = (): boolean =>
  localStorage.getItem(CRYPTKEY) !== null &&
  localStorage.getItem(CRYPTKEY) !== "";
export default {
  decryptData,
  cryptData,
  setCryptKey,
  getCryptKey,
  StoreDecryptedKey,
  getSessionDecryptedKey,
  PinCorrect,
  hasSessionDecryptedKey,
  hasCryptedKey,
  resetSessionDecryptedKey,
  resetCryptKey,
};
