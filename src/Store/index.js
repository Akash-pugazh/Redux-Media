import { configureStore } from "@reduxjs/toolkit";
import { UserReducer } from "./Slices/UserSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { albumsApi } from "./Apis/AlbumsApi";
import { PhotosApi } from "./Apis/PhotosApi";
export const store = configureStore({
  reducer: {
    user: UserReducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
    [PhotosApi.reducerPath]: PhotosApi.reducer,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware()
      .concat(albumsApi.middleware)
      .concat(PhotosApi.middleware)
  },
});

setupListeners(store.dispatch);

export * from "./thunks/fetchUsers";
export * from "./thunks/addUser";
export * from "./thunks/deleteUser";
export {
  useFetchAlbumsQuery,
  useCreateAlbumMutation,
  useDeleteAlbumMutation,
} from "./Apis/AlbumsApi";

export {
  useFetchPhotosQuery,
  useAddPhotosMutation,
  useRemovePhotosMutation,
} from "./Apis/PhotosApi";
