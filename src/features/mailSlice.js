import { createSlice } from "@reduxjs/toolkit";

export const mailSlice = createSlice({ // to create a slice
  name: "mail",
  initialState: {
    isMessageOpen: false,
    selectedMessage: null,
  },

  reducers: {
    openMessage: (state) => { // to open the message
      state.isMessageOpen = true;
    },
    closeMessage: (state) => { // to close the message
      state.isMessageOpen = false;
    },
    selectMessage: (state, action) => { // to select the message
      state.selectedMessage = action.payload;
    },
  },
});

export const { openMessage, closeMessage, selectMessage } = mailSlice.actions; // to export the actions

export const selectisMessageOpen = (state) => state.mail.isMessageOpen; // to export the selector

export const selectSelectedMessage = (state) => state.mail.selectedMessage; // to export the selector

export default mailSlice.reducer; // to export the reducer
