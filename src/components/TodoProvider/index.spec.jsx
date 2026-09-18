import { getTodos } from "../../services/TodoService";

const { render, act, waitFor } = require("@testing-library/react");
const { TodoProvider } = require(".");

jest.mock("../../services/TodoService");

describe("TodoProvider", () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });
  afterAll(() => {
    jest.useRealTimers();
  });
  test("Deve renderizar o provider corretamente buscando os todos ao montar", async () => {
    render(<TodoProvider />);

    act(() => {
      jest.runAllTimers();
    });

    await waitFor(() => expect(getTodos).toHaveBeenCalled());
  });
});
