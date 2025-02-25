import { RootState } from "../../app/store";

export const selectUsername = (state: RootState) => state.user.username;
export const selectEmail = (state: RootState) => state.user.email;
export const selectFirstname = (state: RootState) => state.user.firstname;
export const selectLastname = (state: RootState) => state.user.lastname;
export const selectLoading = (state: RootState) => state.auth.loading;
export const selectError = (state: RootState) => state.auth.error;
