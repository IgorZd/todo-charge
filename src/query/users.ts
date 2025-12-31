import { QueryOptions, useQuery } from "@tanstack/react-query";
import { usersApi } from "../api/users";
import { IUser } from "../types/api/users";

export const usersQueryKeys = {
  all: ["users"] as const,
};

export const useUsers = (options?: QueryOptions<IUser[]>) => {
  return useQuery({
    ...options,
    queryKey: usersQueryKeys.all,
    queryFn: async () => {
      const response = await usersApi.getUsers();
      return response.data;
    },
  });
};
