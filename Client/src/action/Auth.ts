import { createSlice } from "@reduxjs/toolkit";
import { hasCryptedKey } from "../helper/crypt";
import Login, { LoginInterface } from "./Auth/Login";
import LogWithPin from "./Auth/LogWithPin";
import SetPin from "./Auth/SetPin";
export interface AuthIState {
  Authenticated: boolean;
  Pending: boolean;
  PinSet: boolean;
  token: string;
}

const initialState = {
  Authenticated: false,
  Pending: false,
  PinSet: hasCryptedKey(),
  token: "",
} as AuthIState;

const AuthSlicer = createSlice({
  name: "Auth",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(Login.pending, (state) => {
        state.Pending = true;
      })
      .addCase(Login.rejected, (state) => {
        state.Pending = false;
      })
      .addCase(Login.fulfilled, (state, { payload }) => {
        state.Pending = false;
        state.token = payload.Token || "";
      })
      .addCase(SetPin.pending, (state) => {
        state.Pending = true;
      })
      .addCase(SetPin.rejected, (state) => {
        state.Pending = false;
      })
      .addCase(SetPin.fulfilled, (state, { payload }) => {
        state.Pending = true;
        if (payload.work) {
          state.PinSet = true;
          state.Authenticated = true;
        }
      })
      .addCase(LogWithPin.pending, (state) => {
        state.Pending = true;
      })
      .addCase(LogWithPin.rejected, (state) => {
        state.Pending = false;
      })
      .addCase(LogWithPin.fulfilled, (state, { payload }) => {
        state.Pending = false;
        if (payload.work) {
          state.token = payload.token || "";
          state.Authenticated = true;
        }
      }),
});

export default AuthSlicer.reducer;
