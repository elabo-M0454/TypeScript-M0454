"use client";
import { useState } from "react";
import TodoList from "./TodoList";
export interface Todos {
  id: number;
  task: string;
  completed: boolean;
  comment: string[];
}

export default function Home() {
  const [todoList, setTodoList] = useState<Todos[]>([
    {
      id: 1,
      task: "勉強をする",
      completed: false,
      comment: ["120分はする", "やる気を保つために少し遊んでからする"],
    },
    {
      id: 2,
      task: "部屋を片付ける",
      completed: false,
      comment: ["30分はする", "面白いものを見つけても途中で遊ばない"],
    },
  ]);
  const [newTodo, setNewTodo] = useState<string>("");
  const [selectedTodoId, setSelectedTodoId] = useState<number | null>(null);

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      const newTodoItem: Todos = {
        id: todoList.length + 1,
        task: newTodo,
        completed: false,
        comment: [],
      };
      setTodoList([...todoList, newTodoItem]); // 新しいTodoをリストに追加
      setNewTodo("");
    }
  };

  const handleSelectTodo = (id: number) => {
    setSelectedTodoId(id); // 選択されたタスクのIDを更新
  };

  const deleteTodo = () => {
    if (selectedTodoId != null) {
      setTodoList((prevTodoList) =>
        prevTodoList.filter((todo) => todo.id !== selectedTodoId)
      );
      setSelectedTodoId(null);
    }
  };

  const finishTodo = () => {
    if (selectedTodoId != null) {
      setTodoList((prevTodoList) =>
        prevTodoList.map((todo) =>
          todo.id === selectedTodoId ? { ...todo, completed: true } : todo
        )
      );
      setSelectedTodoId(null);
    }
  };

  const editTodo = () => {
    if (selectedTodoId != null) {
      const newTask = prompt("新しいタスクを入力してください");
      if (newTask) {
        setTodoList((prevTodoList) =>
          prevTodoList.map((todo) =>
            todo.id === selectedTodoId ? { ...todo, task: newTask } : todo
          )
        );
      }
    }
  };
  const finishDelete = () => {
    {
      setTodoList((prevTodoList) =>
        prevTodoList.filter((todo) => todo.completed != true)
      );
      setSelectedTodoId(null);
    }
  };
  const onCommentAdd = (id: number, newComment: string) => {
    // 指定されたidのタスクに新しいコメントを追加する
    setTodoList((prevList) =>
      prevList.map((todo) =>
        todo.id === id
          ? { ...todo, comment: [...todo.comment, newComment] }
          : todo
      )
    );
  };
  const onCommentDelete = (todoId: number, commentToDelete: string) => {
    setTodoList((prevList) =>
      prevList.map((todo) =>
        todo.id === todoId
          ? {
              ...todo,
              comment: todo.comment.filter(
                (comment) => comment !== commentToDelete
              ),
            }
          : todo
      )
    );
  };

  return (
    <div>
      ToDoApp
      <br />
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>登録</button>
      <TodoList
        todoList={todoList}
        selectedTodoId={selectedTodoId}
        onSelectTodo={handleSelectTodo}
        onCommentAdd={onCommentAdd}
        onCommentDelete={onCommentDelete}
      />
      {selectedTodoId}
      <button onClick={finishTodo}>完了</button>
      <button onClick={editTodo}>編集</button>
      <button onClick={deleteTodo}>削除</button>
      <br />
      <span
        onClick={finishDelete}
        style={{ cursor: "pointer", color: "blue", fontSize: "13px" }}
      >
        完了したものを削除
      </span>
    </div>
  );
}
