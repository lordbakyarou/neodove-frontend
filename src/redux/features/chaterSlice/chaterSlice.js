import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const chatterSlice = createSlice({
  name: "chatters",
  initialState,
  reducers: {
    addChatters: (state, action) => action.payload,
  },
});

export const { addChatters } = chatterSlice.actions;

export default chatterSlice.reducer;
