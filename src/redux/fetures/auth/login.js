

import { apiSlice } from "../../api/apiSlice";

const login = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (loginData) => ({
                url: `/auth/login`,
                method: "POST",
                body: loginData
            })
        })
    })
})

export const {useLoginMutation} = login;