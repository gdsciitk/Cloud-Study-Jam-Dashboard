import * as React from 'react';
import Papa from 'papaparse';
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
import datacsv from './data.csv'

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
let firstRender = true

export default function CustomizedTables() {

  const [data, setData] = useState([]);
  const [colArr, setColumn] = useState([]);
  const [values, setValues] = useState([]);

  if(firstRender){

    fetch(datacsv)
    .then( res => res.text() )
    .then( csv => {
      const colArr = [];
      const valArr = [];

      Papa.parse(csv,{
        header: true,
        skipEmptyLines: true,
        complete: function(result){
          console.log("HERE")
          console.log(csv)
        
          result.data.map((d)=>{
            colArr.push(Object.keys(d));
            valArr.push(Object.values(d));
          });
          setData(result.data);
          setColumn(colArr[0]);
          setValues(valArr);
        }
      })
    })
    firstRender = false

  }

  console.log(values);

  const sortedLeaderboard = [...values].sort((a, b) => a[11] - b[11]);

  console.log('Leaderboard \n', sortedLeaderboard)

  const [searched, setSearched] = useState("");
  const [rows, setRows] = useState(sortedLeaderboard);


  if(prevsearch!=searched){
        const filteredRows = sortedLeaderboard.filter((row) => {
            return row[0].toLowerCase().includes(searched.toLowerCase());
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

  // Student Name, Student Email, Institution, Enrolment Date & Time, Enrolment Status, Google Cloud Skills Boost Profile URL, # of Courses Completed, # of Skill Badges Completed, # of GenAI Game Completed, Total Completions of both Pathways, Redemption Status, Rank
  //     0               1             1                  3                 4                              5                                6                       7                             8                            9                          10           11
  // colArr

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
            {rows.map((row) => (
              <StyledTableRow key={row[11]}>
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
