import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "../features/users.slice";

const store = configureStore({
  reducer: {
    users: usersSlice,
  },
});

export default store;
