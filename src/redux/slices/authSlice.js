import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userLogin: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserLogin: (state, action) => {
      state.userLogin = action.payload;
    },
  },
});

export const { setUserLogin } = authSlice.actions;

export default authSlice.reducer;
