import { apiSlice } from "../../api/apiSlice";


const demoData = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getDemoData: builder.query({
            query: () => ({
                url: `/posts`,
                method: "GET",
            }),
        }),
    }),
});

export const { useGetDemoDataQuery } = demoData;

