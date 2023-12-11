import React from "react";
import FavoriteButton from "./FavoriteButton";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActions } from "@mui/material";
import Fade from "@mui/material/Fade";

function ItemCard({ item, page }) {

  return (
    <Fade in timeout={300}>
      <Card
        sx={{
          maxWidth: 350,
          mb: 2,
          maxHeight: 750,
          transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out', 
          '&:hover': {
            transform: 'translateY(-5px)', 
            boxShadow: '0 8px 24px rgba(0,0,0,0.2)', 
          },
        }}
      >
        <CardMedia
          component="img"
          height="340"
          image={item.images[0]}
          alt={item.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${item.price}
          </Typography>
        </CardContent>
        <CardActions>
          <FavoriteButton
            item={item}
            onlyRemove={page === "home" ? false : true}
          />
        </CardActions>
      </Card>
    </Fade>
  );
}

export default ItemCard;
