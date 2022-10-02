import React from "react";

const Loading = () => {
  return (
    <div className="bg-[#0008] text-white fixed flex w-full h-screen text-center top-0 left-0 z-50 justify-center items-center">
      <svg
        width="205"
        height="250"
        viewBox="0 0 40 50"
        className="text-[5px] font-medium uppercase tracking-widest animate-animation-text"
      >
        <polygon
          stroke="#fff"
          strokeWidth="1"
          fill="none"
          points="20,1 40,40 1,40"
          className="animate-animation-dash polygon"
        />
        <text fill="#fff" x="5" y="47">
          Loading
        </text>
      </svg>
    </div>
  );
};

export default Loading;
