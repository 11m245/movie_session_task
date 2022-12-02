import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';



function ButtonAppBar({ mode, setMode }) {

    const navigate = useNavigate();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Button onClick={() => navigate("/")} color="inherit">Home</Button>
                    <Button onClick={() => navigate("/movies")} color="inherit">Movies</Button>
                    <Button onClick={() => navigate("/add-movie")} color="inherit">Add Movie</Button>
                    <Button onClick={() => navigate("/color-game")} color="inherit">Color Game</Button>
                    <Button onClick={() => setMode(mode === "light" ? "dark" : "light")} color="inherit">
                        {mode === "light" ? "dark" : "light"} mode    {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export { ButtonAppBar };