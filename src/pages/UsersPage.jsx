import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getUsers } from "../features/users.slice";
import Pagination from "../components/Pagination";

const UsersPage = () => {
  const dispatch = useDispatch();
  const { users, totalCount, perPage } = useSelector((state) => state.users);
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pages = totalCount / perPage;

  useEffect(() => {
    dispatch(getUsers(currentPage));
  }, [dispatch, currentPage]);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  const chengeSelect = (e) => {
    setCity(e.target.value);
  };

  const filteredUsersByCity = filteredUsers.filter(
    (item) => item.address.city !== city
  );

  return (
    <>
      <form className="w-60 m-auto flex">
        <input
          className="border-b-[1px] border-black p-1 w-60 my-2 mr-10"
          type="text"
          autoComplete="off"
          placeholder="Поиск..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={city} onChange={(e) => chengeSelect(e)}>
          {users.map((cities) => (
            <option key={cities.id}>{cities.address.city}</option>
          ))}
        </select>
      </form>

      <div className="flex justify-between flex-wrap">
        {filteredUsersByCity.map((user) => (
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
      <Pagination
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
};

export default UsersPage;
