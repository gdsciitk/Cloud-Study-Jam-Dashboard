import * as React from 'react';
import { useState, useRef } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SearchBar from '../Searchbar';
import { leaderboard } from '../../data';

const sortedLeaderboard = [...leaderboard].sort((a, b) => a.rank - b.rank);

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

let prevsearch = ""

export default function CustomizedTables() {
  const [searched, setSearched] = useState("");
  const [rows, setRows] = useState(sortedLeaderboard);

  if(prevsearch!=searched){
        const filteredRows = sortedLeaderboard.filter((row) => {
            return row.name.toLowerCase().includes(searched.toLowerCase());
        });
        prevsearch = searched;
        setRows(filteredRows);
  }

  const cancelSearch = () => {
    setSearched("");
    setRows(sortedLeaderboard);
  };

  const handleSearchInputChange = (value) => {
    setSearched(value);
  };

  return (
    <>
      <SearchBar value={searched} handleChange={handleSearchInputChange} cancelSearch={cancelSearch} />
      <TableContainer component={Paper} style={{ marginBottom: "10px" }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Rank</StyledTableCell>
              <StyledTableCell align="right">Name</StyledTableCell>
              <StyledTableCell align="right"># of Courses Completed</StyledTableCell>
              <StyledTableCell align="right"># of Skill Badges Completed</StyledTableCell>
              <StyledTableCell align="right"># of GenAI Game Completed</StyledTableCell>
              <StyledTableCell align="right">Total Completions of both Pathways</StyledTableCell>
              <StyledTableCell align="right">Redemption Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.rank}>
                <StyledTableCell component="th" scope="row">
                  {row.rank}
                </StyledTableCell>
                <StyledTableCell align="right">{row.name}</StyledTableCell>
                <StyledTableCell align="right">{row.courseC}</StyledTableCell>
                <StyledTableCell align="right">{row.SkillBadges}</StyledTableCell>
                <StyledTableCell align="right">{row.GenAI}</StyledTableCell>
                <StyledTableCell align="right">{row.TotalC}</StyledTableCell>
                <StyledTableCell align="right">{row.Redemption}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
