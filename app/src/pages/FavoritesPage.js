import React, { useContext, useEffect, useState } from 'react';
import { FavoritesContext } from '../context/FavoritesContext';
import PaginatedGrid from '../components/PaginatedGrid';
import ItemCard from '../components/ItemCard';
import { Grid, Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
function FavoritesPage(){
    const { favorites } = useContext(FavoritesContext);
    const [page, setPage] = useState(1);
    const itemsPerPage = 9;

    useEffect(() => {
        if(favorites.length > 0 && page > 1 && favorites.length <= (page-1)*itemsPerPage){
            setPage(page - 1);
        }
    }, [favorites, page]);

    if (favorites.length === 0) {
        return (
            <Container sx={{ marginBlock: 6, textAlign: 'center' }}>
            <Typography variant="h5">Aún no tienes favoritos</Typography>
            <Typography variant="body1" color="textSecondary" style={{ marginBottom: '20px' }}>
                Explora nuestros productos y agrega algunos a tus favoritos.
            </Typography>
            <Button variant="contained" color="primary" component={Link} to="/">
                Explorar Productos
            </Button>
            </Container>
        );
    }

    return (
        <Container sx={{marginBlock: 6}}>
            <Typography variant='h1' style={{textAlign: 'center', marginBottom: '5rem'}}>Items Favoritos</Typography>            
            <PaginatedGrid
            items={favorites}
            itemsPerPage={itemsPerPage}
            page={page}
            setPage={setPage}
            totalItems={favorites.length}
            children={(item) => (
                <Grid item xs={12} sm={6} md={4} key={item.id}>
                    <ItemCard item={item}/>
                </Grid>
            )}>
        </PaginatedGrid>            
        </Container>
    )
}

export default FavoritesPage;