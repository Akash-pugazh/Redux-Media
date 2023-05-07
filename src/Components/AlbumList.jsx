import { useCreateAlbumMutation, useFetchAlbumsQuery } from "../Store";
import ExpandablePanel from "./ExpandablePanel";
import Skeleton from "./Skeleton";
import Button from "./Button";
const AlbumList = ({ user }) => {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);
  const [createAlbum, results] = useCreateAlbumMutation();

  let content;
  if (isLoading) {
    content = <Skeleton times={2} />;
  } else if (error) {
    content = <div>Error Loading Photos...</div>;
  } else {
    content = data.map(album => {
      let header = <div>{album.title}</div>;
      return (
        <ExpandablePanel key={album.id} header={header}>
          Photos!!!
        </ExpandablePanel>
      );
    });
  }

  console.log(data, error, isLoading);
  return (
    <div>
      <div className="flex justify-between items-center p-5">
        Albums by {user.name}
        <Button onClick={() => createAlbum(user)} success loading={isLoading}>
          + Add Album
        </Button>
      </div>
      <div>{content}</div>
    </div>
  );
};

export default AlbumList;
