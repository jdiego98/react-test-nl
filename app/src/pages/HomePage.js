import React, { useEffect, useState } from "react";
import ItemCard from "../components/ItemCard";
import useFetchItems from "../hooks/useFetchItems";
import useDebounce from "../hooks/useDebounce";
import SearchBarComponent from "../components/SearchBar";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import PaginatedGrid from "../components/PaginatedGrid";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const { items, isLoading, error } = useFetchItems(debouncedSearchTerm);
  const [page, setPage] = useState(1);
  const itemsPerPage = 9;

  const noResults = !isLoading && items.length === 0 && searchTerm.trim() !== "";

  useEffect(() => {
    setPage(1);
  }, [debouncedSearchTerm]);

  return (
    <Container
      sx={{
        marginBlock: 6,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",

      }}
    >
        <SearchBarComponent
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        {isLoading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "50vh",
            }}
          >
            <CircularProgress />
          </Box>
        ) : error ? (
          <div><Typography variant="h4">Error al buscar Items</Typography></div>
        ) : noResults ? (
          <Typography variant="h6">No se encontraron items con esa descripción la descripción <span style={{fontWeight: 'bold'}}>{searchTerm}</span></Typography>
        ) :(
          <PaginatedGrid
            items={items}
            itemsPerPage={itemsPerPage}
            page={page}
            setPage={setPage}
            totalItems={items.length}
            children={(item) => (
              <Grid item xs={12} sm={6} md={4} key={item.id}>
                <ItemCard item={item} page={"home"} />
              </Grid>
            )}
          />
        )}
    </Container>
  );
}
export default HomePage;

