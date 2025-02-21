import './App.css';
import { useState } from "react";
import { Footer } from './components/Footer';
import Header from './components/Header';
import { Main } from './components/Main'; 

function App() {
  const [movies, setMovies] = useState([]); 

  return (
    <> 
      <Header setMovies={setMovies} />
      <Main movies={movies} />
      <Footer />
    </>
  );
}

export default App;
