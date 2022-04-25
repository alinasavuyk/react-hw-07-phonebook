import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://6261879e73499e9af90df909.mockapi.io/api/v1' }),
  tagTypes:['Contacts'],
  endpoints: builder => ({
    feathContacts: builder.query({
      query: () => '/contact',
      providesTags: ['Contacts']
    }),
    deleteContacts:builder.mutation({
      query: (contactId) =>( {
        url: `/contact/${contactId}`,
        method: 'DELETE',

      }),
      invalidatesTags: ['Contacts'],
    }),
    createContacts:builder.mutation({
      query: (newContacts) =>( {
        url: `/contact`,
        method: 'POST',
        body: newContacts, 

      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});


export const {
  useFeathContactsQuery,
  useDeleteContactsMutation,
  useCreateContactsMutation,
} = contactApi;




  