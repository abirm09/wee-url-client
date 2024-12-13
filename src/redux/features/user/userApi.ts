import baseApi from "@/redux/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (body) => ({
        url: "/user",
        method: "POST",
        body,
      }),
    }),
    profile: builder.query({
      query: () => `/user/profile`,
      providesTags: () => ["profile"],
    }),
  }),
});

export const { useProfileQuery, useSignUpMutation } = authApi;
