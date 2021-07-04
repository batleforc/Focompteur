import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface AuthIState {
  Authenticated: boolean;
}

const initialState = {
  Authenticated: false,
} as AuthIState;

const AuthSlicer = createSlice({
  name: "Auth",
  initialState,
  reducers: {},
});

export default AuthSlicer.reducer;
