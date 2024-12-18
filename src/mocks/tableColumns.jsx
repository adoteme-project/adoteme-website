import { Edit } from "@mui/icons-material";
import { GridActionsCellItem, GridDeleteIcon } from "@mui/x-data-grid";

const petsColumns = (userRole, handleDeletePet) => [
    {
        field: 'id',
        headerName: 'ID',
    },
    { field: 'nome', headerName: 'Nome', flex: 0.2 },
    { field: 'especie', headerName: 'Espécie', flex: 0.1 },
    { field: 'raca', headerName: 'Raça', flex: 0.2 },
    { field: 'taxaAdocao', headerName: 'Taxa', flex: 0.1 },
    { field: 'dataEntrada', headerName: 'Data de Entrada', flex: 0.2 },
    {
        field: 'situacao',
        headerName: 'Situação',
        type: 'singleSelect',
        valueOptions: ['Sem Aplicação', 'Revisão', 'Adotado'],
        flex: 0.2,
    },
    {
        field: 'visibilidade',
        headerName: 'Visibilidade',
        type: 'singleSelect',
        valueOptions: ['Visível', 'Escondido'],
        editable: true,
        flex: 0.1,
    },
    {
        field: 'actions',
        headerName: '',
        type: 'actions',
        headerAlign: 'center',
        flex: 0.1,
        getActions: (params) => {
            const actions = [
                <GridActionsCellItem
                    key={0}
                    icon={<Edit />}
                    label="Editar"
                    showInMenu
                />,
            ];

            if (userRole.role === 'MODERATOR' || userRole.role === 'ADMIN') {
                actions.push(
                    <GridActionsCellItem
                        key={1}
                        icon={<GridDeleteIcon />}
                        label="Deletar"
                        onClick={() => handleDeletePet(params.row.id)}
                        showInMenu
                    />
                );
            }

            return actions;
        },
    },
];

const lostPetsColumns = (userRole, handleDeletePet) =>  [
    { field: "id", headerName: "ID", flex: 0.1 },
    { field: "apelido", headerName: "Apelido", flex: 0.2 },
    { field: "especie", headerName: "Espécie", flex: 0.1 },
    { field: "raca", headerName: "Raça", flex: 0.1 },
    { field: "porte", headerName: "Porte", flex: 0.1 },
    { field: "dataResgate", headerName: "Data do Resgate", flex: 0.1 },
    { field: "endereco", headerName: "Endereço", flex: 0.3 },
    {
        field: 'actions',
        headerName: '',
        type: 'actions',
        headerAlign: 'center',
        flex: 0.1,
        getActions: (params) => {
            const actions = [
                <GridActionsCellItem
                    key={0}
                    icon={<Edit />}
                    label="Editar"
                    showInMenu
                />,
            ];

            if (userRole.role === 'MODERATOR' || userRole.role === 'ADMIN') {
                actions.push(
                    <GridActionsCellItem
                        key={1}
                        icon={<GridDeleteIcon />}
                        label="Deletar"
                        onClick={() => handleDeletePet(params.row.id)}
                        showInMenu
                    />
                );
            }

            return actions;
        },
    },
];

const aplicacoesColumns = [
    { field: 'id', headerName: 'ID', flex: 0.1, },
    { field: 'nome', headerName: 'Nome do Pet', flex: 0.2, },
    { field: 'qtdAplicacoes', headerName: 'Aplicações', flex: 0.1, },
    { field: 'enviado', headerName: 'Enviado', flex: 0.2, },
    { field: 'taxaAdocao', headerName: 'Taxa', flex: 0.1 },
    { field: 'dataEntrada', headerName: 'Dada de Entretada', flex: 0.2 },
    {
        field: 'situacao',
        headerName: 'Situação',
        type: 'singleSelect',
        valueOptions: ['Sem aplicação', 'Revisão', 'Adotado'],
        flex: 0.2,
    },
]

const aplicacoesPetColumns = [
    { field: 'nomeAdotante', headerName: 'Adotante', flex: 0.1, },
    { field: 'dataRequisicao', headerName: 'Enviado', flex: 0.1, },
    { field: 'email', headerName: 'Email', flex: 0.2, },
    {
        field: 'status',
        headerName: 'Situação',
        type: 'singleSelect',
        valueOptions: ['Sem aplicação', 'Revisão', 'Adotado'],
        flex: 0.1,
    },
    {
        field: 'actions',
        headerName: '',
        headerAlign: 'center',
        sortable: false,
        flex: 0.1,

    },
]

const usersColumns = [
    {
        field: 'email',
        headerName: 'Email',
        flex: 0.3,
    },
    {
        field: 'celular',
        headerName: 'Celular',
        flex: 0.2,
    },
    {
        field: 'dataEntrada',
        headerName: 'Data de Entrada',
        flex: 0.2,
    },
    {
        field: 'funcao',
        headerName: 'Função',
        type: 'singleSelect',
        valueOptions: ['Voluntário', 'Administrador', 'Funcionário'],
        flex: 0.2,
    },
];

export { petsColumns, aplicacoesColumns, aplicacoesPetColumns, usersColumns, lostPetsColumns }