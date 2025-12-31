import { useQuery } from "@tanstack/react-query";
import { todosApi } from "../api/todos";
import { ITodo } from "../types/api/todos";

export const todosQueryKeys = {
  all: ["todos"] as const,
  byUserId: (userId: number) => ["todos", userId] as const,
};

export const useTodos = (userId: number, enabled: boolean = true) => {
  return useQuery<ITodo[]>({
    queryKey: todosQueryKeys.byUserId(userId),
    queryFn: async () => {
      const response = await todosApi.getTodosByUserId(userId);

      return response.data;
    },
    enabled: enabled && !!userId,
  });
};
