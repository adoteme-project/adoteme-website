import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import { useEffect, useState } from 'react';
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import { ptBR } from "@mui/material/locale";

const StyledTableCell = styled(TableCell)(() => ({
  backgroundColor: '#FFC55E',
  fontWeight: 'bold',
  textAlign: 'center',
  width: '200px',
}));

const locale = createTheme(
  {
    palette: {
      primary: { main: "#FFC55E" },
    },
  },
  ptBR
);

const TableComponent = ({ dataPets }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    if (dataPets.length > 0) {
      const columnsFromAttributes = Object.keys(dataPets[0]).map((key) => ({
        id: key,
        label: key
          .replace(/([A-Z])/g, ' $1')
          .trim()
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' '),
        align: 'center',
      }));
      setColumns(columnsFromAttributes);
      setRows(dataPets);
    }
  }, [dataPets]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <ThemeProvider theme={locale}>
      <section>
        <Paper sx={{ width: '100%', overflow: 'hidden', borderRadius: 10 }}>
          <TableContainer>
            <Table stickyHeader aria-label="tabela com paginação">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <StyledTableCell key={column.id} align={column.align}>
                      {column.label}
                    </StyledTableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => (
                    <TableRow hover key={index}>
                      {columns.map((column) => (
                        <TableCell key={column.id} align={column.align} style={{ textAlign: 'center' }}>
                          {row[column.id]}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </section>
    </ThemeProvider>
  );
};

export default TableComponent;