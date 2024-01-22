import { User } from "../types/types";

export const filterByGender = (data: any[], gender: string | null) => {
  return gender ? data.filter((item) => item.gender === gender) : data;
};
export const filterBySearch = (data: User[], searchTerm: string) => {
  return searchTerm
    ? data.filter((user) =>
        `${user.name.first} ${user.name.last}`
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      )
    : data;
};
