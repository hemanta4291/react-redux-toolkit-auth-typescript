import { apiSlice } from "../api/apiSlice";

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        users: builder.query({
            query: (page) => ({
                url: `/users?page=${page}`,
                method: "GET"
            }),
        }),
    }),
});

export const { useUsersQuery } = authApi;
