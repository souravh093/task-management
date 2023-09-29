import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    {
      name: "Sourave Halder",
      email: "souravhalder925@gmail.com",
      userTasks: [],
    },
  ],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default usersSlice.reducer;
