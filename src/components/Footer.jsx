export const Footer = () => {
    return (
      <footer className="bg-primary text-light py-3 fixed-bottom w-100 text-center">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} Moviepedia - Tu buscador de películas favorito
        </p>
      </footer>
    );
  };