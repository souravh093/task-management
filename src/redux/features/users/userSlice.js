import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Sourave Halder",
  email: "souravhalder925@gmail.com",
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default usersSlice.reducer;
