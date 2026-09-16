import { useEffect, useState } from "react";
import "./todo-count.style.css";
import { getTodos } from "../../services/TodoService";

export function ToDoCount() {
  const [todoCount, setTodoCount] = useState(0);

  useEffect(() => {
    const fetchTodos = async () => {
      const todosFromApi = await getTodos();
      setTodoCount(todosFromApi.length);
    };
    fetchTodos();
  }, []);

  return <span className="todo-count">{todoCount}</span>;
}
