import Button from "./Button";
import { useRemovePhotosMutation } from "../Store";
const PhotosListItem = ({ photo }) => {
  const handleClick = () => {
    useRemovePhotosMutation(photo);
  };
  return (
    <div className="relative">
      <img src={photo.url} />
      <Button
        onClick={handleClick}
        danger
        className="opacity-0 rounded-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:opacity-60"
      >
        Delete
      </Button>
    </div>
  );
};

export default PhotosListItem;
