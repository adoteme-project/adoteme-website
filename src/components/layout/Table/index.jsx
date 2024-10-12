import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import axios from 'axios';

const StyledTableCell = styled(TableCell)(() => ({
  backgroundColor: '#FFC55E',
  fontWeight: 'bold',
  textAlign: 'center',
  width: '200px'

}));

const TableComponent = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);

  
   useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/exampleTable.json');
        const data = response.data;
        console.log("Dadossss",data)

        if (data.length > 0) {
          const columnsFromDTO = Object.keys(data[0]).map((key) => ({
            id: key,
            label:key
              .replace(/_/g, ' ')
              .split(' ') 
              .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1))
              .join(' '),
            align: 'center',
          }));

          setColumns(columnsFromDTO);
          setRows(data);
        }
      } catch (error) {
        console.error('Erro ao buscar os dados da API', error);
      }
    };

    fetchData();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
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
                    {columns.map((column) => {
                      return (
                        <TableCell key={column.id} align={column.align} style={{ textAlign: 'center' }}>
                          {row[column.id]}
                        </TableCell>
                      );
                    })}
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
  );
};

export default TableComponent;
