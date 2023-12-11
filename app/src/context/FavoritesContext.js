import React, {createContext, useState} from "react";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({children}) => {
    const [favorites, setFavorites] = useState([]);

    const toggleFavorite = item => {
        setFavorites(prevFavorites => 
            prevFavorites.some(favItem => favItem.id === item.id)
            ? prevFavorites.filter(favItem => favItem.id !== item.id)       
            : [...prevFavorites, item]     
        );
    };

    return (
        <FavoritesContext.Provider value={{favorites, toggleFavorite}}>
            {children}
        </FavoritesContext.Provider>
    )
}