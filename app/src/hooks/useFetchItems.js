import { useState, useEffect } from "react";

function useFetchItems(searchTerm) {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        const query = searchTerm ? `?title=${searchTerm}` : '';
        fetch(`https://api.escuelajs.co/api/v1/products${query}`)
        .then(response => {
            if(!response.ok){
                throw new   Error('Network error')
            }
            return response.json()
        })
        .then(data => {
            setItems(data);
            setIsLoading(false);
        })
        .catch(error => {
            setError(error);
            setIsLoading(false);
        })
    }, [searchTerm]);

    return {items, isLoading, error};
}


export default useFetchItems;