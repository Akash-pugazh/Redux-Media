import { useSelector } from "react-redux";
import { useFetchPhotosQuery, useAddPhotosMutation } from "../Store";
import Button from "./Button";
useSelector;
import PhotosListItem from "./PhotosListItem";
const PhotosList = ({ album }) => {
  useFetchPhotosQuery(album);
  const [addPhotos, addPhotosResult] = useAddPhotosMutation();

  const { photos } = useSelector(state => state);
  console.log(photos)

  const handleClick = () => {
    addPhotos(album);
  };

  return (
    <div>
      <div className="flex justify-between items-center p-3 ">
        <span className="font-semibold">Photos in {album.title}</span>
        <Button
          loading={addPhotosResult.isLoading}
          success
          onClick={handleClick}
        >
          + Add Photos
        </Button>
      </div>
      <PhotosListItem />
    </div>
  );
};

export default PhotosList;
