import logo from "../assets/logo.png";

function Logo() {
    const handleReload = () => {
        window.location.reload();
    };

    return (
        <div
            className="navbar-brand d-flex justify-content-center align-items-center"
            onClick={handleReload} 
            style={{ cursor: "pointer" }} 
        >
            <img
                src={logo}
                alt="Logo de peliculas"
                className="img-fluid"
                style={{ height: "40px" }}
            />
            <h4 className="ms-2 mb-0">Moviepedia</h4>
        </div>
    );
}

export default Logo;
