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
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    align: 'center'
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(Winner, Victories, Years) {
  return {Winner, Victories, Years };
}

const rows = [
  createData('India', 7, '1984, 1988, 1991, 1995, 2010, 2016 & 2018' ),
  createData('SriLanka', 6, '1986, 1997, 2004, 2008, 2014, 2022'),
  createData('Pakistan', 2, '2000 & 2012')
];

const Mwin = () => {
  return (
    <div style={{ paddingTop: '70px', paddingBottom: '70px'}}>
        <div>
        <Typography varienat='body' align='center'  fontSize={'20px'} color='white' fontWeight= {'bold'}>
        Most Wins in Asia Cup
        </Typography>
        </div>
        <br />
    <TableContainer style={{ backgroundColor: '#ffffff'}}>
      <Table sx={{ minWidth: 700, color: '#f0f4c3' }} >
        <TableHead >
          <TableRow >
            <StyledTableCell style={{ color: '#060957', fontSize:'15px'}} >WINNER</StyledTableCell>
            <StyledTableCell style={{  color: '#060957', fontSize:'15px'}} align="right">VICTORIES</StyledTableCell>
            <StyledTableCell style={{ color: '#060957', fontSize:'15px'}} align="right">YEAR&nbsp;</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row" style={{ color: '#060957', fontSize:'15px'}}>
                {row.Winner}
              </StyledTableCell>
              <StyledTableCell style={{  color: '#060957', fontSize:'13px'}} align="right">{row.Victories}</StyledTableCell>
              <StyledTableCell style={{ color: '#060957', fontSize:'13px'}} align="right">{row.Years}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default Mwin;
