import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseURL } from "../../helper/Api";
import axios from "axios";
import { getSessionDecryptedKey, StoreDecryptedKey } from "../../helper/crypt";
import {
  getRenewTokenInLocal,
  storeRenewTokenInSession,
} from "../../helper/Token";

export interface LogWithPinInterface {
  work: boolean;
  token?: string;
}

export default createAsyncThunk(
  "Auth/LogWithPin",
  async ({ Pin }: { Pin: string }): Promise<LogWithPinInterface> => {
    StoreDecryptedKey(Pin);
    var renewToken = getRenewTokenInLocal(Pin);
    storeRenewTokenInSession(renewToken);
    return axios
      .post(
        baseURL("auth/renew"),
        {},
        { headers: { Authorization: renewToken } }
      )
      .then(({ data }) => {
        return { work: true, token: data.Token };
      })
      .catch((res) => {
        return { work: false };
      });
  }
);
