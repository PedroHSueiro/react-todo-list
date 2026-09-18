describe("delete-item", () => {
  it("deveria deletar o toDo criado", () => {
    cy.visit("http://192.168.0.204:5173/");

    cy.contains("Minha tarefa aprendendo Cypress", { timeout: 2000 })
      .parent()
      .find("[aria-label='delete']")
      .click();

    cy.contains("Minha tarefa aprendendo Cypress").should("not.exist");
  });
});
