import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from './authSlice';

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (data) => ({
                url: "/register",
                method: "POST",
                body: data,
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;

                    localStorage.setItem(
                        "auth",
                        JSON.stringify({
                            accessToken: result.data.token,
                            user: {email:arg.email},
                        })
                    );

                    dispatch(
                        userLoggedIn({
                            accessToken: result.data.token,
                            user: arg,
                        })
                    );
                } catch (err) {
                    // do nothing
                }
            },
        }),
        login: builder.mutation({
            query: (data) => ({
                url: "/login",
                method: "POST",
                body: data,
            }),

            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;

                    localStorage.setItem(
                        "auth",
                        JSON.stringify({
                            accessToken: result.data.token,
                            user: {email:arg.email},
                        })
                    );

                    dispatch(
                        userLoggedIn({
                            accessToken: result.data.token,
                            user: arg,
                        })
                    );
                } catch (err) {
                    
                }
            },
        }),
    }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
