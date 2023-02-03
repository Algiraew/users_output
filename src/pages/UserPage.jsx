import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getPostsByUserId, getUser } from "../features/users.slice";

const UserPage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.user);
  const posts = useSelector((state) => state.users.posts);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getUser(id));
    dispatch(getPostsByUserId(id));
  }, [dispatch, id]);

  if (!user) {
    return <div>loading</div>;
  }
  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Все данные Пользователя</h1>
      <div className="container">
        <div className="w-100 px-1.5 py-1.5 mx-1 my-1">
          <h3 className="border-b-2 w-60 mb-3">{user.name}</h3>
          <h3 className="border-b-2 w-60 mb-3">{user.email}</h3>
          <h3 className="border-b-2 w-60 mb-3">{user.address.city}</h3>
          <h3 className="border-b-2 w-60 mb-3">{user.address.street}</h3>
          <h3 className="border-b-2 w-60 mb-3">{user.address.zipcode}</h3>
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-bold mb-6">
          Все публикации этого пользователя
        </h1>
        <div className="flex justify-center flex-wrap gap-2">
          {posts.map((post) => (
            <div className="border-[1px] border-black p-3 w-60" key={post.id}>
              <h3 className="font-bold">{post.title}</h3>
              <p className="">{post.body}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UserPage;
