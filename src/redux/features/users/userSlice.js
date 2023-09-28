import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    name: "Mir Hussain",
    email: "mir@gmail.com",
    userTasks: [],
  },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default usersSlice.reducer;
