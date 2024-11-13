import axios from "axios";
import MockAdapter from "axios-mock-adapter";

// Criando a instância do mock
const mock = new MockAdapter(axios);

// Mockando as requisições para o envio do código, validação do código e redefinição da senha
mock.onPost('http://localhost:8080/api/send-reset-code').reply(200, {
  message: "Código de verificação enviado para o email",
});

mock.onPost('http://localhost:8080/api/verify-code').reply(200, {
  message: "Código validado com sucesso",
});

mock.onPost('http://localhost:8080/api/set-new-password').reply(200, {
  message: "Senha redefinida com sucesso",
});
