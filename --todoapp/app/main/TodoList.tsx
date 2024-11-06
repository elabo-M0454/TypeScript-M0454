import React, { FC } from "react";
import Todo from "./Todo";
import { Todos } from "./page";

interface TodoListProps {
  todoList: Todos[];
  selectedTodoId: number | null;
  onSelectTodo: (id: number) => void;
  onCommentAdd: (id: number, newComment: string) => void;
  onCommentDelete: (id: number, commentToDelete: string) => void;
}
const TodoList: FC<TodoListProps> = ({
  todoList,
  selectedTodoId,
  onSelectTodo,
  onCommentAdd,
  onCommentDelete,
}) => {
  return (
    <div>
      {todoList.map((todos) => (
        <Todo
          key={todos.id}
          todos={todos}
          selectedTodoId={selectedTodoId}
          onSelectTodo={onSelectTodo}
          onCommentAdd={onCommentAdd}
          onCommentDelete={onCommentDelete}
        />
      ))}
    </div>
  );
};

export default TodoList;
