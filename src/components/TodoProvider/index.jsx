import { useEffect, useState } from "react";
import {
  createTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from "../../services/TodoService";
import TodoContext from "./TodoContext";

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Exclusivamente para simular carregamento dos dados async
  const [showDialog, setShowDialog] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState();

  useEffect(() => {
    const fetchTodos = async () => {
      const todosFromApi = await getTodos();
      setTodos(todosFromApi);
    };

    // Apenas para testes async
    setIsLoading(true);

    setTimeout(() => {
      fetchTodos();
      setIsLoading(false);
    }, 1000);
  }, []);

  const upsertTodo = async (formData) => {
    if (selectedTodo) {
      const updatedTodo = {
        ...selectedTodo,
        description: formData.get("itemDescription"),
      };

      setTodos((oldState) =>
        oldState.map((t) => (t.id === selectedTodo.id ? updatedTodo : t)),
      );

      await updateTodo(updatedTodo);
    } else {
      const newTodo = {
        description: formData.get("itemDescription"),
        completed: false,
        createdAt: new Date().toISOString(),
      };

      const createdTodo = await createTodo(newTodo);
      setTodos((oldState) => [...oldState, createdTodo]);
    }

    closeFormDialog();
  };

  const removeTodo = async (todo) => {
    setTodos((prevState) => prevState.filter((t) => t.id !== todo.id));
    await deleteTodo(todo.id);
  };

  const toggleTodoCompleted = (todo) => {
    setTodos((prevState) => {
      return prevState.map((t) => {
        if (t.id == todo.id) {
          return {
            ...t,
            completed: !t.completed,
          };
        }
        return t;
      });
    });
  };

  const openFormDialog = (todo) => {
    if (todo) {
      setSelectedTodo(todo);
    }
    setShowDialog(true);
  };

  const closeFormDialog = () => {
    setShowDialog(false);
    setSelectedTodo(null);
  };

  return (
    <TodoContext
      value={{
        todos,
        upsertTodo,
        toggleTodoCompleted,
        removeTodo,
        showDialog,
        selectedTodo,
        openFormDialog,
        closeFormDialog,
        isLoading,
      }}
    >
      {children}
    </TodoContext>
  );
}
