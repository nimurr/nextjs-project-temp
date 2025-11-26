import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import url from "./baseUrl";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: url,
    prepareHeaders: (headers, { getState }) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
        const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        headers.set("X-Time-Zone", timeZone);
      }
      return headers;
    },


  }),
  tagTypes: ["Users" , "Profile"],

  endpoints: () => ({}),
});