import { useSelector } from "react-redux";
import { useFetchPhotosQuery, useAddPhotosMutation } from "../Store";
import Button from "./Button";
useSelector;
import Skeleton from "./Skeleton";
import PhotosListItem from "./PhotosListItem";
const PhotosList = ({ album }) => {
  const { data, isFetching, isError } = useFetchPhotosQuery(album);
  const [addPhotos, addPhotosResult] = useAddPhotosMutation();

  console.log(data);

  const handleClick = () => {
    addPhotos(album);
  };

  let content;
  if (isFetching) {
    content = <Skeleton />;
  } else if (isError) {
    content = <>Error displaying Photos</>;
  } else {
    content = data.map(el => {
      return <PhotosListItem key={el.id} photo={el} />;
    });
  }

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
      <div className="flex gap-1 overflow-x-auto">{content}</div>
    </div>
  );
};

export default PhotosList;
