import { apiClient } from ".";

export const todosApi = {
  getTodosByUserId: (userId: number) =>
    apiClient.get(`/todos?userId=${userId}`),
};
