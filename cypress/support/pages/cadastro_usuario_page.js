function acessarCadastro() {
  cy.visit("/register");
}

function preencherNome(nome) {
  cy.preencherCampo("#user", nome);
}

function preencherEmail(email) {
  cy.preencherCampo("#email", email);
}

function preencherSenha(senha) {
  cy.preencherCampo("#password", senha);
}

function cadastrar() {
  cy.get("#btnRegister").click();
}

function validarCadastroSucesso() {
  cy.get("#swal2-title")
    .should("be.visible")
    .and("have.text", "Cadastro realizado!");
}

function validarEmailInvalido() {
  cy.get("#email:invalid").should("exist");
}

function cadastrarUsuario(nome, email, senha) {
  acessarCadastro();
  preencherNome(nome);
  preencherEmail(email);
  preencherSenha(senha);
  cadastrar();
}

export {
  acessarCadastro,
  preencherNome,
  preencherEmail,
  preencherSenha,
  cadastrar,
  validarCadastroSucesso,
  validarEmailInvalido,
  cadastrarUsuario
};
