import type { Action, ThunkAction } from "@reduxjs/toolkit";
import { combineSlices, configureStore } from "@reduxjs/toolkit";

import { prefSlice } from "@/features/preference/prefSlice";
import { authSlice } from "@/features/auth/authSlice";
import { userSlice } from "@/features/user/userSlice";

const rootReducer = combineSlices(authSlice, userSlice, prefSlice);

export const store = configureStore({
  reducer: rootReducer,
});

export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
