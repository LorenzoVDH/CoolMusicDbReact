import { useEffect, useState } from 'react';
import './Albums.css';
import AlbumService from '../services/AlbumService';
import AlbumTable from '../components/AlbumTable';

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
    }

    const gotoPrevPage = () => {
        if (pageIndex > 0) {
            setPageIndex(pageIndex - 1);
        }
    }

    return albums && (
        <div className="albums-page-container">
            <h1 className="page-title">Albums</h1>
            <div className="album-table-wrapper">
                <AlbumTable albums={albums} />
            </div>
            <div className="album-table-pagination">
                <select onChange={handlePageSizeChange}>
                    <option>--number of results--</option>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={20}>20</option>
                    <option value={25}>25</option>
                </select>
                <button onClick={gotoPrevPage}>Previous</button>
                <span>{pageIndex}</span>
                <button onClick={gotoNextPage}>Next</button>
            </div>
        </div>
    );
}

export default Albums; 
