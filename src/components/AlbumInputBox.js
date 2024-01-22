import React, { useEffect, useState } from 'react';
import './AlbumInputBox.css';
import ArtistSearchBox from './ArtistSearchBox';

const AlbumInputBox = ({ album }) => {
    const [name, setName] = useState(album.name);
    const [releaseDate, setReleaseDate] = useState(album.releaseDate);
    const [artists, setArtists] = useState(album.artists);

    const addArtistToAlbumHandler = (artistId, artistName) => {
        console.log(artists);
        const newArtist = { id: artistId, artistName: artistName };

        if (!artists.some(artist => artist.id === newArtist.id)) {
            const updatedArtists = [...artists, newArtist];
            setArtists(updatedArtists);
        }
    };

    const removeArtistHandler = (id) => {
        const updatedArtists = artists.filter(a => a.id !== id);
        setArtists(updatedArtists);
    };

    return (
        <div className="album-input-box">
            <label htmlFor="swal-input-name">Album name</label>
            <input
                id="swal-input-name"
                className="swal2-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="swal-input-date">Release date</label>
            <input
                id="swal-input-date"
                className="swal2-input"
                type="date"
                value={releaseDate}
                onChange={(e) => setReleaseDate(e.target.value)}
            />

            <label htmlFor="swal-input-artists">Artists</label>
            <ul className="artist-list">
                {artists.map((artist) => (
                    <li key={artist.id}><button onClick={(e) => removeArtistHandler(artist.id)}>Remove</button> {artist.artistName}</li>
                ))}
            </ul>
            <input
                id="swal-input-artists"
                className="swal2-input"
                value={artists.map(a => a.id)}
                onChange={(e) => setArtists(e.target.value)}
                hidden
            />

            <ArtistSearchBox onArtistClick={addArtistToAlbumHandler} />
        </div>
    );
};

export default AlbumInputBox;
