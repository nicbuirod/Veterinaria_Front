import { createSlice } from "@reduxjs/toolkit";

export const userControlSlice = createSlice({
  name: "owner",
  initialState: {
    list: [],
  },
  reducers: {
    setOwnerState: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setOwnerState } = userControlSlice.actions;

export default userControlSlice.reducer;
