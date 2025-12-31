import { useSearchParams } from "react-router-dom";
import { useMemo, useCallback } from "react";

enum QueryParams {
  USER = "user",
  HIDE_COMPLETED = "hide_completed",
}

export const useTodoFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedUser = useMemo(() => {
    const userParam = searchParams.get(QueryParams.USER);
    return userParam ? parseInt(userParam, 10) : null;
  }, [searchParams]);

  const hideCompleted = useMemo(() => {
    return searchParams.get(QueryParams.HIDE_COMPLETED) === "1";
  }, [searchParams]);

  const setSelectedUser = useCallback(
    (userId: number | null) => {
      setSearchParams((prev) => {
        const newParams = new URLSearchParams(prev);
        if (userId === null) {
          newParams.delete(QueryParams.USER);
          newParams.delete(QueryParams.HIDE_COMPLETED);
        } else {
          newParams.set(QueryParams.USER, userId.toString());
        }
        return newParams;
      });
    },
    [setSearchParams]
  );

  const setHideCompleted = useCallback(
    (value: boolean) => {
      setSearchParams((prev) => {
        const newParams = new URLSearchParams(prev);
        if (value) {
          newParams.set(QueryParams.HIDE_COMPLETED, "1");
        } else {
          newParams.delete(QueryParams.HIDE_COMPLETED);
        }
        return newParams;
      });
    },
    [setSearchParams]
  );

  const selectUser = useCallback(
    (userId: number | null) => {
      setSearchParams((prev) => {
        const newParams = new URLSearchParams(prev);
        if (userId === null) {
          newParams.delete(QueryParams.USER);
          newParams.delete(QueryParams.HIDE_COMPLETED);
        } else {
          newParams.set(QueryParams.USER, userId.toString());
          newParams.delete(QueryParams.HIDE_COMPLETED);
        }
        return newParams;
      });
    },
    [setSearchParams]
  );

  return {
    selectedUser,
    setSelectedUser,
    hideCompleted,
    setHideCompleted,
    selectUser,
  };
};
