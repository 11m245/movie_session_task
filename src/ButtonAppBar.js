import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


function ButtonAppBar() {

    const navigate = useNavigate();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Button onClick={() => navigate("/")} color="inherit">Home</Button>
                    <Button onClick={() => navigate("/movies")} color="inherit">Movies</Button>
                    <Button onClick={() => navigate("/add-movie")} color="inherit">Add Movie</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export { ButtonAppBar };