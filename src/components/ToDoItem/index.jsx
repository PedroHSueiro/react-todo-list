import "./todo-item.style.css";
import { IconPencil, IconTrash } from "../icons";
import { use } from "react";
import TodoContext from "../TodoProvider/TodoContext";
import mergeClass from "./mergeClass";

export function ToDoItem({ item }) {
  const { toggleTodoCompleted, removeTodo, openFormDialog } = use(TodoContext);

  const styles = mergeClass(item.completed);

  return (
    <li className={styles}>
      <p className="date">
        {new Date(item.createdAt).toLocaleDateString("pt-BR")}
      </p>
      <div className="details">
        <input
          type="checkbox"
          className="checkbox"
          defaultChecked={item.completed}
          onClick={() => toggleTodoCompleted(item)}
        />
        <p className="description">{item.description}</p>
        <div className="actions">
          <button className="btn" onClick={() => removeTodo(item)}>
            <IconTrash />
          </button>
          <button className="btn" onClick={() => openFormDialog(item)}>
            <IconPencil />
          </button>
        </div>
      </div>
    </li>
  );
}
