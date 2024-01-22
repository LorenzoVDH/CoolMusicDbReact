import { useEffect, useState } from 'react';
import './Albums.css';
import AlbumService from '../services/AlbumService';
import AlbumTable from '../components/AlbumTable';
import ArrowBack from '@mui/icons-material/ArrowBack';
import ArrowForward from '@mui/icons-material/ArrowForward';
import Swal from 'sweetalert2';
import AlbumInputBox from '../components/AlbumInputBox';
import ValidationList from '../components/ValidationList';
import albumValidation from '../components/albumValidation';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';


const Albums = () => {
    const [albums, setAlbums] = useState([]);
    const albumService = new AlbumService();
    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(parseInt(localStorage.getItem('albumPageSize')) || 15);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        albumService.getAlbumsAsync(pageIndex, pageSize).then((data) => {
            setAlbums(data.albums);
            setTotalPages(Math.floor(data.total / pageSize));
        });
    }, []);

    useEffect(() => {
        albumService.getAlbumsAsync(pageIndex, pageSize).then((data) => {
            setAlbums(data.albums);
            setTotalPages(Math.floor(data.total / pageSize));
        });
    }, [pageIndex, setAlbums]);

    const handlePageSizeChange = (event) => {
        const selectedPageSize = parseInt(event.target.value);
        localStorage.setItem('albumPageSize', selectedPageSize.toString());

        window.location.reload();
    };

    const gotoNextPage = () => {
        if (pageIndex < totalPages) {
            setPageIndex(pageIndex + 1);
        }
    };

    const gotoPrevPage = () => {
        if (pageIndex > 0) {
            setPageIndex(pageIndex - 1);
        }
    };

    const editClickHandler = async (albumId) => {
        const album = await albumService.getAlbumByIdAsync(albumId);

        const result = await Swal.fire({
            title: `Edit ${album.name}`,
            didOpen: () => {
                ReactDOM.render(<AlbumInputBox album={album} />, document.getElementById('dynamic-content-container'));
            },
            showCancelButton: true,
            focusConfirm: false,
            preConfirm: () => {
                const id = albumId;
                const name = document.getElementById('swal-input-name').value;
                const releaseDate = document.getElementById('swal-input-date').value;
                const artistIds = document.getElementById('swal-input-artists').value.split(',').map(artist => artist.trim());

                return { id, name, releaseDate, artistIds };
            },
            confirmButtonText: "Update",
            cancelButtonText: "Cancel",
            width: '100vw',
            html: '<div id="dynamic-content-container"></div>',
        });

        if (result.isConfirmed) {
            let validationResults = albumValidation(result.value);
            if (validationResults.length === 0) {
                try {
                    albumService.updateAlbumAsync(result.value);
                    Swal.fire('Success', 'Album updated successfully!', 'success').then(() => window.location.reload());
                } catch (error) {
                    Swal.fire('Error', 'An error occurred while updating the album', 'error');
                }
            } else {
                Swal.fire('Validation error', ReactDOMServer.renderToStaticMarkup(<ValidationList validationResults={validationResults} />));
            }
        }
    }

    const deleteClickHandler = (event) => {
        Swal.fire({
            title: `Would you like to delete album with ID ${event}?`,
            text: "This action cannot be reversed!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes",
            cancelButtonText: "No"
        }).then((result) => {
            if (result.isConfirmed) {
                albumService.deleteAlbumAsync(event).then(() => {
                    window.location.reload();
                });
            }
        });
    };

    return albums && (
        <div className="albums-page-container">
            <h1 className="page-title">Albums</h1>
            <div className="album-table-pagination">
                <select onChange={handlePageSizeChange} defaultValue={pageSize}>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={20}>20</option>
                    <option value={25}>25</option>
                </select>
                <div>
                    <button onClick={gotoPrevPage} disabled={pageIndex <= 0}>
                        <ArrowBack />
                    </button>
                    <span>{pageIndex + 1}</span>
                    <button onClick={gotoNextPage} disabled={pageIndex >= totalPages}>
                        <ArrowForward />
                    </button>
                </div>
            </div>
            <div className="album-table-wrapper">
                <AlbumTable albums={albums} onEditClick={c => editClickHandler(c)} onDeleteClick={c => deleteClickHandler(c)} />
            </div>
        </div>
    );
}

export default Albums; 
