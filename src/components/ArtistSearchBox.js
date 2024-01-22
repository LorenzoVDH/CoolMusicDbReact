import ArtistService from '../services/ArtistService';
import { useState, useEffect } from 'react';

const ArtistSearchBox = ({ onArtistClick }) => {
    const artistService = new ArtistService();
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);

    useEffect(() => {
        if (searchTerm.length > 0) {
            artistService.getArtistsByName(searchTerm).then((data) => {
                console.log(data);
                setResults(data);
            });
        }
    }, [searchTerm]);

    const artistSearchHandler = (txt) => {
        setSearchTerm(txt);
    };

    const artistClickedHandler = (artistId, artistName) => {
        onArtistClick(artistId, artistName);
    };

    return <>
        <input onChange={e => artistSearchHandler(e.target.value)} placeholder='Search for an artist... ' />
        {(searchTerm.length > 0) &&
            <ul>
                {results.map((artist) => (
                    <li key={artist.id}><a href='#' onClick={e => artistClickedHandler(artist.id, artist.artistName)}>{artist.artistName}</a></li>
                ))}
            </ul>}
    </>;
}

export default ArtistSearchBox; 