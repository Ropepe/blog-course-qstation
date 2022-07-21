import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: number;
  userID: number;
  name: string;
}
interface Users {
  users: User[];
}

const initialState: Users = {
  users: [],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    usersFetch(state, action: PayloadAction<User[]>) {
      state.users = action.payload;
    },
  },
});
export const { usersFetch } = usersSlice.actions;
