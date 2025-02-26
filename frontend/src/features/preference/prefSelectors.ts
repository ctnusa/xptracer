import { RootState } from "@/app/store";

export const languageSelector = (state: RootState) => state.pref.language;
export const notificationsSelector = (state: RootState) => state.pref.notifications;
export const themeSelector = (state: RootState) => state.pref.theme;
export const currencySelector = (state: RootState) => state.pref.currency;