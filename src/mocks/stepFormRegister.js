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

const formMeuPerfilDados = [
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
]

const formQuestionsAdotante = [
  {
    step: 2,
    formGroups: [
      {
        title: "Perguntas sobre o usuário",
        column: 1,
        radioControl: [
          {
            name: "casaApartamento",
            pergunta: "Você mora em casa ou apartamento?",
            valor1: "casa",
            label1: "Casa",
            valor2: "apartamento",
            label2: "Apartamento",
          },
          {
            name: "outrosPets",
            pergunta: "Tem outros pets na sua casa?",
            valor1: "sim",
            label1: "Sim",
            valor2: "não",
            label2: "Não",
          },
          {
            name: "criancas",
            pergunta: "Moram crianças na sua casa?",
            valor1: "sim",
            label1: "Sim",
            valor2: "não",
            label2: "Não",
          },
          {
            name: "acordo",
            pergunta: "Todos que moram com você estão de acordo com a adoção?",
            valor1: "sim",
            label1: "Sim",
            valor2: "não",
            label2: "Não",
          },
          {
            name: "outraPessoa",
            pergunta: "O responsável pelo Pet será você ou outra pessoa?",
            valor1: "eu",
            label1: "Eu",
            valor2: "outra_pessoa",
            label2: "Outra Pessoa",
          },
          {
            name: "telada",
            pergunta: "Sua residência é telada?",
            valor1: "sim",
            label1: "Sim",
            valor2: "não",
            label2: "Não",
          },
          {
            name: "portao",
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
]

export { stepsData, formMeuPerfilDados, formQuestionsAdotante };