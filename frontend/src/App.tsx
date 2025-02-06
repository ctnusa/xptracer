import { ApolloProvider } from "@apollo/client";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import client from "./apolloClient";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import NotFoundPage from "./components/NotFoundPage";
import ProtectedRoutes from "./components/ProtectedRoute";
import RegisterPage from "./components/RegisterPage";

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoutes/>}>
            <Route path="/" element={<HomePage/>} />
          </Route>
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="*" element={<NotFoundPage/>} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
