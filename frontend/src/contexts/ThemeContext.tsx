import { useAppDispatch } from "@/app/hooks";
import { themeSelector } from "@/features/preference/prefSelectors";
import { setTheme } from "@/features/preference/prefSlice";
import { createContext, useEffect, useState } from "react";

export interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const dispatch = useAppDispatch();

  const toggleTheme = () => {
    const currentTheme = localStorage.getItem("theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    // setIsDarkMode(newTheme === "dark" ? true : false);
    dispatch(setTheme(newTheme));
  };

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme") === "dark" ? "dark": "light";
    document.documentElement.setAttribute("data-theme", currentTheme);
    // setIsDarkMode(true);
    dispatch(setTheme(currentTheme));
  }, []);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
