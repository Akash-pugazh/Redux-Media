import { configureStore } from "@reduxjs/toolkit";
import { UserReducer } from "./Slices/UserSlice";

export const store = configureStore({
  reducer: {
    user: UserReducer,
  },
});

export * from "./thunks/fetchUsers";
export * from "./thunks/addUser";
export * from "./thunks/deleteUser"