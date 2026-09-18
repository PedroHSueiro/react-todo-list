import { render } from "@testing-library/react";
import { Header } from "./index";

describe("Header", () => {
  test("Deve renderizar o componente", () => {
    expect(render(<Header />)).toBeTruthy();
  });
  test("Deve renderizar o componente com a classe correta", () => {
    const { container } = render(<Header />);
    expect(container.firstChild).toHaveClass("header");
  });
});
