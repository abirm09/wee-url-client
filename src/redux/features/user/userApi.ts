import baseApi from "@/redux/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    profile: builder.query({
      query: () => `/user/profile`,
      providesTags: () => ["profile"],
    }),
  }),
});

export const { useProfileQuery } = authApi;
