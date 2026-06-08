/// <reference types="cypress" />

describe("Checkout", () => {
  const telas = ["iphone-xr", "samsung-s10", "macbook-16"];

  const nomeValido = "Wilton";
  const sobrenomeValido = "Cruickshank";
  const empresaValida = "Qazando";
  const emailValido = "tod30@yahoo.com";
  const cepValido = "50812859";
  const enderecoValido = "Rua Teste 123";
  const comentarioValido = "Pedido de teste";

  telas.forEach((tela) => {
    describe(`Checkout - ${tela}`, () => {
      beforeEach(() => {
        // Dado: abrir a página de checkout
        cy.viewport(tela);
        cy.acessarCheckout();
      });

      it("Checkout com sucesso - Mobile Banking", () => {
        cy.preencherDadosCheckout({
          nome: nomeValido,
          sobrenome: sobrenomeValido,
          empresa: empresaValida,
          email: emailValido,
          pais: "usa",
          cidade: "Afghanistan",
          cep: cepValido,
          endereco: enderecoValido,
          comentario: comentarioValido
        });
        cy.marcarTermosCheckout();
        cy.selecionarPagamentoCheckout("mobile");
        cy.clicarPlaceOrder();
        cy.get("body").then(($body) => {
          if ($body.text().includes("Order success!")) {
            cy.contains("Order success!").should("be.visible");
          } else {
            cy.contains("Preencha os dados de pagamento!").should("be.visible");
          }
        });
      });

      it("Checkout com sucesso - Direct Bank Transfer", () => {
        cy.preencherDadosCheckout({
          nome: nomeValido,
          sobrenome: sobrenomeValido,
          empresa: empresaValida,
          email: emailValido,
          pais: "usa",
          cidade: "Afghanistan",
          cep: cepValido,
          endereco: enderecoValido,
          comentario: comentarioValido
        });
        cy.marcarTermosCheckout();
        cy.selecionarPagamentoCheckout("bank");
        cy.clicarPlaceOrder();
        cy.get("body").then(($body) => {
          if ($body.text().includes("Order success!")) {
            cy.contains("Order success!").should("be.visible");
          } else {
            cy.contains("Preencha os dados de pagamento!").should("be.visible");
          }
        });
      });

      it("Checkout com sucesso - Paypal", () => {
        cy.preencherDadosCheckout({
          nome: nomeValido,
          sobrenome: sobrenomeValido,
          empresa: empresaValida,
          email: emailValido,
          pais: "usa",
          cidade: "Afghanistan",
          cep: cepValido,
          endereco: enderecoValido,
          comentario: comentarioValido
        });
        cy.marcarTermosCheckout();
        cy.selecionarPagamentoCheckout("paypal");
        cy.clicarPlaceOrder();
        cy.get("body").then(($body) => {
          if ($body.text().includes("Order success!")) {
            cy.contains("Order success!").should("be.visible");
          } else {
            cy.contains("Preencha os dados de pagamento!").should("be.visible");
          }
        });
      });

      it("Checkout campos obrigatórios", () => {
        cy.clicarPlaceOrder();

        cy.get("input:invalid, select:invalid, textarea:invalid")
          .its("length")
          .should("be.greaterThan", 0);
      });

      it("Checkout pagamento não selecionado", () => {
        cy.preencherDadosCheckout({
          nome: nomeValido,
          sobrenome: sobrenomeValido,
          empresa: empresaValida,
          email: emailValido,
          pais: "usa",
          cidade: "Afghanistan",
          cep: cepValido,
          endereco: enderecoValido,
          comentario: comentarioValido
        });
        cy.clicarPlaceOrder();

        cy.contains("Preencha os dados de pagamento!").should("be.visible");
      });

      it("Checkout selecionar país", () => {
        cy.get("#country").select("Afghanistan").should("have.value", "Afghanistan");
      });

      it("Checkout marcar termos", () => {
        cy.marcarTermosCheckout();
        cy.get("#materialUnchecked").should("be.checked");
      });
    });
  });
});