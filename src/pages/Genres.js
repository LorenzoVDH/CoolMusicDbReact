import React from 'react';
import GenreTable from '../components/GenreTable';
import GenreService from '../services/GenreService';
import './Genres.css'; 

const Genres = () => {
    const genreService = new GenreService();
    const genres = genreService.getGenres();
  
    return (
      <div>
        <h1 className="page-title">Genres</h1>
        <div className="genre-table-wrapper">
          <GenreTable genres={genres} />
        </div>
      </div>
    );  
}

export default Genres; 