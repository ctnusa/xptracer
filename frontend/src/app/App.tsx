import { SidebarProvider } from "@/components/ui/sidebar";
import { ApolloProvider } from "@apollo/client";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import client from "../apolloClient";
import { ThemeProvider } from "../contexts/ThemeContext";
import { ExpensePage } from "../pages/ExpensePage";
import { Layout } from "../pages/Layout";
import LoginPage from "../pages/LoginPage";
import { MonthPage } from "../pages/MonthPage";
import NotFoundPage from "../pages/NotFoundPage";
import ProtectedRoutes from "../pages/ProtectedRoute";
import RegisterPage from "../pages/RegisterPage";
import { Settings } from "../pages/Settings";
import { YearPage } from "../pages/YearPage";
import { store } from "./store";

const App: React.FC = () => {
  // Set font size from local storage
  const fontSize = localStorage.getItem("font-size");
  if (fontSize) {
    const fontSize = getComputedStyle(
      document.documentElement
    ).getPropertyValue(
      localStorage.getItem("font-size") || "xptracer-font-size-xs"
    );
    document.documentElement.style.setProperty("font-size", fontSize);
  }

  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <ThemeProvider>
          <SidebarProvider
            style={
              {
                "--sidebar-width": "14rem",
                "--sidebar-width-mobile": "20rem",
              } as React.CSSProperties
            }
            className="flex justify-center items-center h-screen"
          >
            <BrowserRouter>
              <Routes>
                <Route element={<ProtectedRoutes />}>
                  <Route path="/" element={<Layout />}>
                    <Route index element={<YearPage />} />
                    <Route path="month" element={<MonthPage />} />
                    <Route path="expense" element={<ExpensePage />} />
                    <Route path="settings" element={<Settings />} />
                  </Route>
                </Route>
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </BrowserRouter>
          </SidebarProvider>
        </ThemeProvider>
      </ApolloProvider>
    </Provider>
  );
};

export default App;
