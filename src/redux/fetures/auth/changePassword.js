
import { apiSlice } from "../../api/apiSlice";

const changPassword = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        changPassword : builder.mutation({
            query: (data) => ({
                url: `auth/change-password`,
                method: "POST",
                body:  data
            })
        })
    })
})

export const {useChangPasswordMutation} = changPassword;
