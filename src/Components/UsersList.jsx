import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, addUser } from "../Store";
import Button from "./Button";
import Skeleton from "./Skeleton";
const UsersList = () => {
  const dispatch = useDispatch();

  const { isLoading, data, error } = useSelector(state => state.user);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (isLoading) {
    return (
      <div>
        <Skeleton count={5} className="w-full h-10" />
      </div>
    );
  }

  if (error) {
    return <div>Error Fetching Data..</div>;
  }

  const renderUsers = data.map(user => {
    return (
      <div key={user.id} className="mb-2 border rounded">
        <div className="flex p-3 justify-between items-center cursor-pointer">
          {user.name}
        </div>
      </div>
    );
  });

  const handleClick = () => {
    dispatch(addUser());
  };

  return (
    <div>
      <div className="flex flex-row justify-between items-center m-2 mb-5">
        <h1 className="text-xl">Users</h1>
        <Button onClick={handleClick} success className="rounded-md">
          + Add User
        </Button>
      </div>
      <div>{renderUsers}</div>
    </div>
  );
};

export default UsersList;
