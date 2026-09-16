import { render } from "@testing-library/react";
import { ToDoGroup } from ".";
import customRenderer from "../../helpers/CustomRenderer";

describe("ToDoGroup", () => {
  test("Deve renderizar o texto de carregamento enquanto o isLoading for true", () => {
    const { getByText, queryAllByRole } = customRenderer(
      <ToDoGroup items={[]} heading={"Teste 2"} isLoading={true}></ToDoGroup>,
    );

    expect(getByText("Carregando...")).toBeInTheDocument();
    expect(queryAllByRole("listitem")).toHaveLength(0);
  });

  test("Deve renderizar o texto de lista vazia quando não existirem tarefas na lista", () => {
    const { getByText, queryByText, queryAllByRole } = customRenderer(
      <ToDoGroup items={[]} heading={"Teste 2"} isLoading={false}></ToDoGroup>,
    );

    expect(queryAllByRole("listitem")).toHaveLength(0);
    expect(queryByText("Carregando...")).toBeNull;
    expect(getByText("Nenhuma tarefa encontrada!")).toBeInTheDocument();
  });

  test("Deve renderizar o grupo corretamente", () => {
    const { getByText, queryAllByRole } = render(
      <ToDoGroup items={[]} heading={"Teste"}></ToDoGroup>,
    );

    expect(getByText("Teste")).toBeInTheDocument();
    expect(queryAllByRole("listitem")).toHaveLength(0);
  });

  test("Deve renderizar os itens do grupo corretamente", () => {
    const items = [
      {
        id: 1,
        description: "Todo 1",
        completed: false,
        createdAt: "2026-09-14T10:00:00.000Z",
      },
      {
        id: 2,
        description: "Todo 2",
        completed: true,
        createdAt: "2026-09-15T10:00:00.000Z",
      },
    ];

    const { getByText, queryAllByRole } = customRenderer(
      <ToDoGroup items={items} heading={"Teste 2"}></ToDoGroup>,
    );

    expect(queryAllByRole("listitem")).toHaveLength(2);
    expect(getByText("Todo 1")).toBeInTheDocument();
    expect(getByText("Todo 2")).toBeInTheDocument();
  });
});
