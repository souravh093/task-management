import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./features/task/taskSlice";
import usersSlice from "./features/users/userSlice";
const store = configureStore({
  reducer: {
    tasksSlice: tasksSlice,
    usersSlice: usersSlice,
  },
});

export default store;
