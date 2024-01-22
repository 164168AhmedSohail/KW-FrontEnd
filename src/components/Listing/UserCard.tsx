import React from "react";
import { User } from "../../types/types";

interface UserCardProps {
  user: User;
  onClick: () => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onClick }) => {
  return (
    <div
      className="border p-4 mb-4 flex items-center"
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <img
        className="w-12 h-12 rounded-full mr-4"
        src={user.picture.thumbnail}
        alt={`Thumbnail of ${user.name.first} ${user.name.last}`}
      />
      <div>
        <p className="font-bold">{`${user.name.title} ${user.name.first} ${user.name.last}`}</p>
        <p>{`Gender: ${user.gender}`}</p>
        <p>{`Email: ${user.email}`}</p>
      </div>
    </div>
  );
};

export default UserCard;
