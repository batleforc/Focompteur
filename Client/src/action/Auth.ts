import { createSlice } from "@reduxjs/toolkit";
import { hasCryptedKey } from "../helper/crypt";
import Login, { LoginInterface } from "./Auth/Login";
export interface AuthIState {
  Authenticated: boolean;
  Pending: boolean;
  PinSet: boolean;
  token: string;
  show: {
    SetPin: boolean;
  };
}

const initialState = {
  Authenticated: false,
  Pending: false,
  PinSet: hasCryptedKey(),
  token: "",
  show: {
    SetPin: false,
  },
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
        state.show.SetPin = true;
      }),
});

export default AuthSlicer.reducer;
