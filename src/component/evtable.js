import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
} from '@mui/material';

const EVTable = ({ data }) => {
  const [page, setPage] = useState(0); 
  const [rowsPerPage, setRowsPerPage] = useState(5); 

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); 
  };

  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedData = data.slice(startIndex, endIndex);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>VIN</TableCell>
            <TableCell>Make</TableCell>
            <TableCell>Model</TableCell>
            <TableCell>City</TableCell>
            <TableCell>County</TableCell>
            <TableCell>Electric Range</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {paginatedData.map((row, index) => (
            <TableRow key={row.VIN || index}>
              <TableCell>{row?.["VIN (1-10)"]}</TableCell>
              <TableCell>{row.Make}</TableCell>
              <TableCell>{row.Model}</TableCell>
              <TableCell>{row.City}</TableCell>
              <TableCell>{row.County}</TableCell>
              <TableCell>{row?.["Electric Range"]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]} 
        component="div"
        count={data.length} 
        rowsPerPage={rowsPerPage} 
        page={page} 
        onPageChange={handleChangePage} 
        onRowsPerPageChange={handleChangeRowsPerPage} 
      />
    </TableContainer>
  );
};

export default EVTable;
