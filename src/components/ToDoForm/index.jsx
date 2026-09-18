import { use } from "react";
import { Button } from "../Button";
import { TextInput } from "../TextInput";
import "./todo-form.style.css";
import TodoContext from "../TodoProvider/TodoContext";

export function ToDoForm({ onSubmit }) {
  const { selectedTodo } = use(TodoContext);

  return (
    <form role="form" action={onSubmit} className="todo-form">
      <TextInput
        placeholder="Digite o item que deseja adicionar"
        name="itemDescription"
        id="itemDescription"
        defaultValue={selectedTodo?.description}
        required
      ></TextInput>
      <Button type="submit">Salvar item</Button>
    </form>
  );
}
