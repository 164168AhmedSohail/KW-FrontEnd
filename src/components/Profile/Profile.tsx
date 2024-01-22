import React from "react";
import { User } from "../../types/types";
import GoogleMap from "./GoogleMap";
import NationalityFlag from "./NationalityFlag";
import UserProfileDetails from "./UserProfileDetails";

interface ProfileProps {
  user: User;
}

const Profile: React.FC<ProfileProps> = ({ user }) => {
  return (
    <div>
      <UserProfileDetails user={user} />
      <GoogleMap coordinates={user.location.coordinates} />
      <NationalityFlag nationality={user.nat} country={user.location.country} />
    </div>
  );
};

export default Profile;
