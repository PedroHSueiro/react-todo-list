import { render } from "@testing-library/react";
import { ToDoItem } from ".";
import TodoContext from "../TodoProvider/TodoContext";
import userEvent from "@testing-library/user-event";

describe("ToDoItem", () => {
  test("Deve renderizar o item corretamente", () => {
    const item = {
      description: "Descrição",
      completed: false,
      createdAt: "2026-09-14T10:00:00.000Z",
    };

    const { getByText, getByRole } = render(
      <TodoContext.Provider value={{}}>
        <ToDoItem item={item}></ToDoItem>
      </TodoContext.Provider>,
    );

    expect(getByText("Descrição")).toBeInTheDocument();
    expect(getByText("14/09/2026")).toBeInTheDocument();
    expect(getByRole("checkbox")).not.toBeChecked();
  });

  test("Deve chamar a função openFormDialog quando o botão de editar for selecionado", async () => {
    const item = {
      description: "Editar ToDo",
      completed: false,
      createdAt: "2026-09-14T10:00:00.000Z",
    };

    const mockedOpenFormDialog = jest.fn();

    const { getByRole } = render(
      <TodoContext.Provider value={{ openFormDialog: mockedOpenFormDialog }}>
        <ToDoItem item={item}></ToDoItem>
      </TodoContext.Provider>,
    );

    const editBtn = getByRole("button", { name: /edit/i });
    await userEvent.click(editBtn);
    expect(mockedOpenFormDialog).toHaveBeenCalledWith(item);
  });

  test("Deve chamar a função removeTodo quando o botão de deletar for selecionado", async () => {
    const item = {
      description: "Deletar ToDo",
      completed: false,
      createdAt: "2026-09-14T10:00:00.000Z",
    };

    const mockedRemoveTodo = jest.fn();

    const { getByRole } = render(
      <TodoContext.Provider value={{ removeTodo: mockedRemoveTodo }}>
        <ToDoItem item={item}></ToDoItem>
      </TodoContext.Provider>,
    );

    const editBtn = getByRole("button", { name: /delete/i });
    await userEvent.click(editBtn);
    expect(mockedRemoveTodo).toHaveBeenCalledWith(item);
  });
});
