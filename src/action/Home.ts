import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface HomeInitialState {
  titre: string;
  dark: boolean | null;
}
const DarkMode = () => {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

export const initHome = createAsyncThunk("Home/init", async () => {
  DarkMode();
});

const initialState = {
  titre: "Focompteur",
  dark: true,
} as HomeInitialState;

const homeSlicer = createSlice({
  name: "Home",
  initialState,
  reducers: {
    setDarkMode: (state, { payload }) => {
      state.dark = payload;
      if (payload === null) {
        localStorage.removeItem("theme");
      } else {
        localStorage.theme = payload;
      }
      DarkMode();
    },
  },
});
export const { setDarkMode } = homeSlicer.actions;
export default homeSlicer.reducer;
