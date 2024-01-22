import React from "react";
import { User } from "../../types/types";

interface UserProfileDetailsProps {
  user: User;
}

const UserProfileDetails: React.FC<UserProfileDetailsProps> = ({ user }) => {
  const formatDateOfBirth = (date: string) => {
    const dob = new Date(date);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return dob.toLocaleDateString(undefined, options);
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <div className="flex items-center mb-4">
        <img
          src={user.picture.large}
          alt={`${user.name.first} ${user.name.last}`}
          className="w-16 h-16 rounded-full mr-4"
        />
        <div>
          <h2 className="text-2xl font-bold">{`${user.name.title} ${user.name.first} ${user.name.last}`}</h2>
          <p className="text-gray-500">{user.email}</p>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Cell: {user.cell}</p>
      </div>

      <div>
        <h3 className="text-lg font-semibold mt-4 mb-2">Address</h3>
        <p>{`${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}, ${user.location.postcode}`}</p>
      </div>

      <div>
        <h3 className="text-lg font-semibold mt-4 mb-2">Date of Birth</h3>
        <p>{formatDateOfBirth(user.dob.date)}</p>
      </div>

      <div>
        <h3 className="text-lg font-semibold mt-4 mb-2">Nationality</h3>
        <p>{user.nat}</p>
      </div>
    </div>
  );
};

export default UserProfileDetails;
