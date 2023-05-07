import { GoTrashcan } from "react-icons/go";
import { deleteUser } from "../Store";
import { useThunk } from "../hooks/useThunk";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import AlbumList from "./AlbumList";

const UserListItem = ({ user }) => {
  const [doDeleteUser, isDeletedUser, isDeletedUserError] =
    useThunk(deleteUser);

  const handleClick = () => {
    doDeleteUser(user);
  };

  const header = (
    <>
      <Button loading={isDeletedUser} onClick={handleClick}>
        <GoTrashcan />
      </Button>
      {isDeletedUserError && <div>Error Deleting User...</div>}
      {user.name}
    </>
  );

  return (
    <ExpandablePanel user={user} header={header}>
      <AlbumList user={user} />
    </ExpandablePanel>
  );
};

export default UserListItem;
