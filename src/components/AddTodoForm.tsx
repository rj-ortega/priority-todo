import { FC, useState, useRef, ChangeEvent, KeyboardEvent } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { PlusCircle, XCircle } from "react-bootstrap-icons";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { priority } from "../constants/todo";

interface AddTodoFormProps {
  addTodo: Function;
}

export const AddTodoForm: FC<AddTodoFormProps> = ({ addTodo }) => {
  const [addPriority, setAddPriority] = useState(0);
  const [addName, setAddName] = useState("");
  const [count, setCount] = useState(4);
  const newNameInput = useRef<HTMLInputElement>(null);

  const clear = () => {
    setAddPriority(0);
    setAddName("");
  };

  const saveProp = () => {
    if (addName && !isNaN(addPriority)) {
      addTodo({
        name: addName,
        priority: addPriority !== 0 ? addPriority : 4,
        id: count,
      });
      const newCount = count + 1;
      setCount(newCount);
      clear();
    }
  };
  return (
    <tr>
      <td>
        <InputGroup className="mb-3">
          <DropdownButton
            variant="outline-secondary"
            title={addPriority !== 0 ? addPriority : "Select Priority"}
            className="input-group-dropdown"
            onSelect={(value) => {
              setAddPriority(parseInt(value as string));
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
            ref={newNameInput}
            onKeyDown={(e: KeyboardEvent) => {
              if (e.key === "Enter") saveProp();
            }}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setAddName(e.target.value)
            }
            placeholder="Add Todo Name"
            value={addName}
            aria-label="Todo Name"
          />
        </InputGroup>
      </td>
      <td>
        <Button onClick={() => saveProp()} variant="success">
          <PlusCircle />
        </Button>
        <Button onClick={() => clear()} variant="danger">
          <XCircle />
        </Button>
      </td>
    </tr>
  );
};
