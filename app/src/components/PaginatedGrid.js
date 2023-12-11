import React, {useEffect} from "react";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";

const PaginatedGrid = ({
  items,
  itemsPerPage,
  page,
  setPage,
  totalItems,
  children,
}) => {
  const pageCount = Math.ceil(totalItems / itemsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const currentItems = items.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Grid container spacing={2}>
        {currentItems.map((item) => children(item))}
      </Grid>
      <Box sx={{ my: 4, display: "flex", justifyContent: "center" }}>
        <Pagination
          count={pageCount}
          page={page}
          onChange={handleChangePage}
          color="primary"
        />
      </Box>
    </Container>
  );
};

export default PaginatedGrid;
