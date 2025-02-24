import { gql } from "@apollo/client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import client from "../../apolloClient";
import LoginUserMutation from "../../graphql/mutations/loginUser.graphql";
import LogoutUserMutation from "../../graphql/mutations/logoutUser.graphql";
import RegisterUserMutation from "../../graphql/mutations/registerUser.graphql";
import { fetchMeAsync } from "../user/userThunks";

export const registerAsync = createAsyncThunk(
  "auth/register",
  async (
    credentials: {
      firstname: string;
      lastname: string;
      username: string;
      email: string;
      password: string;
    },
    thunkAPI
  ) => {
    try {
      const { data } = await client.mutate({
        mutation: gql`
          ${RegisterUserMutation}
        `,
        variables: credentials,
      });

      if (data?.registerUser?.ok) {
        return thunkAPI.fulfillWithValue(null);
      } else {
        return thunkAPI.rejectWithValue(data?.registerUser?.message);
      }
    } catch (err) {
      return thunkAPI.rejectWithValue(`Register error:, ${err}`);
    }
  }
);

export const loginAsync = createAsyncThunk(
  "auth/login",
  async (credentials: { username: string; password: string }, thunkAPI) => {
    try {
      const { data } = await client.mutate({
        mutation: gql`
          ${LoginUserMutation}
        `,
        variables: credentials,
      });

      if (data?.loginUser?.ok && data?.loginUser?.token) {
        localStorage.setItem("token", data.loginUser.token);
        await thunkAPI.dispatch(fetchMeAsync());
        return thunkAPI.fulfillWithValue(null);
      } else {
        return thunkAPI.rejectWithValue(data?.loginUser?.message!!);
      }
    } catch (err) {
      return thunkAPI.rejectWithValue("An error occurred during login.");
    }
  }
);

export const logoutAsync = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      const { data } = await client.mutate({
        mutation: gql`${LogoutUserMutation}`,
      });

      if (data?.logoutUser?.ok) {
        localStorage.removeItem("token");
        return thunkAPI.fulfillWithValue(null);
      } else {
        return thunkAPI.rejectWithValue("Unable to logout");
      }
    } catch (err) {
      return thunkAPI.rejectWithValue(`Logout error:, ${err}`);
    }
  }
);
