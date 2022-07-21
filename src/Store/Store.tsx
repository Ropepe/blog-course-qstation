import { configureStore } from "@reduxjs/toolkit";
import { postSlice } from "./post-slice";
import { usersSlice } from "./users-slice";

export const store = configureStore({
  reducer: { posts: postSlice.reducer, users: usersSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
