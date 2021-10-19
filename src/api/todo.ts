import { initialState } from "../constants/todo";
import { Todo } from "../types/todo";

export const getTodos = (): Promise<Todo[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(initialState), 500);
  });
};
