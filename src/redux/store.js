import { configureStore } from "@reduxjs/toolkit";

import currentChatReducer from "./slices/currentChatSlice";
import chatHistoryReducer from "./slices/chatHistorySlice";

const store = configureStore({
  reducer: {
    currentChat: currentChatReducer,
    chatHistory: chatHistoryReducer,
  },
});

export default store;
