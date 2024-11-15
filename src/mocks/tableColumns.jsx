import ButtonAvaliacao from "@/components/feature/AvaliacaoPet/ButtonAvaliacao";
import { Edit } from "@mui/icons-material";
import { GridActionsCellItem, GridDeleteIcon } from "@mui/x-data-grid";

const petsColumns = [
    {
        field: 'id',
        headerName: 'ID',
    },
    { field: 'nome', headerName: 'Nome', flex: 0.2, },
    { field: 'especie', headerName: 'Espécie', flex: 0.1, },
    { field: 'raca', headerName: 'Raça', flex: 0.2, },
    { field: 'taxaAdocao', headerName: 'Taxa', flex: 0.1, },
    { field: 'dataEntrada', headerName: 'Data de Entrada', flex: 0.2, },
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
        getActions: () => [
            <GridActionsCellItem
                key={0}
                icon={<Edit />}
                label="Editar"
                showInMenu
            />,
            <GridActionsCellItem
                key={1}
                icon={<GridDeleteIcon />}
                label="Delete"
                showInMenu
            />,
        ],
    },
];

const aplicacoesColumns = [
    { field: 'id', headerName: 'ID', flex: 0.1, },
    { field: 'nomePet', headerName: 'Nome do Pet', flex: 0.2, },
    { field: 'qtdAplicacao', headerName: 'Aplicações', flex: 0.1, },
    { field: 'dtEnviado', headerName: 'Enviado', flex: 0.2, },
    { field: 'taxaPet', headerName: 'Taxa', flex: 0.1},
    { field: 'dtEntreda', headerName: 'Dada de Entretada', flex: 0.2},
    {
        field: 'situacao',
        headerName: 'Situação',
        type: 'singleSelect',
        valueOptions: ['Descartado', 'Nova', 'Revisão', 'Concluído'],
        flex: 0.2,            
    },
]

const aplicacoesPetColumns = [
    { field: 'adotanteNome', headerName: 'Adotante', flex: 0.1, },
    { field: 'tempoEnvio', headerName: 'Enviado', flex: 0.1, },
    { field: 'adotanteEmail', headerName: 'Email', flex: 0.2, },
    {
        field: 'situacao',
        headerName: 'Situação',
        type: 'singleSelect',
        valueOptions: ['Novo', 'Revisão', 'Concluído'],
        flex: 0.1,            
    },
    {
        field: 'actions',
        headerName: '',
        headerAlign: 'center',
        sortable: false,
        flex: 0.1,
        renderCell: (params) => <ButtonAvaliacao toggleModal={params.toggleModal}/>
    },
]

export { petsColumns, aplicacoesColumns, aplicacoesPetColumns }