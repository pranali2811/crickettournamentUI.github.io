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

function createData(Team, Matches, Wins, Lost, Points) {
  return {Team, Matches, Wins, Lost, Points };
}

const rows = [
  createData('Sri Lanka', 3,3,0,10),
  createData('India', 3,2,1,8),
  createData('Hong Kong', 3, 1, 2, 7),
  createData('Pakistan', 3, 1, 2, 6),
  createData('Afghanistan', 3,0,1,3),
];

const Scoretable = () => {
  return (
    <div style={{ paddingTop: '70px', paddingBottom: '70px'}}>
        <div>
        <Typography varienat='body' align='center'  fontSize={'20px'} color='white' fontWeight= {'bold'}>
           TOURNAMENT SCORECARD
        </Typography>
        </div>
        <br />
    <TableContainer style={{ backgroundColor: '#ffc570'}}>
      <Table sx={{ minWidth: 700, color: 'white' }} >
        <TableHead style={{ backgroundColor: 'white'}}>
          <TableRow style={{ backgroundColor: 'white'}}>
            <StyledTableCell style={{ backgroundColor: 'white', color: '#060957', fontSize:'15px'}} >TEAMS</StyledTableCell>
            <StyledTableCell style={{ backgroundColor: 'white', color: '#060957', fontSize:'15px'}} align="right">MATCHES</StyledTableCell>
            <StyledTableCell style={{ backgroundColor: 'white', color: '#060957', fontSize:'15px'}} align="right">WINS&nbsp;</StyledTableCell>
            <StyledTableCell style={{ backgroundColor: 'white', color: '#060957', fontSize:'15px'}} align="right">LOST&nbsp;</StyledTableCell>
            <StyledTableCell style={{ backgroundColor: 'white', color: '#060957', fontSize:'15px'}} align="right">POINTS&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row" style={{ color: '#060957', fontSize:'15px'}}>
                {row.Team}
              </StyledTableCell>
              <StyledTableCell style={{ backgroundColor: 'white', color: '#060957', fontSize:'13px'}} align="right">{row.Matches}</StyledTableCell>
              <StyledTableCell style={{ color: '#060957', fontSize:'13px'}} align="right">{row.Wins}</StyledTableCell>
              <StyledTableCell style={{ backgroundColor: 'white', color: '#060957', fontSize:'13px'}} align="right">{row.Lost}</StyledTableCell>
              <StyledTableCell style={{ color: '#060957', fontSize:'13px'}} align="right">{row.Points}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default Scoretable;
