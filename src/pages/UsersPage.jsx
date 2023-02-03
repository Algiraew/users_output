import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getUsers } from "../features/users.slice";

const UsersPage = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <form className="w-60 m-auto relative">
        <input
          className="border-b-[1px] border-black p-1 w-60 my-2"
          type="text"
          autoComplete="off"
          placeholder="Поиск..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>

      <div className="flex justify-between flex-wrap">
        {filteredUsers.map((user) => (
          <Link to={String(user.id)} key={user.id}>
            <div className="border border-black w-60 px-1.5 py-1.5 mx-1 my-1">
              <p>{user.name}</p>
              <p>{user.email}</p>
              <p>{user.address.street}</p>
              <p>{user.address.city}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default UsersPage;
