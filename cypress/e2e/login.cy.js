/// <reference types="cypress" />

import { faker } from "@faker-js/faker";

describe("Login", () => {
  const telas = ["iphone-xr", "samsung-s10", "macbook-16"];

  const usuarioValido = "teste@teste.com";
  const senhaValida = "123456";

  telas.forEach((tela) => {
    describe(`Login - ${tela}`, () => {
      beforeEach(() => {
        // Dado: abrir a página de login
        cy.viewport(tela);
        cy.acessarLogin();
      });

      it("Login com sucesso", () => {
        cy.preencherEmail(usuarioValido);
        cy.preencherSenha(senhaValida);
        cy.get("#password").should("have.attr", "type", "password");
        cy.clicarEntrar();

        cy.get("#swal2-title").should("be.visible");
        cy.get("#swal2-title").should("have.text", "Login realizado");
      });

      it("Login e-mail vazio", () => {
        cy.preencherSenha(senhaValida);
        cy.clicarEntrar();

        cy.get(".invalid_input").should("be.visible");
        cy.get(".invalid_input").should("have.text", "E-mail inválido.");
      });

      it("Login senha vazia", () => {
        cy.preencherEmail(usuarioValido);
        cy.clicarEntrar();

        cy.get(".invalid_input").should("be.visible");
        cy.get(".invalid_input").should("have.text", "Senha inválida.");
      });

      it("Login e-mail inválido", () => {
        cy.preencherEmail(faker.string.numeric(6));
        cy.preencherSenha(faker.string.numeric(6));
        cy.clicarEntrar();

        cy.get(".invalid_input").should("be.visible");
        cy.get(".invalid_input").should("have.text", "E-mail inválido.");
      });

      it("Login senha inválida", () => {
        cy.preencherEmail(faker.internet.email());
        cy.preencherSenha(faker.string.numeric(4));
        cy.clicarEntrar();

        cy.get(".invalid_input").should("be.visible");
        cy.get(".invalid_input").should("have.text", "Senha inválida.");
      });

      it("Botão ainda não tem conta", () => {
        cy.get("#createAccount").click();

        cy.get(".account_form h3").should("be.visible");
        cy.get(".account_form h3").should("have.text", "Cadastro de usuário");
      });
    });
  });
});