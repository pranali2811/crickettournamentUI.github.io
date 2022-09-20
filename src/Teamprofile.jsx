import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Img from './images/sl.jpg'
import indImg from './images/India.png'
import hkImg from './images/hk.png'
import afImg from './images/af.webp'
import Summary from './Summary';
import Typography from '@mui/material/Typography';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createDataR(Player, Matches, Avg, Runs) {
  return {Player, Matches, Avg, Runs};
}

const Rrows = [
  createDataR('Virat Kohli', 5,92,276),
  createDataR('Rohit Sharma', 4,33.25,133),
  createDataR('Suryakumar Yadav', 5, 34.75, 139),
  createDataR('KL Rahul', 5, 26.5, 132),
  createDataR('Dinesh Karthik', 3,18,50),
  
];

function createDataW(Player, Matches, Econ, Wickets) {
    return {Player, Matches, Econ, Wickets};
  }

const Wrows = [
    createDataW('Hardik Pandya', 5,7.69,4),
    createDataW('Ravindra Jadeja', 2,4.33,1),
    createDataW('Yuzvendra Chahal', 5, 6.5, 6),
    createDataW('Bhuvneshwar Kumar', 5, 6.05, 11),
    createDataW('Arshdeep Singh', 5,8.62,5),
    createDataW('R. Ashwin ', 3,8.44,2),
  ];

const Teamprofile = () => {
  return (
    <div style={{ paddingTop: '50px', paddingBottom: '70px'}}>
         <Typography varienat='body' align='center'  fontSize={'20px'} color='white' fontWeight= {'bold'}>
            STATISTICS
        </Typography>
        
        <div>
        <Typography variant='body' align='center'  fontSize={'20px'} color='white' fontWeight= {'bold'}>
           Runs
        </Typography>
        </div>
        <br />
    <TableContainer style={{ backgroundColor: '#a5d6a7'}}>
      <Table sx={{ minWidth: 700, color: 'white' }} >
        <TableHead style={{ backgroundColor: 'white'}}>
          <TableRow style={{ backgroundColor: 'white'}}>
            <StyledTableCell style={{ backgroundColor: 'white', color: '#060957', fontSize:'15px'}} >PLAYER</StyledTableCell>
            <StyledTableCell style={{ backgroundColor: 'white', color: '#060957', fontSize:'15px'}} align="right">MATCHES</StyledTableCell>
            <StyledTableCell style={{ backgroundColor: 'white', color: '#060957', fontSize:'15px'}} align="right">AVG&nbsp;</StyledTableCell>
            <StyledTableCell style={{ backgroundColor: 'white', color: '#060957', fontSize:'15px'}} align="right">RUNS&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Rrows.map((row) => (
            <StyledTableRow key={row.Player}>
              <StyledTableCell component="th" scope="row" style={{ color: '#060957', fontSize:'15px'}}>
                {row.Player}
              </StyledTableCell>
              <StyledTableCell style={{ backgroundColor: 'white', color: '#060957', fontSize:'13px'}} align="right">{row.Matches}</StyledTableCell>
              <StyledTableCell style={{ color: '#060957', fontSize:'13px'}} align="right">{row.Avg}</StyledTableCell>
              <StyledTableCell style={{ backgroundColor: 'white', color: '#060957', fontSize:'13px'}} align="right">{row.Runs}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            <br /><br />
    {/* Wicket Table */}
    <div>
        <Typography variant='body' align='center'  fontSize={'20px'} color='white' fontWeight= {'bold'}>
           Wickets
        </Typography>
        </div>
        <br />
    <TableContainer style={{ backgroundColor: '#939ed5'}}>
      <Table sx={{ minWidth: 700, color: 'white' }} >
        <TableHead style={{ backgroundColor: 'white'}}>
          <TableRow style={{ backgroundColor: 'white'}}>
            <StyledTableCell style={{ backgroundColor: 'white', color: '#060957', fontSize:'15px'}} >PLAYER</StyledTableCell>
            <StyledTableCell style={{ backgroundColor: 'white', color: '#060957', fontSize:'15px'}} align="right">MATCHES</StyledTableCell>
            <StyledTableCell style={{ backgroundColor: 'white', color: '#060957', fontSize:'15px'}} align="right">Econ&nbsp;</StyledTableCell>
            <StyledTableCell style={{ backgroundColor: 'white', color: '#060957', fontSize:'15px'}} align="right">Wickets&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Wrows.map((row) => (
            <StyledTableRow key={row.Player}>
              <StyledTableCell component="th" scope="row" style={{ color: '#060957', fontSize:'15px'}}>
                {row.Player}
              </StyledTableCell>
              <StyledTableCell style={{ backgroundColor: 'white', color: '#060957', fontSize:'13px'}} align="right">{row.Matches}</StyledTableCell>
              <StyledTableCell style={{ color: '#060957', fontSize:'13px'}} align="right">{row.Econ}</StyledTableCell>
              <StyledTableCell style={{ backgroundColor: 'white', color: '#060957', fontSize:'13px'}} align="right">{row.Wickets}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default Teamprofile;
