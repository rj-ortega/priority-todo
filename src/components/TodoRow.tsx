import { FC, useState, ChangeEvent, KeyboardEvent } from "react";
import {
  Button,
  Dropdown,
  DropdownButton,
  InputGroup,
  FormControl,
} from "react-bootstrap/";
import { Trash, ArrowUpCircle, ArrowDownCircle } from "react-bootstrap-icons";
import { Todo } from "../types/todo";
import { priority } from "../constants/todo";

interface TodoRowProps {
  todo: Todo;
  updateTodo: Function;
  destroyTodo: Function;
}

export const TodoRow: FC<TodoRowProps> = ({
  todo,
  updateTodo,
  destroyTodo,
}) => {
  const [todoFormState, setTodoFormState] = useState(todo);

  const prioritize = (raise: boolean) => {
    if (!todo.priority && raise) return;

    let value;

    if (raise && todo.priority > 1) {
      value = todo.priority - 1;
    } else if (!raise && todo.priority < 4) {
      value = todo.priority + 1;
    } else {
      return;
    }

    updateTodo({ newValue: value, property: "priority", id: todo.id });
  };
  return (
    <tr>
      <td>
        <InputGroup className="mb-3">
          <DropdownButton
            variant="outline-secondary"
            title={priority[todo.priority]}
            className="input-group-dropdown"
            onSelect={(e) => {
              updateTodo({
                newValue: e,
                property: "priority",
                id: todo.id,
              });
            }}
          >
            <Dropdown.Item eventKey={1}>{priority[1]}</Dropdown.Item>
            <Dropdown.Item eventKey={2}>{priority[2]}</Dropdown.Item>
            <Dropdown.Item eventKey={3}>{priority[3]}</Dropdown.Item>
            <Dropdown.Item eventKey={4}>{priority[4]}</Dropdown.Item>
          </DropdownButton>
        </InputGroup>
      </td>
      <td>
        <InputGroup className="mb-3">
          <FormControl
            onKeyDown={(e: KeyboardEvent) => {
              const target = e.target as HTMLInputElement;
              e.key === "Enter" && target.blur();
            }}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setTodoFormState({ ...todoFormState, name: e.target.value })
            }
            onBlur={() =>
              updateTodo({
                newValue: todoFormState.name,
                property: "name",
                id: todo.id,
              })
            }
            placeholder={todoFormState.name}
            value={todoFormState.name}
            aria-label="Todo Name"
          />
        </InputGroup>
      </td>
      <td>
        <Button onClick={() => prioritize(true)} variant="secondary">
          <ArrowUpCircle />
        </Button>
        <Button onClick={() => prioritize(false)} variant="dark">
          <ArrowDownCircle />
        </Button>
        <Button onClick={() => destroyTodo(todo.id)} variant="danger">
          <Trash />
        </Button>
      </td>
    </tr>
  );
};
