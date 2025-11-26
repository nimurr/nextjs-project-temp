

import { apiSlice } from "../../api/apiSlice";

const signUp = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        signUp: builder.mutation({
            query: (data) => ({
                url: `/auth/register`,
                method: "POST",
                body: data
            })
        })
    })
})

export const {useSignUpMutation} = signUp;