import { useState } from "react";
import Logo from "./Logo";
import getMovies from "../helpers/getMovie";
import '../css/Header.css';

const Header = ({ setMovies }) => {
    // Hacemos uso de useState para almacenar los valores de título, año y tipo
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [type, setType] = useState('');

    const handleSearch = async () => {
        // Limpiamos los inputs cuando pulsamos Buscar
        document.getElementById("title").value = "";
        document.getElementById("year").value = "";
        document.getElementById("type").value = "";

        // Obtenemos las películas de la api correspondiente
        const moviesData = await getMovies(title, year, type); 
        // Añadimos los resultados obtenidos
        setMovies(moviesData); 
    };

    return (
        <header className="bg-primary text-light py-3 shadow-sm fixed-top w-100">
            <div className="container d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                    <Logo />
                </div>

                <form className="d-flex w-50">
                    <input
                        id="title"
                        className="form-control me-2"
                        type="search"
                        placeholder="Buscar por título..."
                        aria-label="Buscar"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <input
                        id="year"
                        className="form-control me-2"
                        type="number"
                        min={0}
                        step={1}
                        placeholder="Año"
                        aria-label="Año"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                    />
                    <select
                        className="form-select me-2"
                        aria-label="Seleccionar tipo"
                        value={type}
                        onChange={(e) => setType(e.target.value)}>
                        <option id="type" value="">Tipo</option>
                        <option value="movie">Película</option>
                        <option value="series">Serie</option>
                        <option value="episode">Episodio</option>
                    </select>
                    <button
                        className="btn btn-warning btn-outline-dark"
                        id="btn-enviar"
                        type="button"
                        onClick={handleSearch}>Buscar</button>
                </form>
            </div>
        </header>
    );
};

export default Header;
