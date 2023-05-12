import {
  useCreateAlbumMutation,
  useFetchAlbumsQuery,
  useDeleteAlbumMutation,
} from "../Store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import AlbumListItem from "./AlbumListItem";
const AlbumList = ({ user }) => {
  const { data, error, isFetching } = useFetchAlbumsQuery(user);
  const [createAlbum, createResults] = useCreateAlbumMutation();

  let content;
  if (isFetching) {
    content = <Skeleton className="h-10 w-full" count={3} />;
  } else if (error) {
    content = <div>Error Loading Albums...</div>;
  } else {
    content = data.map(album => {
      return <AlbumListItem key={album.id} album={album} />;
    });
  }

  const handleClick = () => {
    createAlbum(user);
  };

  return (
    <div>
      <div className="flex justify-between items-center p-5">
        <h5 className="font-semibold">Albums by {user.name}</h5>
        <Button loading={createResults.isLoading} onClick={handleClick} success>
          + Add Album
        </Button>
      </div>
      {content}
    </div>
  );
};

export default AlbumList;
