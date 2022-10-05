import React from "react";

const PageIcon = ({ name, idxActive, index }) => {
  return (
    <div className=" hover:bg-gray-700 px-4 py-1 rounded-md block text-white bg-primary-700 lg:bg-transparent lg:text-primary-700  dark:text-white">
      <span
        className={`material-symbols-outlined text-3xl ${
          idxActive === index ? "text-blue-500" : "text-white"
        } `}
      >
        {name}
      </span>
    </div>
  );
};

export default PageIcon;
