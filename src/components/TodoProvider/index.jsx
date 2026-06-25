import { useEffect, useState } from "react";
import TodoContext from "./TodoContext";

const TODOS = "todos";

export function TodoProvider({ children }) {
  const savedTodos = localStorage.getItem(TODOS);

  const [todos, setTodos] = useState(savedTodos ? JSON.parse(savedTodos) : []);
  const [showDialog, setShowDialog] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState();

  useEffect(() => {
    localStorage.setItem(TODOS, JSON.stringify(todos));
  }, [todos]);

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

  const addTodo = (formData) => {
    setTodos((prevState) => {
      const todo = {
        id: prevState.length + 1,
        description: formData.get("itemDescription"),
        completed: false,
        createdAt: new Date().toISOString(),
      };
      return [...prevState, todo];
    });
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

  const deleteTodo = (todo) => {
    setTodos((prevState) => {
      return prevState.filter((t) => t.id != todo.id);
    });
  };

  const editTodo = (formData) => {
    setTodos((prevState) => {
      return prevState.map((t) => {
        if (t.id == selectedTodo.id) {
          return {
            ...t,
            description: formData.get("itemDescription"),
          };
        }
        return t;
      });
    });
  };

  return (
    <TodoContext
      value={{
        todos,
        addTodo,
        editTodo,
        toggleTodoCompleted,
        deleteTodo,
        showDialog,
        selectedTodo,
        openFormDialog,
        closeFormDialog,
      }}
    >
      {children}
    </TodoContext>
  );
}
