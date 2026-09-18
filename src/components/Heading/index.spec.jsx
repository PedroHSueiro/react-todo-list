import { render } from "@testing-library/react";
import { Heading } from ".";

describe("Heading", () => {
  test("Deve renderizar o componente corretamente", () => {
    const { getByText, container } = render(
      <Heading>Qualquer children</Heading>,
    );

    expect(getByText("Qualquer children")).toBeInTheDocument();
    expect(container.firstChild).toHaveClass("heading");
  });
});
