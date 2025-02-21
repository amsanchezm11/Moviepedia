import { MovieCard } from "./MovieCard";

export const Main = ({ movies }) => {
    return (
        <div className="container-fluid mt-4 p-5" style={{ maxHeight: "80vh", overflowY: "auto", width: "100%" }}>
            <div className="row justify-content-center g-4 d-flex" style={{ width: "100%" }}>
                {movies.length > 0 ? (
                    movies.map((movie, index) => (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index} style={{ display: 'flex', justifyContent: 'center' }}>
                            <MovieCard
                                title={movie.title}
                                year={movie.year}
                                poster={movie.poster}
                            />
                        </div>
                    ))
                ) : (
                    <div className="text-center mt-5">
                        <p className="fs-4 text-muted">No se encontraron películas.</p>
                    </div>
                )}
            </div>
        </div>
    );
};
