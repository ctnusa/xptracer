import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  selectError,
  selectLoading
} from "./authSelectors";
import { loginAsync } from "./authThunks";

export const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectLoading); // TODO: create a loading button later
  const error = useAppSelector(selectError);

  /**
   * Handles the form submission for logging in a user.
   *
   * Prevents the default form submission behavior, dispatches the loginAsync
   * action with the provided username and password, and navigates to the
   * homepage on successful login.
   *
   * @param e - The form event triggered by the submission.
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await dispatch(loginAsync({ username, password }));
    if (loginAsync.fulfilled.match(result)) {
      navigate("/");
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-sm text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your password"
            required
          />
        </div>
        {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 text-sm rounded focus:outline-none focus:shadow-outline"
          >
            Login
          </button>
          <button
            type="button"
            className="text-blue-500 hover:text-blue-700 font-bold text-sm"
            onClick={() => navigate("/forgot-password")}
          >
            Forgot Password?
          </button>
        </div>

        <div className="mt-4 text-center">
          <p className="text-gray-700 text-sm">
            Don't have an account?{" "}
            <button
              type="button"
              className="text-blue-500 hover:text-blue-700 font-bold"
              onClick={() => navigate("/register")}
            >
              Register
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};
