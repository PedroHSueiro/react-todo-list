describe("create-item", () => {
  it("deveria criar um novo toDo", () => {
    cy.visit("http://192.168.0.204:5173/");

    cy.get("[aria-label='adicionar']").click();

    cy.get("input[name='itemDescription']").type(
      "Minha tarefa aprendendo Cypress",
    );
    cy.get("button[type='submit']").click();

    cy.contains("Minha tarefa aprendendo Cypress", { timeout: 2000 });
  });
});
