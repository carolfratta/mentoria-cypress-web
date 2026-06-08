import {
  acessarCadastro,
  preencherNome,
  preencherEmail,
  preencherSenha,
  cadastrar,
  validarCadastroSucesso,
  validarEmailInvalido
} from "../support/pages/cadastro_usuario_page";

describe("Cadastro de usuário", () => {
  it("Cadastro de usuário com sucesso", () => {
    acessarCadastro();
    preencherNome("Caroline");
    preencherEmail("Caroline@qazando.com");
    preencherSenha("121212");
    cadastrar();
    validarCadastroSucesso();
  });

  it("Cadastro com email invalido", () => {
    acessarCadastro();
    preencherNome("Caroline");
    preencherEmail("carolineqazando");
    preencherSenha("121212");
    cadastrar();
    validarEmailInvalido();
  });

  it("Cadastro com email sem @", () => {
    acessarCadastro();
    preencherNome("Caroline");
    preencherEmail("teste.com");
    preencherSenha("121212");
    cadastrar();
    validarEmailInvalido();
  });
});
