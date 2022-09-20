import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { IconButton } from "@mui/material"
import { Facebook, Instagram, Twitter, YouTube } from '@mui/icons-material';
import Image from './images/footerbg.jpg'
import Image3 from './images/f3.png'


const Footer = () => {
  return (
    <Box sx={{ bgcolor:'#b3e5fc'  , height: '300px'}}>
         <img src={Image3} width='270px' height='300px'/>
        
      <Container  sx={{ py: 6, height: '300px', float: 'right'}} >
     
     
        <Stack spacing={1}>

          <Typography align='center' paddingRight={ '70px' } fontSize={'20px'} color='#060957' fontWeight= {'bold'}>
          FOLLOW ASIA CUP ON SOCIAL
          </Typography>
          <Typography align='center' paddingRight={ '70px' }>
                <IconButton color="inherit" edge="start">
                   <Facebook sx={{ fontSize: 40 }} />
                </IconButton>
                <IconButton color="inherit" edge="start">
                   <Instagram sx={{ fontSize: 40 }} />
                </IconButton>
                <IconButton color="inherit" edge="start">
                   <Twitter sx={{ fontSize: 40 }} />
                </IconButton>
                <IconButton color="inherit" edge="start">
                   <YouTube sx={{ fontSize: 40 }} />
                </IconButton>
          </Typography>
            
          <Box>
            <Grid container spacing={4}>
              <Grid item xs={6} md={3}>
                <Stack spacing={1}>
                  <Typography  component="a"  fontSize={'20px'} color='#060957' fontWeight= {'bold'}>
                   ASIA CUP 
                  </Typography>
                  <Typography variant="caption" component="a" fontSize={'15px'} color='#060957'>
                    Homepage
                  </Typography>
                  <Typography variant="caption" component="a" fontSize={'15px'} color='#060957'>
                    Qualification Pathway
                  </Typography>
                  <Typography variant="caption" component="a" fontSize={'15px'} color='#060957'>
                    Volunteers
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={6} md={3}>
                <Stack spacing={1}>
                  <Typography variant="caption" component="a" fontSize={'20px'} color='#060957' fontWeight= {'bold'}>
                    MATCHES
                  </Typography>
                  <Typography variant="caption" component="a" fontSize={'15px'} color='#060957'>
                    Men's Fixture 
                  </Typography>
                </Stack>
              </Grid>

              <Grid item xs={6} md={3}>
              <Stack spacing={1}>
                  <Typography variant="caption" component="a" fontSize={'20px'} color='#060957' fontWeight= {'bold'}>
                    TOURNAMENT
                  </Typography>
                  <Typography variant="caption" component="a" fontSize={'15px'} color='#060957'>
                    Standings
                  </Typography>
                  <Typography variant="caption" component="a" fontSize={'15px'} color='#060957'>
                    Venue
                  </Typography>
                </Stack>
              </Grid>

              <Grid item xs={6} md={3}>
              <Stack spacing={1}>
                  <Typography variant="caption" component="a" fontSize={'20px'} color='#060957' fontWeight= {'bold'}>
                    NEWS & VIDEOS
                  </Typography>
                  <Typography variant="caption" component="a" fontSize={'15px'} color='#060957'>
                    All Videos
                  </Typography>
                  <Typography variant="caption" component="a" fontSize={'15px'} color='#060957'>
                    All News
                  </Typography>
                  <Typography variant="caption" component="a" fontSize={'15px'} color='#060957'>
                    About Asia Cup
                  </Typography>
                </Stack>
              </Grid>

            </Grid>
          </Box>

          {/* <Box>
            <Select
              name="lang"
              variant="outlined"
              size="small"
              defaultValue="EN"
              sx={{
                borderWidth: '2px',
                borderStyle: 'solid',
                borderColor: 'common.white',
                color: 'common.white',
                '& .MuiSelect-icon': {
                  color: 'common.white'
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  border: 'none'
                }
              }}
            >
              <MenuItem value="ID">Bahasa Indonesia</MenuItem>
              <MenuItem value="EN">English</MenuItem>
            </Select>
          </Box> */}

        </Stack>
      </Container>

    </Box>
  )
}

export default Footer