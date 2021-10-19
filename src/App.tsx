import Table from "react-bootstrap/Table";
import "./App.scss";
import { AddTodoForm } from "./components/AddTodoForm";
import { Todo } from "./types/todo";
import { useTodos } from "./hooks/todos";
import { RowList } from "./components/RowList";

export const App = () => {
  const { todos, setTodos } = useTodos();

  const addTodo = (newTodo: Todo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Priority</th>
            <th>TODO</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <RowList todos={todos} setTodos={setTodos} />
          <AddTodoForm addTodo={addTodo} />
        </tbody>
      </Table>
    </>
  );
};
