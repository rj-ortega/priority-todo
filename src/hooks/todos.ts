import { useEffect, useState } from "react";
import { getTodos } from "../api/todo";
import { Todo } from "../types/todo";

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const initialState = await getTodos();
      setTodos(initialState);
    };
    fetch();
  }, []);
  return { todos, setTodos };
};
