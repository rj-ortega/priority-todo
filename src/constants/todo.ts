import { Todo } from "../types/todo";

export const priority: { [key: number]: string } = {
  1: "1 - Critical",
  2: "2 - High",
  3: "3 - Medium",
  4: "4 - Low",
};

export const initialState: Todo[] = [
  {
    id: 3,
    priority: 3,
    name: "Third",
  },
  {
    id: 2,
    priority: 2,
    name: "Second",
  },
  {
    id: 1,
    priority: 1,
    name: "First",
  },
];
