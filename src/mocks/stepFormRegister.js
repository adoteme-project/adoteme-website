const stepsData = [
  {
    step: 1,
    formGroups: [
      {
        title: "Dados da conta",
        column: 2,
        fields: [
          { label: "Nome completo", type: "text", placeholder: "Nome completo", name: "nomeCompleto" },
          { label: "Email", type: "email", placeholder: "email@exemplo.com", name: "email" },
          { label: "Senha", type: "password", placeholder: "Senha", name: "senha" },
          { label: "Confirmar Senha", type: "password", placeholder: "Confirmar Senha", name: "confirmarSenha"},
        ],
      },
      {
        title: "Dados pessoais",
        column: 2,
        fields: [
          { label: "Data de nascimento", type: "date", placeholder: "", name: "dataNascimento" },
          { label: "Celular", type: "text", placeholder: "Digite seu celular", name: "celular" },
        ],
      },
      {
        title: "Endereço",
        column: 2,
        fields: [
          { label: "Endereço", type: "text", placeholder: "Digite o endereço", name: "endereco" },
          { label: "Número", type: "text", placeholder: "Número residencial", name: "numero" },
          { label: "Cidade", type: "text", placeholder: "Digite a cidade", name: "cidade" },
          { label: "Estado", type: "text", placeholder: "Digite o estado", name: "estado" },
          { label: "CEP", type: "text", placeholder: "Digite o CEP", name: "cep" },
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
            name: "perguntaResidencia",
            pergunta: "Você mora em casa ou apartamento?",
            valor1: "casa",
            label1: "Casa",
            valor2: "apartamento",
            label2: "Apartamento",
          },
          {
            name: "perguntaPets",
            pergunta: "Tem outros pets na sua casa?",
            valor1: "sim",
            label1: "Sim",
            valor2: "nao",
            label2: "Não",
          },
          {
            name: "perguntaCrianca",
            pergunta: "Moram crianças na sua casa?",
            valor1: "sim",
            label1: "Sim",
            valor2: "nao",
            label2: "Não",
          },
          {
            name: "perguntaAcordo",
            pergunta: "Todos que moram com você estão de acordo com a adoção?",
            valor1: "sim",
            label1: "Sim",
            valor2: "nao",
            label2: "Não",
          },
          {
            name: "perguntaOutra",
            pergunta: "O responsável pelo Pet será você ou outra pessoa?",
            valor1: "eu",
            label1: "Eu",
            valor2: "outra_pessoa",
            label2: "Outra Pessoa",
          },
          {
            name: "perguntaTelada",
            pergunta: "Sua residência é telada?",
            valor1: "sim",
            label1: "Sim",
            valor2: "nao",
            label2: "Não",
          },
          {
            name: "perguntaPortao",
            pergunta: "Sua casa tem portão alto?",
            valor1: "sim",
            label1: "Sim",
            valor2: "nao",
            label2: "Não",
          },
        ],
      },
    ],
  },
];

export default stepsData;