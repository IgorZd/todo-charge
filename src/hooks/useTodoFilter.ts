import { useState } from "react";

export const useTodoFilter = () => {
  const [selectedUser, setSelectedUser] = useState<number | null>(null);
  const [hideCompleted, setHideCompleted] = useState(false);

  const selectUser = (userId: number | null) => {
    setSelectedUser(userId);
    setHideCompleted(false);
  };

  return {
    selectedUser,
    setSelectedUser,
    hideCompleted,
    setHideCompleted,
    selectUser,
  };
};
