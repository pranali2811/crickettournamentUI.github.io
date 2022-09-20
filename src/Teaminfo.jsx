import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import I from './images/Iflag.png'
import h from './images/hflag.png'
import s from './images/sflag.png'
import a from './images/aflag.png'
import vk from './images/vk.jpg'
import Ind from './images/India.png'
import slfag from './images/sflag.png'
import sl from './images/sl.jpg'

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  maxWidth: 400,
  color: theme.palette.text.primary,
}));



const Teaminfo = () => {
  return (
    <div>
    <div class="col  mb-2" style={{display: 'flex', flexDirection: 'row', paddingTop: '70px'}}>
    <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
      <StyledPaper
        sx={{
          my: 1,
          p: 2,
        }}
      >
        <Typography varienat='body' align='center' fontSize={'20px'} color='black' fontWeight= {'bold'}>
    <img src={ I } width='40px' height='25px' float='left'></img> TEAM INDIA 
        </Typography>
        <br />
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar> <img src={ Ind } width='80px' height='40px' float='left'/></Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>Virat Kohli</Typography>
            <Typography noWrap>Batsman</Typography>
          </Grid>
        </Grid>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar><img src={ Ind } width='80px' height='40px' float='left'/></Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>Rohit Sharma</Typography>
            <Typography noWrap>Batsman,Captain</Typography>
          </Grid>
        </Grid>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar><img src={ Ind } width='80px' height='40px' float='left'/></Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>Suryakumar Yadav </Typography>
            <Typography noWrap>Batsman</Typography>
          </Grid>
        </Grid>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar><img src={ Ind } width='80px' height='40px' float='left'/></Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>KL Rahul</Typography>
            <Typography noWrap>Batsman</Typography>
          </Grid>
        </Grid>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar><img src={ Ind } width='80px' height='40px' float='left'/></Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>Dinesh Karthik</Typography>
            <Typography noWrap>Batsman/Wicketkeeper</Typography>
          </Grid>
        </Grid>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar><img src={ Ind } width='80px' height='40px' float='left'/></Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>Hardik Pandya</Typography>
            <Typography noWrap>All rounder</Typography>
          </Grid>
        </Grid>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar><img src={ Ind } width='80px' height='40px' float='left'/></Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>Ravindra Jadeja</Typography>
            <Typography noWrap>All Rounder</Typography>
          </Grid>
        </Grid>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar><img src={ Ind } width='80px' height='40px' float='left'/></Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>Yuzvendra Chahal </Typography>
            <Typography noWrap>Bowler</Typography>
          </Grid>
        </Grid>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar><img src={ Ind } width='80px' height='40px' float='left'/></Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>Bhuvneshwar Kumar </Typography>
            <Typography noWrap>Bowler</Typography>
          </Grid>
        </Grid>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar><img src={ Ind } width='80px' height='40px' float='left'/></Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>Arshdeep Singh</Typography>
            <Typography noWrap>Bolwer</Typography>
          </Grid>
        </Grid>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar><img src={ Ind } width='80px' height='40px' float='left'/></Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>R. Ashwin </Typography>
            <Typography noWrap>Bowler</Typography>
          </Grid>
        </Grid>
      </StyledPaper>
      
    </Box>
     
    {/* SL */}
    
    <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
      <StyledPaper
        sx={{
          my: 1,
          mx: 2,
          p: 2,
        }}
      >
        <Typography varienat='body' align='center' fontSize={'20px'} color='black' fontWeight= {'bold'}>
    <img src={ slfag } width='40px' height='25px' float='left'></img> TEAM SRILANKA
        </Typography>
        <br />
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar> <img src={ sl } width='80px' height='40px' float='left'/></Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>Pathum Nissanka</Typography>
            <Typography noWrap>Batsman</Typography>
          </Grid>
        </Grid>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar><img src={ sl } width='80px' height='40px' float='left'/></Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap> Dasun Shanaka</Typography>
            <Typography noWrap>Batsman,Captain</Typography>
          </Grid>
        </Grid>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar><img src={ sl } width='80px' height='40px' float='left'/></Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap> Danushka Gunathilaka </Typography>
            <Typography noWrap>Batsman</Typography>
          </Grid>
        </Grid>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar><img src={ sl  } width='80px' height='40px' float='left'/></Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>Dhananjaya de Silva</Typography>
            <Typography noWrap>Batsman</Typography>
          </Grid>
        </Grid>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar><img src={ sl } width='80px' height='40px' float='left'/></Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>Kusal Mendis</Typography>
            <Typography noWrap>Batsman/Wicketkeeper</Typography>
          </Grid>
        </Grid>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar><img src={ sl } width='80px' height='40px' float='left'/></Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>Wanindu Hasaranga</Typography>
            <Typography noWrap>All rounder</Typography>
          </Grid>
        </Grid>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar><img src={ sl } width='80px' height='40px' float='left'/></Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>Chamika Karunaratne</Typography>
            <Typography noWrap>All Rounder</Typography>
          </Grid>
        </Grid>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar><img src={ sl  } width='80px' height='40px' float='left'/></Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>Pramod Madushan</Typography>
            <Typography noWrap>Bowler</Typography>
          </Grid>
        </Grid>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar><img src={ sl  } width='80px' height='40px' float='left'/></Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>Maheesh Theekshana </Typography>
            <Typography noWrap>Bowler</Typography>
          </Grid>
        </Grid>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar><img src={ sl  } width='80px' height='40px' float='left'/></Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>Dilshan Madushanka</Typography>
            <Typography noWrap>Bolwer</Typography>
          </Grid>
        </Grid>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar><img src={ sl  } width='80px' height='40px' float='left'/></Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>Bhanuka Rajapaksa </Typography>
            <Typography noWrap>Batsman</Typography>
          </Grid>
        </Grid>
      </StyledPaper>
      
    </Box>

    {/* hk */}
    <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
      <StyledPaper
        sx={{
          my: 1,
          mx: 2,
          p: 2,
        }}
      >
        <Typography varienat='body' align='center' fontSize={'20px'} color='black' fontWeight= {'bold'}>
    <img src={ h } width='40px' height='25px' float='left'></img> TEAM HONG KONG
        </Typography>
        <br />
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar> <img src={ h } width='80px' height='40px' float='left'/></Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>Adit Gorawara </Typography>
            <Typography noWrap>Batsman</Typography>
          </Grid>
        </Grid>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar><img src={ h } width='80px' height='40px' float='left'/></Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap> Nizakat Khan</Typography>
            <Typography noWrap>Batsman,Captain</Typography>
          </Grid>
        </Grid>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar><img src={ h } width='80px' height='40px' float='left'/></Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap> Ehsan Khan</Typography>
            <Typography noWrap>Batsman</Typography>
          </Grid>
        </Grid>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar><img src={ h  } width='80px' height='40px' float='left'/></Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>Dhananjaya de Silva</Typography>
            <Typography noWrap>Batsman</Typography>
          </Grid>
        </Grid>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar><img src={ h } width='80px' height='40px' float='left'/></Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>Jamie Atkinson</Typography>
            <Typography noWrap>Batsman/Wicketkeeper</Typography>
          </Grid>
        </Grid>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar><img src={ h } width='80px' height='40px' float='left'/></Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>Kinchit Shah</Typography>
            <Typography noWrap>All rounder</Typography>
          </Grid>
        </Grid>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar><img src={ h } width='80px' height='40px' float='left'/></Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>Haroon Arshad</Typography>
            <Typography noWrap>All Rounder</Typography>
          </Grid>
        </Grid>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar><img src={ h } width='80px' height='40px' float='left'/></Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>Vikas Sharma </Typography>
            <Typography noWrap>Bowler</Typography>
          </Grid>
        </Grid>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar><img src={ h } width='80px' height='40px' float='left'/></Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>Hassan Mohammad Khan </Typography>
            <Typography noWrap>Bowler</Typography>
          </Grid>
        </Grid>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar><img src={ h } width='80px' height='40px' float='left'/></Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>Ghazanfar Mohammad</Typography>
            <Typography noWrap>Bolwer</Typography>
          </Grid>
        </Grid>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar><img src={ h  } width='80px' height='40px' float='left'/></Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>Waqas Khan </Typography>
            <Typography noWrap>Batsman</Typography>
          </Grid>
        </Grid>
      </StyledPaper>
      
    </Box>
    </div>
    </div>
    
    
  );
}

export default Teaminfo;
