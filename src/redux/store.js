import { configureStore } from "@reduxjs/toolkit";

import currentChatReducer from "./slices/currentChatSlice";
import chatHistoryReducer from "./slices/chatHistorySlice";
import authSliceReducer from "./slices/authSlice";

const store = configureStore({
  reducer: {
    currentChat: currentChatReducer,
    chatHistory: chatHistoryReducer,
    auth: authSliceReducer
  },
});

export default store;
