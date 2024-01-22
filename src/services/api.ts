import axios from "axios";

export const fetchUsers = async () => {
  try {
    const response = await axios.get("https://randomuser.me/api/");
    return response.data;
  } catch (error) {
    console.error("Error fetching users", error);
    throw error;
  }
};
