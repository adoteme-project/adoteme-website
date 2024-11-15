import { Box, createTheme, ThemeProvider } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { ptBR } from "@mui/material/locale";

const tableTheme = createTheme(
    {
        palette: {
            primary: { main: "#FFC55E" },
        },
    },
    ptBR
);


export default function TableOng({ rows, columns, eventRow, height }) {
    return (
        <ThemeProvider theme={tableTheme}>
            <Box
                sx={{
                    height: height,
                    width: 'auto',
                    '.MuiDataGrid-columnSeparator': {
                        display: 'none',
                    },
                    '&.MuiDataGrid-root': {
                        borderColor: 'rgba(255, 197, 94, 1)',
                    },
                    "& .MuiDataGrid-row": {
                        borderTop: 1,
                        borderBottom: 0,
                        borderColor: '#FFC55E',
                    },
                    "& .MuiDataGrid-columnHeader": {
                        backgroundColor: '#FFC55E',
                    },
                }}
            >
                <DataGrid
                    sx={{
                        borderRadius: '25px',
                    }}
                    scrollbarSize={0}
                    rows={rows}
                    columns={columns}
                    editMode="row"
                    disableColumnResize={true}
                    disableAutosize={true}
                    onRowClick={eventRow}
                    getRowId={(row) => row.id}
                />
            </Box>
        </ThemeProvider>
    );
}