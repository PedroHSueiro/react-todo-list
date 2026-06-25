import { Button } from "../Button";
import { TextInput } from "../TextInput";
import "./todo-form.style.css";

export function ToDoForm({ onSubmit }) {
  const handleFormSubmission = (formData) => {
    const newItem = {
      description: formData.get("itemDescription"),
      completed: false,
      createdAt: new Date().toLocaleDateString("pt-BR"),
    };
    onSubmit(newItem);
  };

  return (
    <form action={handleFormSubmission} className="todo-form">
      <TextInput
        placeholder="Digite o item que deseja adicionar"
        name="itemDescription"
        id="itemDescription"
      ></TextInput>
      <Button>Salvar item</Button>
    </form>
  );
}
