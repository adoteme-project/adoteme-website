import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const petsColumns = [
    {
        field: 'id',
        headerName: 'ID',
        width: 80,
        headerClassName: 'super-app-theme--header',
    },
    { field: 'nome', headerName: 'Nome', width: 130, headerClassName: 'super-app-theme--header', },
    { field: 'especie', headerName: 'Espécie', width: 130, headerClassName: 'super-app-theme--header', },
    { field: 'raca', headerName: 'Raça', width: 130, headerClassName: 'super-app-theme--header', },
    { field: 'taxa', headerName: 'Taxa', width: 100, headerClassName: 'super-app-theme--header', },
    { field: 'dataDeEntrada', headerName: 'Data de Entrada', width: 160, headerClassName: 'super-app-theme--header', },
    {
        field: 'situacao',
        headerName: 'Situação',
        headerClassName: 'super-app-theme--header',
        type: 'singleSelect',
        valueOptions: ['Sem Aplicação', 'Revisão', 'Aprovado', 'Documentação', 'Adotado'],
        width: 160,
        editable: true,
    },
    {
        field: 'visibilidade',
        headerName: 'Visibilidade',
        headerClassName: 'super-app-theme--header',
        type: 'singleSelect',
        valueOptions: ['Visível', 'Escondido'],
        width: 130,
        editable: true,
    },
    {
        field: 'actions',
        headerName: '',
        headerClassName: 'super-app-theme--header',
        width: 50,
        renderCell: () =>
            <FontAwesomeIcon
                icon={faEllipsisVertical}
                className="cursor-pointer"
            />,
    },
];

export { petsColumns }