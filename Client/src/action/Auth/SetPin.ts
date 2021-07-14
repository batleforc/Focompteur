import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "..";
import {
  getSessionDecryptedKey,
  getTemporaryDecryptedKey,
  hasSessionDecryptedKey,
  setCryptKey,
} from "../../helper/crypt";
import {
  storeRenewTokenInLocal,
  storeRenewTokenInSession,
} from "../../helper/Token";

export interface LoginInterface {
  work: boolean;
  error?: boolean;
}

export default createAsyncThunk(
  "Auth/SetPin",
  async ({ Pin }: { Pin: string }, { getState }): Promise<LoginInterface> => {
    const { Auth } = getState() as RootState;
    if (getTemporaryDecryptedKey() !== undefined) {
      storeRenewTokenInLocal(Auth.token, Pin);
      storeRenewTokenInSession(Auth.token);
      setCryptKey(getSessionDecryptedKey() || "", Pin);
    } else return { work: false };
    return { work: true };
  }
);
