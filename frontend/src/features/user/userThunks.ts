import { createAsyncThunk } from "@reduxjs/toolkit";
import client from "../../apolloClient";
import { gql } from "@apollo/client";
import FetchMeQuery from "../../graphql/queries/fetchMe.graphql";

export const fetchMeAsync = createAsyncThunk(
  "user/fetchme",
  async (_, thunkAPI) => {
    return client
      .query({
        query: gql`
          ${FetchMeQuery}
        `,
        context: {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      })
      .then(({ data }) => {
        return thunkAPI.fulfillWithValue({
          username: data.me.username,
          firstname: data.me.firstname,
          lastname: data.me.lastname,
          email: data.me.email,
        });
      })
      .catch((err) => {
        return thunkAPI.rejectWithValue(`Register error:, ${err}`);
      });
  }
);
