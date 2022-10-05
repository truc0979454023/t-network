import React, { useEffect, useState } from "react";

const Toast = ({ msg, handleShow, color }) => {
  const [number, setNumber] = useState(0);

  const { background, text } = color;

  useEffect(() => {
    const count = setInterval(() => {
      setNumber((number) => number + 50);
    }, 10);
    if (number > 10000) {
      handleShow();
      clearInterval(count);
    }
    return () => {
      return clearInterval(count);
    };
  }, [number]);

  return (
    <div className="fixed top-8 right-2  w-full max-w-xs bg-white rounded-lg shadow p-4 z-50 ">
      <div
        id="toast-success"
        className="flex items-center mb-4 text-gray-500"
        role="alert"
      >
        <div
          className={`inline-flex flex-shrink-0 justify-center items-center w-8 h-8 ${background} ${text} rounded-lg`}
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Check icon</span>
        </div>
        <div className="ml-3 text-sm font-normal">{msg}</div>
        <button
          onClick={handleShow}
          type="button"
          className="ml-auto -mx-1.5 -my-1.5 bg-white text-red-500 hover:text-red-600 rounded-lg focus:ring-2 focus:ring-red-300 p-1.5 hover:bg-red-100 inline-flex h-8 w-8"
          data-dismiss-target="#toast-success"
          aria-label="Close"
        >
          <span className="sr-only">Close</span>
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
        <div
          className={`${background} h-1.5 rounded-full`}
          style={{ width: `${number / 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Toast;
