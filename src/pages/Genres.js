import { React, useState, useEffect } from 'react';
import GenreTable from '../components/GenreTable';
import GenreService from '../services/GenreService';
import './Genres.css';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Swal from "sweetalert2";


const Genres = () => {
  const [genres, setGenres] = useState([]);
  const genreService = new GenreService();

  useEffect(() => {
    if (genreService !== undefined || null) {
      genreService.getGenresAsync().then((genres) => {
        if (genres) {
          setGenres(genres)
        };
      });
    }
  }, []);

  const editClickHandler = (c) => {
    //genreSer
  };

  const deleteClickHandler = (c) => {
    Swal.fire({
      title: `Would you like to delete genre with ID ${c}?`,
      text: "This action cannot be reversed!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No"
    }).then((result) => {
      if (result.isConfirmed) {
        genreService.deleteGenre(c).then(() => {
          window.location.reload();
        });
      }
    });
  };

  return genres && (
    <div className="genre-page-container">
      <h1 className="page-title">Genres</h1>
      <div className="genre-table-wrapper">
        <GenreTable genres={genres}
          onEditClick={c => editClickHandler(c)}
          onDeleteClick={c => deleteClickHandler(c)} />
        <div className="genre-action-buttons">
          <span>Add new</span>
          <AddCircleOutlineIcon className='add-button' />
        </div>
      </div>
    </div>
  );
}

export default Genres; 