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
import Scoretable from './Scoretable';
import bg from './images/footerbg.jpg'
import trophy from './images/R2.png'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { IconButton } from '@mui/material';



const Results = () => {
  return (
    <div style={{ paddingTop: '70px', paddingBottom: '70px'}}>
      <div style={{ backgroundImage: `url(${bg})`,width: '1500px', height: '550px', borderRadius:'20px'}}>
      
        <Typography sx={{paddingLeft: '42%', paddingTop: '22%', fontSize:'270%', color: '#060957' }}>
        <IconButton color="inherit" edge="start" sx={{paddingLeft: '11%', fontSize:'270%' }}>
              <EmojiEventsIcon sx={{ fontSize: 100, color: '#060957'}} />
        </IconButton>
        <br />
          ASIA CUP 2022
        </Typography>
      </div>
        <Scoretable />
        
    </div>
  );
}

export default Results;
