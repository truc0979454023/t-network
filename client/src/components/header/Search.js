import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchUser } from "../../redux/actions/userAction";
import { Link } from "react-router-dom";
import UserCard from "../UserCard";
import Icon from "./Icon";

const Search = ({ setIsSearch }) => {
  const [search, setSearch] = useState("");

  const { auth, user } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchUser(search, auth.token));
  }, [search, auth.token, dispatch]);

  return (
    <div className="px-4 lg:px-6 w-full md:w-fit dark:bg-gray-700 fixed top-0 left-0 p-2.5">
      <div className="flex gap-4 ">
        <button>
          <Icon name="arrow_back" />
        </button>
        <div className="relative w-full">
          <div className="flex items-center h-12 w-12 absolute inset-y-0 left-0 pl-3 rounded-full">
            <span className="material-symbols-outlined text-white z-10">
              search
            </span>
          </div>
          <input
            type="text"
            name="search"
            autoComplete="off"
            value={search}
            onChange={(e) =>
              setSearch(e.target.value.toLowerCase().replace(/ /g, ""))
            }
            className="block p-4 h-12 pl-12  w-full md:pl-10 text-sm text-gray-900 outline-none md:min-w-[240px] bg-gray-50 rounded-full border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </div>
      <div className="text-white mt-2 text-lg font-medium">Result:</div>
      {user.length > 0 && (
        <div className="mt-4">
          {user.map((u) => (
            <Link key={u._id} to={`profile/${u._id}`}>
              <UserCard user={u} setIsSearch={setIsSearch} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
