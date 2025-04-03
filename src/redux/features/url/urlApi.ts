import baseApi from "@/redux/baseApi";

const urlApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createUrl: builder.mutation({
      query: (body) => ({
        url: "/url",
        method: "POST",
        body,
      }),
      invalidatesTags: ["url"],
    }),
    allURLCustomer: builder.query({
      query: () => `/url/customer`,
      providesTags: () => ["url"],
    }),
    allTagsForCustomer: builder.query({
      query: () => `/url/tags/customer`,
      providesTags: () => ["url"],
    }),
  }),
});

export const {
  useCreateUrlMutation,
  useAllTagsForCustomerQuery,
  useAllURLCustomerQuery,
} = urlApi;
