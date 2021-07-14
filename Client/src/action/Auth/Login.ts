import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseURL } from "../../helper/Api";
import Axios from "axios";
import { StoreTemporaryDecryptedKey } from "../../helper/crypt";

export interface LoginInterface {
  work: boolean;
  error?: boolean;
}

export default createAsyncThunk(
  "Auth/Login",
  async ({
    Username,
    Password,
  }: {
    Username: string;
    Password: string;
  }): Promise<LoginInterface> => {
    return Axios.post(baseURL("auth/login"), {
      Username,
      Password,
    })
      .then(({ data }) => {
        StoreTemporaryDecryptedKey(data.cryptKey);
        return { work: true };
      })
      .catch(({ response }) => {
        return { work: false, error: response.status };
      });
  }
);
