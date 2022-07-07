import { createSlice } from "@reduxjs/toolkit";

const user = JSON.parse(window.localStorage.getItem("user"));
// console.log(user);
const initialState = {
  user: user,
};
const UserSlice = createSlice({
  name: "fullname",
  initialState,
  reducers: {
    UserDetails: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const UserReducer = UserSlice.reducer;
export const { UserDetails } = UserSlice.actions;
