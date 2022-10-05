import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/actions/authAction";
import Avatar from "./Avatar";

const Menu = ({ setIsShowMenu }) => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);

  return (
    <div className="absolute right-0 top-[100%]">
      <div className="relative w-full max-w-2xl h-full md:h-auto">
        <div className="min-w-[280px] relative bg-white rounded-lg shadow dark:bg-gray-700 p-2">
          <div className="flex justify-start text-white font-medium cursor-default shadow-lg items-center gap-2 py-3 rounded-t border-b dark:border-gray-600">
            <Avatar url={auth.user.avatar} size="small" />
            Vuong Minh Truc
          </div>

          <div
            onClick={() => setIsShowMenu(false)}
            className="flex items-center py-1 space-x-2 rounded-b dark:border-gray-600"
          >
            <Link
              to={`/profile/${auth.user._id}`}
              className="w-full gap-2 flex items-center rounded-md relative text-gray-800 dark:bg-gray-700 dark:text-white font-medium p-2 focus:outline-none dark:hover:bg-gray-500 dark:focus:ring-gray-800 "
            >
              <span className="material-symbols-outlined text-3xl">
                manage_accounts
              </span>
              Profile
            </Link>
          </div>

          <div className="flex items-center py-2 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
            <Link
              to="/"
              onClick={() => dispatch(logout())}
              className="w-full gap-2 flex items-center rounded-md relative text-gray-800 dark:bg-gray-700 dark:text-white  font-medium p-2 focus:outline-none dark:hover:bg-gray-500 dark:focus:ring-gray-800 "
            >
              <span className="material-symbols-outlined text-3xl">logout</span>
              Logout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
