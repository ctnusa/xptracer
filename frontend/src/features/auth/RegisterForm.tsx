import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectError, selectLoading } from "./authSelectors";
import { registerAsync } from "./authThunks";

export const RegisterForm = () => {
  const [username, setUsername] = useState("tamcn2603");
  const [password, setPassword] = useState("@tamCn2222");
  const [email, setEmail] = useState("cnguyen2603@berkeley.edu");
  const [firstname, setFirstname] = useState("Chi Tam");
  const [lastname, setLastName] = useState("Nguyen");
  
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const error = useAppSelector(selectError);
  const loading = useAppSelector(selectLoading); // TODO: create a loading button later

  /**
   * Handles the form submission for registering a user.
   *
   * Prevents the default form submission behavior, dispatches the registerAsync
   * action with the provided username, password, firstname, lastname, and email,
   * and navigates to the login page on successful registration.
   *
   * @param e - The form event triggered by the submission.
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await dispatch(
      registerAsync({ username, password, firstname, lastname, email })
    );
    if (registerAsync.fulfilled.match(result)) {
      navigate("/login");
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label
            className="block text-gray-700 text-sm font-bold mb-0.5"
            htmlFor="username"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
            required
          />
        </div>

        <div className="mb-3">
          <label
            className="block text-gray-700 text-sm font-bold mb-0.5"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
            required
          />
        </div>

        <div className="mb-3">
          <label
            className="block text-gray-700 text-sm font-bold mb-0.5"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
            required
          />
        </div>

        <div className="mb-3">
          <label
            className="block text-gray-700 text-sm font-bold mb-0.5"
            htmlFor="firstname"
          >
            First name
          </label>
          <input
            type="text"
            id="firstname"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
            required
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-0.5"
            htmlFor="lastname"
          >
            Last name
          </label>
          <input
            type="text"
            id="lastname"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline text-sm"
            required
          />
        </div>

        {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};
