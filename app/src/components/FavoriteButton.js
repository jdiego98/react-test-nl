import React, { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function FavoriteButton({ item, onlyRemove }) {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);
  const isFavorite = favorites.some((favItem) => favItem.id === item.id);

  const handleFavoriteClick = () => {
    if (onlyRemove && !isFavorite) return;
    toggleFavorite(item);
  };

  return (
    <IconButton
      onClick={handleFavoriteClick}
      color="primary"
      aria-label={isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      disabled={isFavorite && !onlyRemove}
    >
      {onlyRemove ? (
        <DeleteIcon color="delete" />
      ) : isFavorite ? (
        <FavoriteIcon color='secondary'/>
      ) : (
        <FavoriteBorderIcon/>
      )}
    </IconButton>
  );

}

export default FavoriteButton;
