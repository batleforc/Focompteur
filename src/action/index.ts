import { configureStore } from "@reduxjs/toolkit";
import Home from "./Home";
import ShowModal from "./ShowModal";
export const store = configureStore({
  reducer: {
    Home,
    ShowModal,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
