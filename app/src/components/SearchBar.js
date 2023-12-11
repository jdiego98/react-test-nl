import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

function SearchBarComponent({ searchTerm, setSearchTerm }) { 
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <Box sx={{ padding: '2rem', width: '100%'  }}>
            <TextField
                fullWidth
                label="Buscar items"
                variant="outlined"
                value={searchTerm}
                onChange={handleSearchChange}
            />
        </Box>
    );
}

export default SearchBarComponent;
