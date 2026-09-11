import { render } from "@testing-library/react";
import TodoContext from "../TodoProvider/TodoContext";
import { ToDoForm } from ".";
import userEvent from "@testing-library/user-event";

describe("ToDoForm", () => {
  test("Deve renderizar o form corretamente", () => {
    const { getByRole } = render(
      <TodoContext.Provider
        value={{ selectedTodo: { description: "Descrição" } }}
      >
        <ToDoForm onSubmit={() => {}}></ToDoForm>
      </TodoContext.Provider>,
    );

    expect(getByRole("form")).toBeInTheDocument();
  });

  test("Deve renderizar a descrição do toDo selecionado", () => {
    const { getByRole } = render(
      <TodoContext.Provider
        value={{ selectedTodo: { description: "Descrição" } }}
      >
        <ToDoForm onSubmit={() => {}}></ToDoForm>
      </TodoContext.Provider>,
    );

    expect(getByRole("textbox")).toBeInTheDocument();
    expect(getByRole("textbox")).toHaveValue("Descrição");
  });

  test("Deve enviar o form com a descrição atualizada", async () => {
    const mockedSubmitFuncion = jest.fn();

    const { getByRole } = render(
      <TodoContext.Provider
        value={{ selectedTodo: { description: "Descrição" } }}
      >
        <ToDoForm onSubmit={mockedSubmitFuncion}></ToDoForm>
      </TodoContext.Provider>,
    );

    const input = getByRole("textbox");
    await userEvent.clear(input);
    await userEvent.type(input, "Nova descrição");

    const btn = getByRole("button", { name: /salvar item/i });
    await userEvent.click(btn);

    expect(mockedSubmitFuncion).toHaveBeenCalled();
  });
});
