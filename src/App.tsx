import React, { useState } from "react";
import Listing from "./components/Listing/Listing";
import Profile from "./components/Profile/Profile";
import { User } from "./types/types";

const App: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  // Function to handle user selection
  const handleUserSelection = (user: User) => {
    setSelectedUser(user);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <header className="text-3xl font-bold mb-4">User Listing</header>
      <div className="w-full max-w-screen-lg bg-white p-8 rounded shadow-lg">
        <Listing onUserSelect={handleUserSelection} />
        {selectedUser && <Profile user={selectedUser} />}
      </div>
    </div>
  );
};

export default App;
