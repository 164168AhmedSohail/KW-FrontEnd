import React, { useState, useEffect } from "react";
import { fetchUsers } from "../../services/api";
import { User } from "../../types/types";
import { paginate } from "../../utils/pagination";
import { filterByGender, filterBySearch } from "../../utils/filter";
import UserCard from "./UserCard";

interface ListingProps {
  onUserSelect: (user: User) => void;
}

const Listing: React.FC<ListingProps> = ({ onUserSelect }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [genderFilter, setGenderFilter] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const pageSize = 10;
  useEffect(() => {
    fetchUsers().then((data) => {
      setUsers(data.results);
      setFilteredUsers(data.results);
    });
  }, []);
  console.log("users", users, "filteredusers", filteredUsers);
  useEffect(() => {
    let filteredData = filterByGender(users, genderFilter);
    filteredData = filterBySearch(filteredData, searchTerm);
    setFilteredUsers(paginate(filteredData, currentPage, pageSize));
  }, [genderFilter, currentPage, searchTerm, users]);

  const handleGenderFilter = (gender: string | null) => {
    setGenderFilter(gender);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handleUserClick = (user: User) => {
    onUserSelect(user);
  };

  return (
    <div className="container mx-auto my-4 p-4 bg-gray-100">
      <div className="flex items-center mb-4">
        <div className="mr-4">
          <label className="block text-gray-700">Gender Filter:</label>
          <select
            className="p-2 border border-gray-300"
            value={genderFilter || ""}
            onChange={(e) => handleGenderFilter(e.target.value || null)}
          >
            <option value="">All</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700">Search:</label>
          <input
            className="p-2 border border-gray-300"
            type="text"
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredUsers.map((user) => (
          <UserCard
            key={user.login.uuid}
            user={user}
            onClick={() => handleUserClick(user)}
          />
        ))}
      </div>

      <div className="flex justify-between items-center mt-4">
        <button
          className="p-2 bg-blue-500 text-white rounded"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous Page
        </button>
        <span> Page {currentPage} </span>
        <button
          className="p-2 bg-blue-500 text-white rounded"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage * pageSize >= users.length}
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default Listing;
