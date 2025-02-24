import { createSlice } from "@reduxjs/toolkit";
import { registerAsync, loginAsync, logoutAsync } from "./authThunks";

export interface AuthState {
  username: string;
  password: string;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  username: "",
  password: "",
  loading: false,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerAsync.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(registerAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(loginAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginAsync.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(logoutAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logoutAsync.fulfilled, (state) => {
        state.loading = false;
        state.username = "";
      })
      .addCase(logoutAsync.rejected, (state, action) => {
        console.log("logoutAsync.fulfilled");
        state.loading = false;
        state.error = action.error.message!;
      });
  },
});

export default authSlice.reducer;
