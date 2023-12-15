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
import GenreChildParentInputBox from '../components/GenreChildParentInputBox';

const Genres = () => {
  const [genres, setGenres] = useState([]);
  const [selectableGenres, setSimpleGenres] = useState([]);
  const genreService = new GenreService();

  useEffect(() => {
    genreService.getGenresAsync().then((genres) => {
      if (genres) {
        setGenres(genres)
      };
    });

    //Todo: replace by single API/database call... 
    genreService.getGenresSimplifiedAsync().then((genres) => {
      if (genres) {
        setSimpleGenres(genres)
      };
    })
  }, []);

  const editClickHandler = async (genreId) => {
    await genreService.getGenreByIdAsync(genreId).then((genre) => {
      console.log("qewrqe", genre);
      Swal.fire({
        title: `Edit ${genre.name}`,
        html: ReactDOMServer.renderToStaticMarkup(< GenreInputBox genre={genre} />),
        showCancelButton: true,
        focusConfirm: false,
        preConfirm: () => {
          const id = genreId;
          const name = document.getElementById('swal-input-name').value;
          const countryCodes = Array.from(document.querySelectorAll('#swal-input-countries:checked')).map(input => input.value);
          const dateOfOrigin = document.getElementById('swal-input-date').value;
          const description = document.getElementById('swal-input-description').value;
          const spotifyTrackPreviewId = document.getElementById('swal-input-spotify').value;

          return { id, name, countryCodes, dateOfOrigin, description, spotifyTrackPreviewId };
        },
        confirmButtonText: "Update",
        cancelButtonText: "Cancel",
        width: '100vw',
      }).then((result) => {
        if (result.isConfirmed) {
          let validationResults = genreValidation(result.value);

          if (validationResults.length === 0) {
            try {
              genreService.updateGenreAsync(result.value);
              Swal.fire('Success', 'Genre updated successfully!', 'success').then(() => window.location.reload());
            } catch (error) {
              Swal.fire('Error', 'An error occurred while updating the genre', 'error');
            }
          } else {
            Swal.fire('Validation error', ReactDOMServer.renderToStaticMarkup(<ValidationList validationResults={validationResults} />), 'error');
          }
        }
      });
    });
  };

  const parentChildEditClickHandler = async (genreId) => {
    await genreService.getGenreByIdAsync(genreId).then((genre) => {
      Swal.fire({
        title: `Specify Child/Sub Genres for ${genre.name}`,
        html: ReactDOMServer.renderToStaticMarkup(<GenreChildParentInputBox genreId={genreId} children={genre.children} selectableGenres={selectableGenres} />),
        showCancelButton: true,
        focusConfirm: false,
        preConfirm: () => {
          const id = genreId;
          const children = Array.from(document.querySelectorAll('#swal-input-children:checked')).map(input => input.value);

          return { id, children }
        },
        confirmButtonText: "Set",
        cancelButtonText: "Cancel",
        width: '100vw',
      }).then((result) => {
        if (result.isConfirmed) {
          try {
            genreService.updateGenreHierarchy(genreId, result.value.children);
            Swal.fire('Success', 'Genre subgenres updated successfully!', 'success').then(() => window.location.reload());
          } catch (error) {
            Swal.fire('Error', 'An error occurred while updating the genre hierarchy', 'error');
          }
        }
      });
    });
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
    const newGenre = {
      countryCodes: [],
      dateOfOrigin: "2000-01-01",
      description: "",
      name: "",
      spotifyTrackPreviewId: ""
    };

    await Swal.fire({
      title: 'Create a new genre',
      html: ReactDOMServer.renderToStaticMarkup(< GenreInputBox genre={newGenre} />),
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
        console.log("result: ", result.value);

        let validationResults = genreValidation(result.value);

        if (validationResults.length === 0) {
          try {
            genreService.createNewGenreAsync(result.value).then(
              Swal.fire('Success', 'Genre created successfully!', 'success').then(() => window.location.reload())
            );
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
          onDeleteClick={c => deleteClickHandler(c)}
          onParentChildEditClick={c => parentChildEditClickHandler(c)} />

      </div>
      <button className='add-genre-button' onClick={c => newClickHandler(c)} >
        <AddCircleOutlineIcon />
        <span>Add a new genre</span>
      </button>
    </div>
  );
}

export default Genres; 