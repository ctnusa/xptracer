import { ApolloProvider } from "@apollo/client";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import client from "./apolloClient";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProtectedRoutes from "./pages/ProtectedRoute";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard";
import Income from "./pages/IncomePage";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Settings } from "./pages/Settings";

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<ProtectedRoutes />}>
              <Route path="/" element={<HomePage />}>
                <Route index element={<Dashboard />} />
                <Route path="income" element={<Income />} />
                <Route path="settings" element={<Settings />} />
              </Route>
            </Route>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
