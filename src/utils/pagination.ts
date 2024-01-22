import { User } from "../types/types";

export const paginate = (data: User[], page: number, pageSize: number) => {
  const startIndex = (page - 1) * pageSize;
  return data.slice(startIndex, startIndex + pageSize);
};
