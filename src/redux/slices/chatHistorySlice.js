import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  weeklyChat: [],
  monthlyChat: [],
};

const chatHistorySlice = createSlice({
  name: "chatHistory",
  initialState,
  reducers: {
    setWeeklyChat: (state, action) => {
      state.sevenDaysChat = { ...state.todayChat, ...action.payload };
    },
    setMonthlyChat: (state, action) => {
      state.thirtyDaysChat = { ...state.todayChat, ...action.payload };
    },
  },
});

export const { setWeeklyChat, setMonthlyChat } = chatHistorySlice.actions;

export default chatHistorySlice.reducer;
