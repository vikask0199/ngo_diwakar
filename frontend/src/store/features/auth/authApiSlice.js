import { apiSlice } from "../../baseApiSlice" 

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        tagTypes: ['refresh-token', 'login'],
        login: builder.mutation({
            query: credentials => ({
                url: '/auth/login',
                method: 'POST',
                body: credentials.payload,
                // providesTags: ['login']
            })
        }),
        refreshToken: builder.query({
            query: () => ({
                url: '/auth/refresh-token',
                method: 'GET',
                // providesTags: ['refresh-token'],
            })
        }),
        logout: builder.mutation({
            query: () => ({
                url: '/auth/logout',
                method: 'DELETE',
                // invalidatesTags: ['refresh-token','login'],
            })
        }),

        signup: builder.mutation({
            query: (data) => ({
                url: '/auth/signup',
                method: 'POST',
                body: data.payload
            }),
        }),

        //reset password link sender
        resetPassword: builder.mutation({
            query: (data) => ({
                url: `/auth/reset-password-request`,
                method: 'POST',
                body: data.payLoad
            }),
        }),

        emailVerification: builder.mutation({
            query: (data) => ({
                url: `/auth/verify-email`,
                method: 'POST',
                body: data.payLoad
            }),
        }),

        resetPasswordMain: builder.mutation({
            query: (data) => ({
                url: `/auth/reset-password`,
                method: 'POST',
                body: data.payLoad,
            })
        }),
    })
})

export const {
    useLoginMutation,
    useLogoutMutation,
    useRefreshTokenQuery,
    useSignupMutation,
    useEmailVerificationMutation,
    useResetPasswordMutation,
    useResetPasswordMainMutation,
} = authApiSlice

