export const paginate = (data: any[], page: number, pageSize: number) => {
  const startIndex = (page - 1) * pageSize;
  return data.slice(startIndex, startIndex + pageSize);
};
