import '../css/MovieCard.css';

export const MovieCard = ({ title, year, poster }) => {
    return (
        <div className="card d-flex flex-column" style={{ width: "18rem", height: "320px" }}>
            <img
                src={poster}
                className="card-img-top img-fluid"
                alt={title}
                style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body d-flex flex-column align-items-center justify-content-between text-center" style={{ flex: "1 0 auto" }}>
                <h5 className="card-title" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'normal' }}>
                    {title}
                </h5>
                <p className="card-text" style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    Año: {year}
                </p>
            </div>
        </div>
    );
};
