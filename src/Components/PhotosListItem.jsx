import { useRemovePhotosMutation } from "../Store";
import Button from "./Button";
const PhotosListItem = ({ photo }) => {
  const [removePhoto, removePhotoResults] = useRemovePhotosMutation()
  const handleClick = () => {
    removePhoto(photo)
  }

  return (
    <div className="relative h-40 min-w-fit">
      <img src={photo.url} className="h-full w-full" />
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
