import * as React from 'react';
import Papa from 'papaparse';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SearchBar from '../Searchbar';
import datacsv from '../data/data.csv';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.inherit,
    color: theme.palette.common.inherit,
    fontWeight: "bold",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function CustomizedTables() {
  const [data, setData] = useState([]);
  const [colArr, setColumn] = useState([]);
  const [values, setValues] = useState([]);
  const [searched, setSearched] = useState("");
  const [rows, setRows] = useState([]);
  const [sortColumnIndex, setSortColumnIndex] = useState(9);

  useEffect(() => {
    fetch(datacsv)
      .then((res) => res.text())
      .then((csv) => {
        const colArr = [];
        const valArr = [];

        Papa.parse(csv, {
          header: true,
          skipEmptyLines: true,
          complete: function (result) {
            result.data.map((d) => {
              colArr.push(Object.keys(d));
              valArr.push(Object.values(d));
            });

            // Sort the data according to your specified order
            valArr.sort((a, b) => {
              if (a[sortColumnIndex] === b[sortColumnIndex]) {
                // If column 9 is equal, sort by columns 8, 7, and 6 in descending order
                return b[8] - a[8] || b[7] - a[7] || b[6] - a[6];
              }
              // Sort by column 9 in ascending order
              return a[sortColumnIndex] - b[sortColumnIndex];
            });

            setData(result.data);
            setColumn(colArr[0]);
            setValues(valArr);
            setRows(valArr);
          },
        });
      });
  }, [sortColumnIndex]); // Re-run the effect when sortColumnIndex changes

  const handleSearchInputChange = (value) => {
    setSearched(value);
    const filteredRows = values.filter((row) => {
      return row[0].toLowerCase().includes(value.toLowerCase());
    });
    setRows(filteredRows);
  };

  const cancelSearch = () => {
    setSearched("");
    setRows(values);
  };

  return (
    <>
      <SearchBar value={searched} handleChange={handleSearchInputChange} cancelSearch={cancelSearch} />
      <TableContainer component={Paper} style={{ marginBottom: "10px" }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>{colArr[11]}</StyledTableCell>
              <StyledTableCell align="right">{colArr[0]}</StyledTableCell>
              <StyledTableCell align="right">{colArr[6]}</StyledTableCell>
              <StyledTableCell align="right">{colArr[7]}</StyledTableCell>
              <StyledTableCell align="right">{colArr[8]}</StyledTableCell>
              <StyledTableCell align="right">{colArr[9]}</StyledTableCell>
              <StyledTableCell align="right">{colArr[10]}</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  {row[11]}
                </StyledTableCell>
                <StyledTableCell align="right">{row[0]}</StyledTableCell>
                <StyledTableCell align="right">{row[6]}</StyledTableCell>
                <StyledTableCell align="right">{row[7]}</StyledTableCell>
                <StyledTableCell align="right">{row[8]}</StyledTableCell>
                <StyledTableCell align="right">{row[9]}</StyledTableCell>
                <StyledTableCell align="right">{row[10]}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
