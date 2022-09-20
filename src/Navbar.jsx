import { AppBar, Toolbar, IconButton, Typography, Stack, Button, createTheme, ThemeProvider } from "@mui/material";
import { SportsCricketTwoTone } from '@mui/icons-material';
import './style.css'
import { useNavigate } from "react-router-dom";


const customTheme = createTheme({
    palette: {
      secondary: {
        main: "#b3e5fc",
        contrastText: "#060957"
      }
    }
  });

const Navbar = () =>{
    const navigate = useNavigate();
    return(
        <ThemeProvider theme={customTheme}>
        <AppBar position="fixed" color={"secondary"}>
            <Toolbar >
                <IconButton color="inherit" edge="start">
                   <SportsCricketTwoTone sx={{ fontSize: 40 }} />
                </IconButton>
                <Typography variant="h5" sx={{ flexGrow:1 , fontWeight: 'bold'}}>
                    ASIA CUP 2022
                </Typography>
                <Stack direction='row' spacing={2}>
                    <Button color="inherit" style={{fontWeight: 'bold', fontSize: '15px'}} onClick={() => navigate("/")}>Home</Button>
                    <Button color="inherit" style={{fontWeight: 'bold', fontSize: '15px'}} onClick={() => navigate("/country")}>Countries</Button>
                    <Button color="inherit" style={{fontWeight: 'bold', fontSize: '15px'}} onClick={() => navigate("/teams")}>Teams</Button>
                    <Button color="inherit"style={{fontWeight: 'bold', fontSize: '15px'}} onClick={() => navigate("/matches")}>Matches</Button>
                    <Button color="inherit" style={{fontWeight: 'bold', fontSize: '15px'}} onClick={() => navigate("/results")}>Results</Button>
                </Stack>
            </Toolbar>
        </AppBar>
        </ThemeProvider>
    )
}

export default Navbar;