import { useState, useEffect } from "react";
import getMovies from "../helpers/getMovie";

export const GridCards = ({ busqueda }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getMovies(title,year,).then(card => setMovies(card));
    }, []);

    return (
        <>
            <h1 className="tituloGif w-75">{busqueda}</h1>          
            <MovieCard movies={movies} />
        </>
    );
};
