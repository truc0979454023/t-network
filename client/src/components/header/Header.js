import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { changeTheme } from "../../redux/actions/themeAction";
import Avatar from "./Avatar";
import Icon from "./Icon";
import Menu from "./Menu";
import PageIcon from "./PageIcon";
import Search from "./Search";

const Header = () => {
  const navbars = [
    { name: "Home", icon: "Home", link: "" },
    { name: "Send", icon: "send", link: "message" },
    { name: "Explore", icon: "explore", link: "discover" },
  ];

  const [isShowMenu, setIsShowMenu] = useState(false);
  const [idxActive, setIdxActive] = useState(-1);
  const [isSearch, setIsSearch] = useState(false);

  const dispatch = useDispatch();
  const { auth, theme } = useSelector((state) => state);

  useEffect(() => {
    const app = document.querySelector(".App");
    app.addEventListener("click", () => {
      setIsShowMenu(false);
      // setIsSearch(false);
    });
    return () =>
      app.removeEventListener("click", () => {
        // setIsShowMenu(false);
      });
  }, []);

  const handleActive = (idx) => {
    setIdxActive(idx);
  };
  console.log(isShowMenu);

  return (
    <header>
      <nav className="border-gray-200 px-4 lg:px-6 py-2.5  dark:bg-gray-800">
        <div className="flex justify-between gap-4 items-center mx-auto max-w-screen-xl">
          <div className="flex gap-4">
            <Link to="/" className="flex items-center">
              <Avatar
                url="https://res.cloudinary.com/nomame/image/upload/v1623594323/samples/animals/kitten-playing.gif"
                size="medium"
              />
            </Link>
            <div className="relative" onClick={() => setIsSearch(true)}>
              <div className="flex items-center h-12 w-12 absolute inset-y-0 left-0 pl-3 cursor-pointer md:cursor-default md:border-none  focus:ring-blue-500 focus:border-blue-500 bg-gray-700 md:dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 rounded-full dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:hover:bg-gray-500 md:dark:hover:bg-transparent">
                <span className="material-symbols-outlined text-white ">
                  search
                </span>
              </div>
              <div
                type="text"
                className="md:block p-4 h-12 hidden md:w-full md:pl-10 text-sm text-gray-900 outline-none md:min-w-[240px] bg-gray-50 rounded-full border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              />
            </div>
          </div>
          {/* center nav */}
          <div className="hidden md:flex justify-between items-center gap-5 w-full mx-auto ">
            <ul className="flex w-full justify-center mx-auto font-medium ">
              {navbars.map((item, index) => (
                <li key={index} onClick={() => handleActive(index)}>
                  <Link to={item.link} aria-current="page">
                    <PageIcon
                      name={item.icon}
                      index={index}
                      idxActive={idxActive}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* right - nav */}
          <div className="flex gap-4 items-center lg:order-2">
            <Link to="/notify">
              <Icon path="notify" name="notifications" img="" />
            </Link>

            <button onClick={() => dispatch(changeTheme(theme))}>
              <Icon name={theme ? "light_mode" : "dark_mode"} />
            </button>
            <div className="relative flex items-center">
              <button
                type="button"
                onClick={() => {
                  setIsShowMenu(true);
                }}
              >
                <Avatar url={auth.user.avatar} size="medium" />
              </button>
              <div onClick={(e) => e.stopPropagation()}>
                {isShowMenu && <Menu setIsShowMenu={setIsShowMenu} />}
              </div>
            </div>
          </div>
        </div>
      </nav>
      {isSearch && <Search setIsSearch={setIsSearch} />}
    </header>
  );
};

export default Header;
