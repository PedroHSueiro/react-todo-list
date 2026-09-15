import { render } from "@testing-library/react";
import TodoContext from "../TodoProvider/TodoContext";
import { ToDoGroup } from ".";

describe("ToDoGroup", () => {
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

    const { getByText, queryAllByRole } = render(
      <TodoContext.Provider value={{}}>
        <ToDoGroup items={items} heading={"Teste 2"}></ToDoGroup>
      </TodoContext.Provider>,
    );

    expect(queryAllByRole("listitem")).toHaveLength(2);
    expect(getByText("Todo 1")).toBeInTheDocument();
    expect(getByText("Todo 2")).toBeInTheDocument();
  });
});
