import { createSlice } from "@reduxjs/toolkit";

export interface PrefState {
  theme: string;
  notifications: boolean;
  language: string;
  currency: string;
}

const prefState: PrefState = {
  theme: "light",
  notifications: true,
  language: "english",
  currency: "USD",
};

export const prefSlice = createSlice({
  name: "pref",
  initialState: prefState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setNotifications: (state, action) => {
      state.notifications = action.payload;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setCurrency: (state, action) => {
      state.currency = action.payload;
    },
  },
});

export const { setTheme, setNotifications, setLanguage } = prefSlice.actions;
export default prefSlice.reducer;
