import { createSlice } from "@reduxjs/toolkit";
import themeActions from "../../actions/theme";

const initialState = { theme: "light" };

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    ...themeActions,
  },
});

const { actions, reducer } = themeSlice;

export const { toggleTheme } = actions;

export default reducer;
