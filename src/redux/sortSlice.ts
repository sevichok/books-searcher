import { createSlice } from "@reduxjs/toolkit";

const initialState: string = "relevance";

const sortsSlice = createSlice({
  name: "sorts",
  initialState,
  reducers: {
    changeSort: (_, action) => action.payload,
  },
});

export const { changeSort } = sortsSlice.actions;

export default sortsSlice.reducer;
