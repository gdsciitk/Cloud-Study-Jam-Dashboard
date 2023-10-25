import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel'; // Import TableSortLabel
import Paper from '@mui/material/Paper';
import SearchBar from '../Searchbar';
import datacsv from '../data/data.csv';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${theme.breakpoints.up('sm')}`]: {
    padding: '8px',
  },
  [`&.${theme.breakpoints.down('sm')}`]: {
    padding: '4px',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
}));

export default function CustomizedTables() {
  const [data, setData] = useState([]);
  const [colArr, setColumn] = useState([]);
  const [values, setValues] = useState([]);
  const [searched, setSearched] = useState('');
  const [rows, setRows] = useState([]);
  const [sortColumnIndex, setSortColumnIndex] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');

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

            setData(result.data);
            setColumn(colArr[0]);
            setValues(valArr);
            setRows(valArr);
          },
        });
      });
  }, []);

  const handleSearchInputChange = (value) => {
    setSearched(value);
    const filteredRows = values.filter((row) => {
      return row[0].toLowerCase().includes(value.toLowerCase());
    });
    setRows(filteredRows);
  };

  const cancelSearch = () => {
    setSearched('');
    setRows(values);
  };

  const handleHeaderClick = (columnIndex) => {
    if (columnIndex === sortColumnIndex) {
      // Toggle the sorting direction
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      // Set the new sorting column and default to ascending order
      setSortColumnIndex(columnIndex);
      setSortDirection('asc');
    }

    const sortedRows = [...rows].sort((a, b) => {
      const sortOrder = sortDirection === 'asc' ? 1 : -1;
      return a[columnIndex].localeCompare(b[columnIndex]) * sortOrder;
    });

    setRows(sortedRows);
  };

  return (
    <>
      <SearchBar value={searched} handleChange={handleSearchInputChange} cancelSearch={cancelSearch} />
      <TableContainer component={Paper} style={{ marginBottom: '10px' }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <SortableHeader
                label={colArr[11]}
                columnIndex={11}
                sortColumnIndex={sortColumnIndex}
                sortDirection={sortDirection}
                handleHeaderClick={handleHeaderClick}
              />
              <SortableHeader
                label={colArr[0]}
                columnIndex={0}
                sortColumnIndex={sortColumnIndex}
                sortDirection={sortDirection}
                handleHeaderClick={handleHeaderClick}
              />
              <SortableHeader
                label={colArr[6]}
                columnIndex={6}
                sortColumnIndex={sortColumnIndex}
                sortDirection={sortDirection}
                handleHeaderClick={handleHeaderClick}
              />
              <SortableHeader
                label={colArr[7]}
                columnIndex={7}
                sortColumnIndex={sortColumnIndex}
                sortDirection={sortDirection}
                handleHeaderClick={handleHeaderClick}
              />
              <SortableHeader
                label={colArr[8]}
                columnIndex={8}
                sortColumnIndex={sortColumnIndex}
                sortDirection={sortDirection}
                handleHeaderClick={handleHeaderClick}
              />
              <SortableHeader
                label={colArr[9]}
                columnIndex={9}
                sortColumnIndex={sortColumnIndex}
                sortDirection={sortDirection}
                handleHeaderClick={handleHeaderClick}
              />
              <SortableHeader
                label={colArr[10]}
                columnIndex={10}
                sortColumnIndex={sortColumnIndex}
                sortDirection={sortDirection}
                handleHeaderClick={handleHeaderClick}
              />
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  {row[11]}
                </StyledTableCell>
                <StyledTableCell align="left">{row[0]}</StyledTableCell>
                <StyledTableCell align="center">{row[6]}</StyledTableCell>
                <StyledTableCell align="center">{row[7]}</StyledTableCell>
                <StyledTableCell align="center">{row[8]}</StyledTableCell>
                <StyledTableCell align="center">{row[9]}</StyledTableCell>
                <StyledTableCell align="center">{row[10]}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

function SortableHeader({
  label,
  columnIndex,
  sortColumnIndex,
  sortDirection,
  handleHeaderClick,
}) {
  return (
    <StyledTableCell>
      <TableSortLabel
        active={columnIndex === sortColumnIndex}
        direction={columnIndex === sortColumnIndex ? sortDirection : 'asc'}
        onClick={() => handleHeaderClick(columnIndex)}
      >
        {label}
      </TableSortLabel>
    </StyledTableCell>
  );
}
