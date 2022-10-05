import React from "react";
import Avatar from "./header/Avatar";

const UserCard = ({ user, setIsSearch }) => {
  return (
    <div
      onClick={() => setIsSearch(false)}
      className="flex gap-4 p-2 justify-start rounded-md  items-center text-white hover:bg-gray-500"
    >
      <Avatar url={user.avatar} size="medium" />
      <div>
        <p className="text-xl">{user.username}</p>
        <p className="text-sm">{user.fullname}</p>
      </div>
    </div>
  );
};

export default UserCard;
