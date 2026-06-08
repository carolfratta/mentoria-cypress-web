import { faker } from "@faker-js/faker";

Cypress.Commands.add("preencherCampo", (seletor, info = faker.lorem.word()) => {
  cy.get(seletor, { timeout: 10000 })
    .should("be.visible")
    .clear()
    .type(info);
});
