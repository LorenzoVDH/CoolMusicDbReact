import { React, useState, useEffect } from 'react';
import GenreTable from '../components/GenreTable';
import GenreService from '../services/GenreService';
import './Genres.css';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Swal from "sweetalert2";
import GenreInputBox from '../components/GenreInputBox';
import ReactDOMServer from 'react-dom/server';
import ValidationList from '../components/ValidationList';
import genreValidation from '../components/GenreValidation';
import { Button } from '@mui/material';

const Genres = () => {
  const [genres, setGenres] = useState([]);
  const genreService = new GenreService();

  useEffect(() => {
    genreService.getGenresAsync().then((genres) => {
      if (genres) {
        setGenres(genres)
      };
    });
  }, []);

  const editClickHandler = (c) => {

    const genre = genreService.getGenreByIdAsync(c).then((genre) => {
      console.log(genre);
    });

    // await Swal.fire({
    //   title: `Edit genre #${c}`,
    //   html: ReactDOMServer.renderToStaticMarkup(< GenreInputBox />),
    //   showCancelButton: true,
    //   focusConfirm: false,
    //   preConfirm: () => {
    //     const name = c.name;
    //     const countryCodes = Array.from(document.querySelectorAll('#swal-input-countries:checked')).map(input => input.value);
    //     const dateOfOrigin = document.getElementById('swal-input-date').value;
    //     const description = document.getElementById('swal-input-description').value;
    //     const spotifyTrackPreviewId = document.getElementById('swal-input-spotify').value;

    //     return { name, countryCodes, dateOfOrigin, description, spotifyTrackPreviewId };
    //   },
    //   confirmButtonText: "Edit",
    //   cancelButtonText: "Cancel",
    //   width: '100vw',
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     let validationResults = genreValidation(result.value);

    //     if (validationResults.length === 0) {
    //       try {
    //         genreService.createNewGenreAsync(result.value);
    //         Swal.fire('Success', 'Genre created successfully!', 'success').then(() => window.location.reload());
    //       } catch (error) {
    //         Swal.fire('Error', 'An error occurred while creating the genre', 'error');
    //       }
    //     } else {
    //       Swal.fire('Validation error', ReactDOMServer.renderToStaticMarkup(<ValidationList validationResults={validationResults} />), 'error');
    //     }
    //   }
    // });
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

  const newClickHandler = async (c) => {
    await Swal.fire({
      title: 'Create a new genre',
      html: ReactDOMServer.renderToStaticMarkup(< GenreInputBox />),
      showCancelButton: true,
      focusConfirm: false,
      preConfirm: () => {
        const name = document.getElementById('swal-input-name').value;
        const countryCodes = Array.from(document.querySelectorAll('#swal-input-countries:checked')).map(input => input.value);
        const dateOfOrigin = document.getElementById('swal-input-date').value;
        const description = document.getElementById('swal-input-description').value;
        const spotifyTrackPreviewId = document.getElementById('swal-input-spotify').value;

        return { name, countryCodes, dateOfOrigin, description, spotifyTrackPreviewId };
      },
      confirmButtonText: "Add",
      cancelButtonText: "Cancel",
      width: '100vw',
    }).then((result) => {
      if (result.isConfirmed) {
        let validationResults = genreValidation(result.value);

        if (validationResults.length === 0) {
          try {
            genreService.createNewGenreAsync(result.value);
            Swal.fire('Success', 'Genre created successfully!', 'success').then(() => window.location.reload());
          } catch (error) {
            Swal.fire('Error', 'An error occurred while creating the genre', 'error');
          }
        } else {
          Swal.fire('Validation error', ReactDOMServer.renderToStaticMarkup(<ValidationList validationResults={validationResults} />), 'error');
        }
      }
    });
  }

  return genres && (
    <div className="genre-page-container">
      <h1 className="page-title">Genres</h1>
      <div className="genre-table-wrapper">
        <GenreTable genres={genres}
          onEditClick={c => editClickHandler(c)}
          onDeleteClick={c => deleteClickHandler(c)} />

        <button className='add-genre-button' onClick={c => newClickHandler(c)} >
          <AddCircleOutlineIcon />
          <span>Add a new genre</span>
        </button>
      </div>
    </div>
  );
}

export default Genres; 