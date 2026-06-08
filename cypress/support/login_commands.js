// cypress/support/login_commands.js
import { faker } from "@faker-js/faker";

Cypress.Commands.add("acessarLogin", () => {
  cy.visit("/login");
});

Cypress.Commands.add("preencherEmail", (email = faker.internet.email()) => {
  cy.get("#user").type(email);
});

Cypress.Commands.add("preencherSenha", (senha = faker.string.numeric(6)) => {
  cy.get("#password").type(senha);
});

Cypress.Commands.add("clicarEntrar", () => {
  cy.get("#btnLogin").click();
});