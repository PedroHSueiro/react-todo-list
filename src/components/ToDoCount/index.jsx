import { useEffect, useState } from "react";
import "./todo-count.style.css";
import { getTodos } from "../../services/TodoService";
import { IconRefresh } from "../icons";
import { FabButton } from "../FabButton";

export function ToDoCount() {
  const [todoCount, setTodoCount] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchTodos = async () => {
    setIsRefreshing(true);
    const todosFromApi = await getTodos();
    setTodoCount(todosFromApi.length);
    setIsRefreshing(false);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="todo-count-container">
      <span className="todo-count">{todoCount}</span>
      <FabButton
        aditiveClass="refresh-count"
        aria-label="refresh"
        disabled={isRefreshing}
        onClick={fetchTodos}
      >
        <IconRefresh />
      </FabButton>
    </div>
  );
}
