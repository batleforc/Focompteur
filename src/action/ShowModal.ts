import { createSlice } from "@reduxjs/toolkit";

interface ShowModalInitialSTate {
  Burger: boolean;
}

const initialState = {
  Burger: false,
} as ShowModalInitialSTate;

const ShowModalSlicer = createSlice({
  name: "ShowModal",
  initialState,
  reducers: {
    setShowBurger: (state, { payload }) => {
      state.Burger = payload;
    },
  },
});
export const { setShowBurger } = ShowModalSlicer.actions;
export default ShowModalSlicer.reducer;
