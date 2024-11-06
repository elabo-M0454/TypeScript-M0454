"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
export interface User {
  name: string;
  password: string;
}

export default function Home() {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  const login = () => {
    // エラーメッセージをリセット
    setErrorMsg("");

    // 入力が空の場合、エラーメッセージを設定
    if (name.trim() === "") {
      setErrorMsg("ユーザーIDを入力してください");
      return; // 早期リターンで処理を止める
    }

    if (password.trim() === "") {
      setErrorMsg("パスワードを入力してください");
      return; // 早期リターンで処理を止める
    }
    if (name != "田中" || password != "123") {
      setErrorMsg("ユーザーIDまたはパスワードが間違っています");
      return; // 早期リターンで処理を止める
    } else {
      setUser({ name, password });
      router.push("/main");
      console.log("ログイン成功");
    }
  };

  return (
    <div>
      ToDoApp
      <br />
      ユーザーID:
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      パスワード:
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={login}>ログイン</button>
      <br />
      {errorMsg && <span style={{ color: "red" }}>{errorMsg}</span>}
    </div>
  );
}
