import { apiSlice } from "../../api/apiSlice";

const verifyEmail = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        verifyEmail: builder.mutation({
            query: (data) => ({
                url: `/auth/verify-email`,
                method: "POST",
                body: data
            })
        })
    })
})

export const {useVerifyEmailMutation} = verifyEmail;