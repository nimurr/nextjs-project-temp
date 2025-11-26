import { apiSlice } from "../../api/apiSlice";

const forgotPassword = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        forgotPassword : builder.mutation({
            query: (data) => ({
                url: `/auth/forgot-password`,
                method: "POST",
                body:  data
            })
        })
    })
})

export const {useForgotPasswordMutation} = forgotPassword;