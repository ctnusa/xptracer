import { createAsyncThunk } from "@reduxjs/toolkit";
import client from "../../apolloClient";
import { gql } from "@apollo/client";
import FetchMeQuery from "../../graphql/mutations/loginUser.graphql";

export const fetchMeAsync = createAsyncThunk("user/fetchme", async (_, thunkAPI) => {
  return thunkAPI.fulfillWithValue({
    username: "tamcn2603",
    firstname: "Chi Tam",
    lastname: "Nguyen",
    email: "cnguyen2603@berkeley.edu"
  });

  // try {
  //   const { data } = await client.mutate({
  //     mutation: gql`
  //       ${FetchMeQuery}
  //     `,
  //   });

  //   if (data?.ok) {
  //     return thunkAPI.fulfillWithValue(null);
  //   } else {
  //     return thunkAPI.rejectWithValue(data?.registerUser?.message);
  //   }
  // } catch (err) {
  //   return thunkAPI.rejectWithValue(`Register error:, ${err}`);
  // }
});
