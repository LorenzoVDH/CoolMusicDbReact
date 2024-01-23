import { useEffect, useState } from 'react';
import './Artists.css';
import ArtistService from '../services/ArtistService';
import ArtistTable from '../components/ArtistTable';
import ArrowBack from '@mui/icons-material/ArrowBack';
import ArrowForward from '@mui/icons-material/ArrowForward';
import React from 'react';
import PaginationControl from '../components/PaginationControl';


const Artists = () => {
    const [artists, setArtists] = useState([]);
    const artistService = new ArtistService();
    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(parseInt(localStorage.getItem('artistPageSize')) || 15);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        artistService.getArtistsAsync(pageIndex, pageSize).then((data) => {
            setArtists(data.artists);
            setTotalPages(Math.floor(data.total / pageSize));
        });
    }, []);

    useEffect(() => {
        artistService.getArtistsAsync(pageIndex, pageSize).then((data) => {
            setArtists(data.artists);
            setTotalPages(Math.floor(data.total / pageSize));
        });
    }, [pageIndex, setArtists]);

    const handlePageSizeChange = (event) => {
        const selectedPageSize = parseInt(event.target.value);
        localStorage.setItem('artistPageSize', selectedPageSize.toString());

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

    const editClickHandler = (event) => {
        console.log("edit button clicked!");
    };

    const deleteClickHandler = (event) => {
        console.log("delete button clicked!");
    };

    return artists && (
        <div className="artists-page-container">
            <h1 className="page-title">Artists</h1>
            <PaginationControl
                onPageChange={handlePageSizeChange}
                onNextPageClick={gotoNextPage}
                onPreviousPageClick={gotoPrevPage}
                selectedPageSize={pageSize}
                disablePrevious={pageIndex <= 0}
                disableNext={pageIndex >= totalPages}
                pageIndex={pageIndex + 1} />
            <div className="artist-table-wrapper">
                <ArtistTable artists={artists} onEditClick={c => editClickHandler(c)} onDeleteClick={c => deleteClickHandler(c)} />
            </div>
        </div>
    );
}

export default Artists; 