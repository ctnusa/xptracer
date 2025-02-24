import { createSlice } from "@reduxjs/toolkit";
import { fetchMeAsync } from "./userThunks";

export interface UserState {
  username: string;
  email: string;
  firstname: string;
  lastname: string;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  username: "",
  email: "",
  firstname: "",
  lastname: "",
  loading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setFirstName: (state, action) => {
      state.firstname = action.payload;
    },
    setLastName: (state, action) => {
      state.lastname = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMeAsync.pending, (state) => {
      state.loading = true;
    }).addCase(fetchMeAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.firstname = action.payload.firstname;
      state.lastname = action.payload.lastname;
    }).addCase(fetchMeAsync.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    })
  },
});

export const { setUsername, setEmail, setFirstName, setLastName } =
  userSlice.actions;
export default userSlice.reducer;
