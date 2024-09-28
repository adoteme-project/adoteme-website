const stepsData = [
  {
    step: 1,
    formGroups: [
      {
        title: "Dados da conta",
        column: 2,
        fields: [
          {
            label: "Nome completo",
            type: "text",
            placeholder: "Nome completo",
          },
          { label: "Email", type: "email", placeholder: "email@exemplo.com" },
          { label: "Senha", type: "password", placeholder: "Senha" },
          {
            label: "Confirmar Senha",
            type: "password",
            placeholder: "Confirmar Senha",
          },
        ],
      },
      {
        title: "Dados pessoais",
        column: 2,
        fields: [
          { label: "Data de nascimento", type: "date", placeholder: "" },
          { label: "Celular", type: "text", placeholder: "Digite seu celular" },
        ],
      },
      {
        title: "Endereço",
        column: 2,
        fields: [
          { label: "Endereço", type: "text", placeholder: "Digite o endereço" },
          { label: "Número", type: "text", placeholder: "Número residencial" },
          { label: "Cidade", type: "text", placeholder: "Digite a cidade" },
          { label: "Estado", type: "text", placeholder: "Digite o estado" },
          { label: "CEP", type: "text", placeholder: "Digite o CEP" },
        ],
      },
    ],
  },
  {
    step: 2,
    formGroups: [
      {
        title: "Perguntas sobre o usuário",
        column: 1,
        radioControl: [
          {
            pergunta: "Você mora em casa ou apartamento?",
            valor1: "casa",
            label1: "Casa",
            valor2: "apartamento",
            label2: "Apartamento",
          },
          {
            pergunta: "Tem outros pets na sua casa?",
            valor1: "sim",
            label1: "Sim",
            valor2: "não",
            label2: "Não",
          },
          {
            pergunta: "Moram crianças na sua casa?",
            valor1: "sim",
            label1: "Sim",
            valor2: "não",
            label2: "Não",
          },
          {
            pergunta: "Todos que moram com você estão de acordo com a adoção?",
            valor1: "sim",
            label1: "Sim",
            valor2: "não",
            label2: "Não",
          },
          {
            pergunta: "O responsável pelo Pet será você ou outra pessoa?",
            valor1: "eu",
            label1: "Eu",
            valor2: "outra_pessoa",
            label2: "Outra Pessoa",
          },
          {
            pergunta: "Sua residência é telada?",
            valor1: "sim",
            label1: "Sim",
            valor2: "não",
            label2: "Não",
          },
          {
            pergunta: "Sua casa tem portão alto?",
            valor1: "sim",
            label1: "Sim",
            valor2: "não",
            label2: "Não",
          },
        ],
      },
    ],
  },
];

export default stepsData;