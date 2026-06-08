// cypress/support/checkout_commands.js
Cypress.Commands.add("acessarCheckout", () => {
  cy.visit("/checkout-one");
});

Cypress.Commands.add("preencherDadosCheckout", (cliente) => {
  cy.get("#fname").type(cliente.nome);
  cy.get("#lname").type(cliente.sobrenome);
  cy.get("#cname").type(cliente.empresa);
  cy.get("#email").type(cliente.email);
  cy.get("#country").select(cliente.pais);
  cy.get("#city").select(cliente.cidade);
  cy.get("#zip").type(cliente.cep);
  cy.get("#faddress").type(cliente.endereco);
  cy.get("textarea").type(cliente.comentario);
});

Cypress.Commands.add("marcarTermosCheckout", () => {
  cy.get("#materialUnchecked").check({ force: true });
});

Cypress.Commands.add("selecionarPagamentoCheckout", (metodo) => {
  if (metodo === "bank") {
    cy.get("input[type='radio']").eq(0).click({ force: true });
  }

  if (metodo === "mobile") {
    cy.get("input[type='radio']").eq(1).click({ force: true });
  }

  if (metodo === "paypal") {
    cy.get("input[type='radio']").eq(2).click({ force: true });
  }
});

Cypress.Commands.add("clicarPlaceOrder", () => {
  cy.contains("Place Order").click({ force: true });
});
