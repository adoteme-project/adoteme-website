import { Box, createTheme, ThemeProvider } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { ptBR } from "@mui/material/locale";

const tableTheme = createTheme({
    palette: {
        primary: { main: "#FFC55E" },
    }
}, ptBR);

export default function TableOng({ rows, columns }) {

    return (
        <ThemeProvider theme={tableTheme}>
            <Box sx={{
                width: '100%', height: 500, '& .super-app-theme--header': {
                    backgroundColor: 'rgba(255, 197, 94, 1)',
                    color: 'white'
                },
            }}>
                <DataGrid rows={rows} columns={columns} editMode="row" />
            </Box>
        </ThemeProvider>

    );
}