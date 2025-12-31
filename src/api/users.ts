import { apiClient } from ".";

export const usersApi = {
  getUsers: () => apiClient.get("/users"),
};
