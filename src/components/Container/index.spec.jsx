import { render } from "@testing-library/react";
import { Container } from ".";

describe("Container", () => {
  test("Deve renderizar o componenete corretamente", () => {
    const { getByText, container } = render(
      <Container>Qualquer children</Container>,
    );

    expect(getByText("Qualquer children")).toBeInTheDocument();
    expect(container.querySelector(".container  ")).toBeInTheDocument();
  });
});
