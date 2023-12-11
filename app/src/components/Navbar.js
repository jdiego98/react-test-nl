import React from "react";
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


function NavBar(){

    const linkStyle = { textDecoration: 'none', color: 'inherit', marginRight: '20px' };
    const activeStyle = { ...linkStyle, fontWeight: 'bold' };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    <NavLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        JDA
                    </NavLink>
                </Typography>
                <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : linkStyle)}>
                    Inicio
                </NavLink>
                <NavLink to="/favorites" style={({ isActive }) => (isActive ? activeStyle : linkStyle)}>
                    Favoritos
                </NavLink>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;