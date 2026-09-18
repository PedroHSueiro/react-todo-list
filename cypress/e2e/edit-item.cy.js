describe("edit-item", () => {
  it("deveria editar a descrição o toDo selecionado", () => {
    cy.visit("http://192.168.0.204:5173/");

    cy.contains("Minha tarefa aprendendo Cypress", { timeout: 2000 })
      .parent()
      .find("[aria-label='edit']")
      .click();

    cy.get("input[name='itemDescription']")
      .clear()
      .type("Minha tarefa atualizando meu aprendizado em Cypress");

    cy.get("button[type='submit']").click();

    cy.contains("Minha tarefa atualizando meu aprendizado em Cypress");
  });
});
