import { render } from "@testing-library/react";
import { Footer } from ".";

describe("Footer", () => {
  test("Deve renderizar o componente corretamente", () => {
    const { getByText, container } = render(<Footer>Qualquer children</Footer>);

    expect(getByText("Qualquer children")).toBeInTheDocument();
    expect(container.firstChild).toHaveClass("footer");
  });
});
