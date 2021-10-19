import { Payload, Todo } from "../types/todo";
import { TodoRow } from "./TodoRow";

export const RowList = ({
  todos,
  setTodos,
}: {
  todos: Todo[];
  setTodos: Function;
}) => {
  const updateTodo = (payload: Payload) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === payload.id) {
        return { ...todo, [payload.property]: payload.newValue };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const destroyTodo = (id: number) => {
    const residueTodos = todos.filter((todo) => todo.id !== id);
    setTodos(residueTodos);
  };

  return (
    <>
      {todos
        .sort((a, b) => a.name.localeCompare(b.name))
        .sort((a, b) => a.priority - b.priority)
        .map((todo) => {
          return (
            <TodoRow
              key={todo.id}
              todo={todo}
              updateTodo={updateTodo}
              destroyTodo={destroyTodo}
            />
          );
        })}
    </>
  );
};
