import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";

const albumsApi = createApi({
  reducerPath: "album",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  endpoints(builder) {
    return {
      fetchAlbums: builder.query({
        query: user => {
          return {
            url: "/albums",
            params: {
              userId: user.id,
            },
            method: "GET",
          };
        },
      }),

      createAlbum: builder.mutation({
        query: user => {
          return {
            url: "/albums",
            body: {
              title: faker.commerce.productName(),
              userId: user.id,
            },
            method: "POST",
          };
        },
      }),
    };
  },
});

export const { useFetchAlbumsQuery, useCreateAlbumMutation } = albumsApi;
export { albumsApi };
