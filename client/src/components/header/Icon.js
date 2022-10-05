import React from "react";

const Icon = ({ name }) => {
  return (
    <div className="text-gray-800 h-12 w-12 rounded-full font-medium p-2 focus:outline-none dark:bg-gray-700 dark:text-white dark:hover:bg-gray-500 dark:focus:ring-gray-800">
      <span className="material-symbols-outlined text-3xl h-8 w-8 flex justify-center items-center">
        {`${name}`}
      </span>
    </div>
  );
};

export default Icon;
