import React, { useEffect, useState } from "react";

const Avatar = ({ url, size }) => {
  const [number, setNumber] = useState(8);
  useEffect(() => {
    if (size === "small") {
      setNumber(8);
    }
    if (size === "medium") {
      setNumber(12);
    }
    if (size === "big") {
      setNumber(16);
    }
  }, [size]);
  return (
    <div
      className={`text-gray-800 h-${number} w-${number} dark:bg-gray-700 rounded-full focus:outline-none`}
    >
      <img src={url} alt={url} className="h-full w-full rounded-full" />
    </div>
  );
};

export default Avatar;
