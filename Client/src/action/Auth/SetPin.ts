import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getSessionDecryptedKey,
  hasSessionDecryptedKey,
  setCryptKey,
} from "../../helper/crypt";

export interface LoginInterface {
  work: boolean;
  error?: boolean;
}

export default createAsyncThunk(
  "Auth/SetPin",
  async ({ Pin }: { Pin: string }): Promise<LoginInterface> => {
    if (hasSessionDecryptedKey())
      setCryptKey(getSessionDecryptedKey() || "", Pin);
    else return { work: false };
    return { work: true };
  }
);
