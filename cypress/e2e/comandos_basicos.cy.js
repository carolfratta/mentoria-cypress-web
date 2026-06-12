/// <reference types="cypress" />

describe("Comandos Básicos", () => {

    it("Abrir uma URL", () => {
        cy.visit("/login")
    })

    it("Encontrar Elementos", () => {
        cy.visit("/login")

        cy.get('#user')

        //find
        //diminui o escopo com get()
        cy.get('.mc-form').find('.form-control')

        //contains() - encontra um elemento pelo texto!
        // diminui o escopo com get ()
        cy.get('.mc-form').contains('Send')

    })

    it("Preencher um campo", () => {
        cy.visit("/login");

        cy.get('#user').type('teste@teste.com')
        cy.get('#password').type('123456')
        cy.get(".mc-form").find(".form-control").type('meuemail@teste.com{enter}');
    })

    it("Click no elemento", () => {
        cy.visit("/login")

        cy.get('#btnLogin').click({ force: true })
        cy.get('#btnLogin').rightclick({ force: true })
        cy.get('#btnLogin').dblclick({ force: true })
    })

    it("Select/Dropdown", () => {
        cy.visit("/checkout-one");
        cy.get('#country').select(2)
    })

    it("Checkbox/Radio", () => {
        cy.visit("/checkout-one");
        cy.get('#materialUnchecked').check({ force: true })
        cy.get('#materialUnchecked').uncheck({ force: true })
        cy.get("input[type='radio']").first().check({ force: true })
    });

    it("Validar um elemento", () => {
        cy.visit("/login");
        cy.get('#user').type('teste@teste.com')
        cy.get('#password').type('123456')
        cy.get('#btnLogin').click({ force: true });

        cy.get('#swal2-title')
            .should('be.visible')
            .should('have.text', 'Login realizado')

    });
})
