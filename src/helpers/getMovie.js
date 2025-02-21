const api_key = '83a27480';

const getMovies = async (title, year, type) => {
    // Configuramos la url con la api_key, el titulo, año y tipo
    const url = `http://www.omdbapi.com/?apikey=${api_key}&s=${title}&y=${year}&type=${type}`;
    // Obtenemos los resultados de la api
    const response = await fetch(url);
    // Parseamos los resultados a JSON
    const data = await response.json();

    console.log(data);

    /* Comprobamos si hemos obtenidos resultados, en caso TRUE retornamos el arrya de películas obtenidas
       en caso FALSE retornamos el array vacío y avisamos por consola que no se han obtenido películas */
    if (data.Response === "True") {
        // Hacemos uso de la función 'map' y por cada película en el array obtenido creamos un objeto película
        const movies = data.Search.map((movie) => {  
            return {
                title: movie.Title,
                year: movie.Year,
                poster: movie.Poster,
            };
        });

        return movies;
    } else {
        console.log("No hay películas asociadas");
        return [];
    }
}

export default getMovies;
