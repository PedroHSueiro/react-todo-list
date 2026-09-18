import { render } from "@testing-library/react";
import { ChecklistsWrapper } from ".";

describe("ChecklistsWrapper", () => {
  test("Deve renderizar o componenete corretamente", () => {
    const { getByText, container } = render(
      <ChecklistsWrapper>Qualquer children</ChecklistsWrapper>,
    );

    expect(getByText("Qualquer children")).toBeInTheDocument();
    expect(container.querySelector(".wrapper")).toBeInTheDocument();
  });
});
