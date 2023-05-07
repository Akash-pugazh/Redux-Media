import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchUsers, addUser } from "../Store";
import { useThunk } from "../hooks/useThunk";
import Button from "./Button";
import Skeleton from "./Skeleton";
import UserListItem from "./UserListItem";

const UsersList = () => {
  const [doFetchUser, isLoadingUser, isLoadingUserError] = useThunk(fetchUsers);
  const [doAddUser, isAddedUser, isAddedUserError] = useThunk(addUser);

  useEffect(() => {
    doFetchUser();
  }, []);

  const { data } = useSelector(state => state.user);

  let content;
  if (isLoadingUser) {
    content = (
      <div>
        <Skeleton count={5} className="w-full h-10" />
      </div>
    );
  } else if (isLoadingUserError) {
    content = <div>Error Fetching Data..</div>;
  } else {
    content = data.map(user => {
      return <UserListItem key={user.id} user={user} />;
    });
  }

  const handleClick = () => {
    doAddUser();
  };

  return (
    <div>
      <div className="flex flex-row justify-between items-center m-2 mb-5">
        <h1 className="text-xl">Users</h1>
        <Button loading={isAddedUser} onClick={handleClick} success>
          + Add User
        </Button>
        {isAddedUserError && "Error Creating a user..."}
      </div>
      <div>{content}</div>
    </div>
  );
};

export default UsersList;
