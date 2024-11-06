import React, { FC, useState, ReactNode } from "react";
import { Todos } from "./page";

interface TodoProps {
  todos: Todos;
  selectedTodoId: number | null;
  onSelectTodo: (id: number) => void;
  onCommentAdd: (id: number, newComment: string) => void; // 親から渡されるコールバック
  onCommentDelete: (id: number, commentToDelete: string) => void;
}
const Todo: FC<TodoProps> = ({
  todos,
  selectedTodoId,
  onSelectTodo,
  onCommentAdd,
  onCommentDelete,
}) => {
  const [isCommentsOpen, setIsCommentsOpen] = useState<boolean>(false); // コメントの開閉状態を管理
  const [newComment, setNewComment] = useState<string>("");
  const setComment = () => {
    if (newComment.trim() !== "") {
      onCommentAdd(todos.id, newComment); // 親に新しいコメントを通知
      setNewComment(""); // 入力フィールドをリセット
    }
  };
  const toggleComments = () => {
    setIsCommentsOpen(!isCommentsOpen); // コメントの開閉を切り替え
  };
  const deleteComment = (commentToDelete: string) => {
    onCommentDelete(todos.id, commentToDelete); // 親にコメント削除を通知
  };
  return (
    <div>
      <div style={{ opacity: todos.completed ? 0.3 : 1 }}>
        <input
          type="radio"
          name="todo"
          checked={todos.id === selectedTodoId}
          onChange={() => onSelectTodo(todos.id)}
          disabled={todos.completed}
        />
        <span
          onClick={toggleComments}
          style={{
            cursor: "pointer",
            color: "blue",
            fontSize: "20px",
            fontWeight: "bold",
            textDecoration: "underline",
            border: "2px solid #007BFF", // 枠線の色と太さ
            borderRadius: "5px", // 角を丸くする
            padding: "0px", // 内側の余白
            marginBottom: "0px", // タスクとコメントの間に余白
            display: "inline-block", // ラインブレークを防ぐ
          }}
        >
          {isCommentsOpen ? todos.task : todos.task}
        </span>

        {isCommentsOpen && (
          <ul>
            {todos.comment.length > 0 ? (
              todos.comment.map((comment, index) => (
                <li key={index}>
                  <span
                    onClick={() => deleteComment(comment)}
                    style={{
                      cursor: "pointer",
                      color: "black",
                      fontSize: "13px",
                    }}
                  >
                    {comment}
                  </span>
                </li>
              ))
            ) : (
              <li style={{ color: "red" }}>コメントはまだありません</li>
            )}
            <input
              type="text"
              name="comment"
              disabled={todos.completed}
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button
              style={{ fontSize: "10px" }}
              onClick={setComment}
              disabled={todos.completed}
            >
              コメントを書く
            </button>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Todo;
