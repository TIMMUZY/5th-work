import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./Slices/UsersSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export default store;