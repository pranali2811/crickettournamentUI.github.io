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
import Upmatches from './Upmatches';
import Summary from './Summary';



const Matches = () => {
  return (
    <div style={{ paddingTop: '70px', paddingBottom: '70px'}}>
      <Upmatches />
      <Summary />
    
    </div>
  );
}

export default Matches;
