const stepsData = [
  {
    step: 1,
    formGroups: [
      {
        title: "Dados da conta",
        column: 2,
        fields: [
          { label: "Nome completo", type: "text", placeholder: "Nome completo", name: "nome"},
          { label: "Email", type: "email", placeholder: "email@exemplo.com", name: "email" },
          { label: "Senha", type: "password", placeholder: "Senha", name: "senha" },
          { label: "Confirmar Senha", type: "password", placeholder: "Confirmar Senha", name: "confirmarSenha"},
        ],
      },
      {
        title: "Dados pessoais",
        column: 2,
        fields: [
          { label: "Data de nascimento", type: "date", placeholder: "", name: "dtNasc" },
          { label: "Celular", type: "text", placeholder: "Digite seu celular", name: "celular" },
        ],
      },
      {
        title: "Endereço",
        column: 2,
        fields: [
          { label: "CEP", type: "text", placeholder: "Digite o CEP", name: "cep" },
          { label: "Número", type: "text", placeholder: "101", name: "numero"},
          { label: "Endereço", type: "text", name: "endereco", disabled: true},
          { label: "Cidade", type: "text", name: "cidade", disabled: true},
          { label: "Estado", type: "text", name: "estado", disabled: true},
        ],
      },
    ],
  },
];

export default stepsData;