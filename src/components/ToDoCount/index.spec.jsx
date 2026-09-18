import { render, waitFor } from "@testing-library/react";
import { ToDoCount } from ".";
import { getTodos } from "../../services/TodoService";
import userEvent from "@testing-library/user-event";

jest.mock("../../services/TodoService");

describe("ToDoCount", () => {
  test("Deve renderizar o componente corretamente", async () => {
    getTodos.mockResolvedValue([]);
    const { findByText, getByRole } = render(<ToDoCount />);

    const count = await findByText("0");
    expect(count).toBeInTheDocument();
    expect(getByRole("button")).toBeInTheDocument();
  });

  test("Deve renderizar o contador com itens corretamente", async () => {
    getTodos.mockResolvedValue([
      {
        id: 1,
        description: "Teste 1",
        completed: false,
        createdAt: new Date().toISOString(),
      },
      {
        id: 2,
        description: "Teste 2",
        completed: true,
        createdAt: new Date().toISOString(),
      },
    ]);
    const { findByText } = render(<ToDoCount />);

    const count = await findByText("2");
    expect(count).toBeInTheDocument();
  });

  test("Deve começar com botão desabilitado e número de itens atualizado", async () => {
    getTodos.mockResolvedValue([
      {
        id: 1,
        description: "Teste 1",
        completed: false,
        createdAt: new Date().toISOString(),
      },
      {
        id: 2,
        description: "Teste 2",
        completed: true,
        createdAt: new Date().toISOString(),
      },
    ]);

    const { getByRole, getByText } = render(<ToDoCount />);
    expect(getByRole("button", { name: /refresh/i })).toBeDisabled();

    // Para o tempo de chamada do getTodos
    await waitFor(() => {
      expect(getByText("2")).toBeInTheDocument();
    });
  });

  test("Deve habilitar o botão após a busca inicial na API", async () => {
    getTodos.mockResolvedValue([
      {
        id: 1,
        description: "Teste 1",
        completed: false,
        createdAt: new Date().toISOString(),
      },
      {
        id: 2,
        description: "Teste 2",
        completed: true,
        createdAt: new Date().toISOString(),
      },
    ]);

    const { getByRole, getByText } = render(<ToDoCount />);

    // Para o tempo de chamada do getTodos
    await waitFor(() => {
      expect(getByRole("button", { name: /refresh/i })).not.toBeDisabled();
    });

    expect(getByText("2")).toBeInTheDocument();
  });

  test("Deve atualizar o número de itens após clicar no botão de refresh", async () => {
    getTodos.mockResolvedValueOnce([
      {
        id: 1,
        description: "Teste 1",
        completed: false,
        createdAt: new Date().toISOString(),
      },
      {
        id: 2,
        description: "Teste 2",
        completed: true,
        createdAt: new Date().toISOString(),
      },
    ]);

    const { getByRole, getByText } = render(<ToDoCount />);
    const refreshBtn = getByRole("button", { name: /refresh/i });

    // Para o tempo de chamada do getTodos
    await waitFor(() => {
      expect(getByText("2")).toBeInTheDocument();
    });

    getTodos.mockResolvedValueOnce([
      {
        id: 1,
        description: "Teste 1",
        completed: false,
        createdAt: new Date().toISOString(),
      },
      {
        id: 2,
        description: "Teste 2",
        completed: true,
        createdAt: new Date().toISOString(),
      },
      {
        id: 3,
        description: "Teste 3",
        completed: true,
        createdAt: new Date().toISOString(),
      },
      {
        id: 4,
        description: "Teste 4",
        completed: false,
        createdAt: new Date().toISOString(),
      },
    ]);

    userEvent.click(refreshBtn);

    // Para o tempo de chamada do getTodos
    await waitFor(() => {
      expect(getByText("4")).toBeInTheDocument();
    });
  });
});
