import React from "react";
import Home from "./Home";
import Navbar from "./Navbar"
import Footer from "./Footer";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Country from "./Country";
import { createTheme, ThemeProvider } from "@mui/material";
import Matches from "./Matches";
import Results from './Results'
import Scoretable from "./Scoretable";
import Teams from "./Teams";

const customTheme = createTheme({
    palette: {
      secondary: {
        main: "#060957",
        contrastText: "#6a0dad "
      }
    }
  });

const App = () => {
    return (
        <BrowserRouter>
        <ThemeProvider theme={customTheme}>
        <div bgcolor={"secondary"}>
        <Navbar />
            <div>
                <Routes>
                    <Route exact path="/" name="Home Page" element={<Home />} />
                    <Route exact path="/country" name="Country" element={<Country />} />
                    <Route exact path="/matches" name="Matches" element={<Matches />} />
                    <Route exact path="/results" name="Results" element={<Results />} />
                    <Route exact path="/teams" name="Teams" element={<Teams />} />
                </Routes>
            </div>
        <Footer />
        </div>
        </ThemeProvider>
        </BrowserRouter>
    )
}

export default App;