import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../features/users.slice";

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <>
      <div className="w-60 m-auto">
        <input
          className="border-b-[1px] border-black p-1 w-60 my-2"
          type="text"
          autoComplete="off"
          placeholder="Поиск..."
        />
      </div>

      <div className="flex justify-between flex-wrap">
        {users.map((user) => (
          <div
            className="border border-black w-60 px-1.5 py-1.5 mx-1 my-1"
            key={user.id}
          >
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.address.street}</p>
            <p>{user.address.city}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Users;
