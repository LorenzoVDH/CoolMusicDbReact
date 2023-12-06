import { React, useState, useEffect } from 'react';
import GenreTable from '../components/GenreTable';
import GenreService from '../services/GenreService';
import './Genres.css';

const Genres = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const genreService = new GenreService();

    genreService.getGenresAsync().then((genres) => {
      if (genres) {
        setGenres(genres)
      };
    });
  }, []);

  return genres && (
    <div className="genre-page-container">
      <h1 className="page-title">Genres</h1>
      <div className="genre-table-wrapper">
        <GenreTable genres={genres} />
      </div>
    </div>
  );
}

export default Genres; 