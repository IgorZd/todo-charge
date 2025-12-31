import React from "react";
import { useUsers } from "../../query/users";
import { useTodos } from "../../query/todos";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/card/Card";
import { Button } from "../../components/button/Button";
import { Skeleton } from "../../components/skeleton/Skeleton";
import { TodosList } from "../../components/todos/TodosList";
import { useTodoFilter } from "../../hooks/useTodoFilter";
import { Description, Title, UsersList, Wrapper } from "./styles";
import { placeholderArray } from "../../consts/placeholders";
import { EmptyState } from "../../components/emptyState/EmptyState";

const HomePage: React.FC = () => {
  const { selectedUser, selectUser } = useTodoFilter();
  const { data: users, isFetching } = useUsers();
  const { data: todos, isFetching: isFetchingTodos } = useTodos(
    selectedUser || 0,
    !!selectedUser
  );

  const handleShowTodos = (userId: number) => {
    if (selectedUser === userId) {
      selectUser(null);
    } else {
      selectUser(userId);
    }
  };

  return (
    <Wrapper>
      <Title>Welcome to Your Task Management Dashboard</Title>
      <Description>
        Organize, track, and complete your tasks efficiently. Stay productive
        and manage your workflow with ease.
      </Description>
      <UsersList>
        {isFetching ? (
          <>
            {placeholderArray.map((_, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>
                    <Skeleton width={128} height={16} />
                  </CardTitle>
                  <CardDescription>
                    <Skeleton width={96} height={20} />
                  </CardDescription>
                  <CardAction>
                    <Skeleton width={100} height={36} />
                  </CardAction>
                </CardHeader>
              </Card>
            ))}
          </>
        ) : users && users.length === 0 ? (
          <EmptyState>No users found</EmptyState>
        ) : (
          users?.map((user) => (
            <React.Fragment key={user.id}>
              <Card isSelected={selectedUser === user.id}>
                <CardHeader>
                  <CardTitle>{user.username}</CardTitle>
                  <CardDescription>{user.name}</CardDescription>
                  <CardAction>
                    <Button onClick={() => handleShowTodos(user.id)}>
                      {selectedUser === user.id ? "Hide TODOs" : "Show TODOs"}
                    </Button>
                  </CardAction>
                </CardHeader>
              </Card>

              {selectedUser === user.id && (
                <TodosList
                  username={user.username}
                  todos={todos}
                  isLoading={isFetchingTodos}
                />
              )}
            </React.Fragment>
          ))
        )}
      </UsersList>
    </Wrapper>
  );
};

export default HomePage;
