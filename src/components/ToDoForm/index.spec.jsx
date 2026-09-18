import { ToDoForm } from ".";
import userEvent from "@testing-library/user-event";
import customRenderer from "../../helpers/CustomRenderer";

describe("ToDoForm", () => {
  test("Deve renderizar o form corretamente", () => {
    const { getByRole } = customRenderer(
      <ToDoForm onSubmit={() => {}}></ToDoForm>,
      { selectedTodo: { description: "Descrição" } },
    );

    expect(getByRole("form")).toBeInTheDocument();
  });

  test("Deve renderizar a descrição do toDo selecionado", () => {
    const { getByRole } = customRenderer(
      <ToDoForm onSubmit={() => {}}></ToDoForm>,
      { selectedTodo: { description: "Descrição" } },
    );

    expect(getByRole("textbox")).toBeInTheDocument();
    expect(getByRole("textbox")).toHaveValue("Descrição");
  });

  test("Deve enviar o form com a descrição atualizada", async () => {
    const mockedSubmitFuncion = jest.fn();

    const { getByRole } = customRenderer(
      <ToDoForm onSubmit={mockedSubmitFuncion}></ToDoForm>,
      { selectedTodo: { description: "Descrição" } },
    );

    const input = getByRole("textbox");
    await userEvent.clear(input);
    await userEvent.type(input, "Nova descrição");

    const btn = getByRole("button", { name: /salvar item/i });
    await userEvent.click(btn);

    expect(mockedSubmitFuncion).toHaveBeenCalled();
  });
});
