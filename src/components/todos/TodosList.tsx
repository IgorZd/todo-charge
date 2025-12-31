import React, { useMemo } from "react";
import { ITodo } from "../../types/api/todos";
import { Skeleton } from "../skeleton/Skeleton";
import { useTodoFilter } from "../../hooks/useTodoFilter";
import {
  TodosSection,
  TodosHeader,
  TodosContainer,
  TodoItem,
  TodoCheckbox,
  TodoTitle,
} from "./styles";
import { placeholderArray } from "../../consts/placeholders";
import { EmptyState } from "../emptyState/EmptyState";
import { FilterToggle } from "../filterToggle/FilterToggle";

interface TodosListProps {
  username: string;
  todos?: ITodo[];
  isLoading: boolean;
}

export const TodosList: React.FC<TodosListProps> = ({
  username,
  todos,
  isLoading,
}) => {
  const { hideCompleted, setHideCompleted } = useTodoFilter();

  const filteredTodos = useMemo(
    () => (hideCompleted ? todos?.filter((todo) => !todo.completed) : todos),
    [hideCompleted, todos]
  );

  return (
    <TodosSection>
      <TodosHeader>{username}'s TODOs</TodosHeader>
      {filteredTodos && filteredTodos.length > 0 && (
        <FilterToggle checked={hideCompleted} onChange={setHideCompleted} />
      )}

      <TodosContainer>
        {isLoading ? (
          <>
            {placeholderArray.map((_, index) => (
              <TodoItem key={index}>
                <Skeleton width={20} height={20} />
                <Skeleton width="100%" height={20} />
              </TodoItem>
            ))}
          </>
        ) : filteredTodos && filteredTodos.length === 0 ? (
          <EmptyState>
            {hideCompleted ? "No incomplete todos" : "No todos found"}
          </EmptyState>
        ) : (
          filteredTodos?.map((todo) => (
            <TodoItem key={todo.id}>
              <TodoCheckbox type="checkbox" checked={todo.completed} readOnly />
              <TodoTitle $completed={todo.completed}>{todo.title}</TodoTitle>
            </TodoItem>
          ))
        )}
      </TodosContainer>
    </TodosSection>
  );
};
