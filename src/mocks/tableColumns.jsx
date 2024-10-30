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
        valueOptions: ['Sem Aplicação', 'Revisão', 'Aprovado', 'Documentação', 'Adotado'],
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

export { petsColumns }