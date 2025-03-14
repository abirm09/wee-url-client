import baseApi from "@/redux/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
    }),
    logOut: builder.mutation({
      query: (body) => ({
        url: "/auth/logout",
        method: "POST",
        body,
      }),
    }),
    emailVerifyRequest: builder.mutation({
      query: (body) => ({
        url: "/auth/email-verify-request",
        method: "POST",
        body,
      }),
    }),
    verifyOtp: builder.mutation({
      query: (body) => ({
        url: "/auth/verify-otp",
        method: "POST",
        body,
      }),
      invalidatesTags: ["profile"],
    }),
  }),
});

export const {
  useLoginMutation,
  useLogOutMutation,
  useEmailVerifyRequestMutation,
  useVerifyOtpMutation,
} = authApi;
