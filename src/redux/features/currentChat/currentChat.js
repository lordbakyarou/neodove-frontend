import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const currentChatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    openChat: (state, action) => action.payload,
    removeChat: (state, action) => null,
  },
});

export const { openChat } = currentChatSlice.actions;

export default currentChatSlice.reducer;
