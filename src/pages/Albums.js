import { useEffect, useState } from 'react';
import './Albums.css';
import AlbumService from '../services/AlbumService';
import AlbumTable from '../components/AlbumTable';

const Albums = () => {
    const [albums, setAlbums] = useState([]);
    const albumService = new AlbumService();

    useEffect(() => {
        albumService.getAlbumsAsync(0, 15).then((data) => {
            setAlbums(data.albums);
        });
    }, []);

    useEffect(() => {
        console.log("THE INCOMING ALBUMS", albums);
    }, albums);

    return albums && (
        <div className="albums-page-container">
            <h1 className="page-title">Albums</h1>
            <div className="album-table-wrapper">
                <AlbumTable albums={albums} />
            </div>
        </div>
    );
}

export default Albums; 
