import { RootState } from "../../app/store";

export const selectUsername = (state: RootState) => state.user.username;
export const selectEmail = (state: RootState) => state.user.email;
export const selectFirstName = (state: RootState) => state.user.firstName;
export const selectLastName = (state: RootState) => state.user.lastName;
export const selectLoading = (state: RootState) => state.auth.loading;
export const selectError = (state: RootState) => state.auth.error;