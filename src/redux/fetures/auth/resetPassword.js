

import { apiSlice } from "../../api/apiSlice";

const resetPassword = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        resetPassword: builder.mutation({
            query: (data) => ({
                url: `/auth/reset-password`,
                method: "POST",
                body:  data
            })
        })
    })
})

export const {useResetPasswordMutation} = resetPassword;