import { configureStore } from "@reduxjs/toolkit";
import { UserReducer } from "./Slices/UserSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { albumsApi } from "./Apis/AlbumsApi";

export const store = configureStore({
  reducer: {
    user: UserReducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(albumsApi.middleware);
  },
});

setupListeners(store.dispatch);

export * from "./thunks/fetchUsers";
export * from "./thunks/addUser";
export * from "./thunks/deleteUser";
export { useFetchAlbumsQuery, useCreateAlbumMutation } from "./Apis/AlbumsApi";
