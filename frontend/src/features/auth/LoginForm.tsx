import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectError, selectLoading } from "./authSelectors";
import { loginAsync } from "./authThunks";

export const LoginForm: React.FC = () => {
  const [username, setUsername] = useState("tamcn2603");
  const [password, setPassword] = useState("@tamCn2222");
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
    <Card className="p-8 rounded-lg shadow-lg w-full max-w-md">
      <CardContent className="">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-foreground text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-sm text-foreground leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-foreground text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-sm text-foreground mb-1 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your password"
              required
            />
          </div>
          {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
          <div className="flex items-center justify-between">
            <Button type="submit" className="">
              Login
            </Button>
            <Link
              to="/forgot-password"
              className="text-blue-500 hover:text-blue-700 font-bold text-sm"
            >
              Forgot Password?
            </Link>
          </div>

          <div className="mt-4 text-center">
            <p className="text-foreground text-sm">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-blue-500 hover:text-blue-700 font-bold text-sm"
              >
                Register
              </Link>
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
