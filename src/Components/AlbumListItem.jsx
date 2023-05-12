import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import { useDeleteAlbumMutation } from "../Store";

const AlbumListItem = ({ album }) => {
  const [deleteAlbum, deleteResults] = useDeleteAlbumMutation();
  const header = (
    <>
      <Button
        loading={deleteResults.isLoading}
        onClick={() => deleteAlbum(album)}
        className="mr-5 rounded-md"
        danger
      >
        Delete
      </Button>
      {album.title}
    </>
  );
  return <ExpandablePanel header={header}>Photos!!!</ExpandablePanel>;
};

export default AlbumListItem;
