import React from "react";
import { RegisterForm } from "../features/auth/RegisterForm";

const RegisterPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
