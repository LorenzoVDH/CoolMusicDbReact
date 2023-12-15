import './GenreInputBox.css';
import CountryList from './CountryList';

const GenreInputBox = ({ genre }) => {
    return <div className="genre-input-box">
        <div className="upper-row-flex-container">
            <div className="name-input-container" >
                <label htmlFor="swal-input-name">Name</label>
                <input id="swal-input-name" className="swal2-input" value={genre.name} />
            </div>
            <div className="countries-selector-container">
                <CountryList idName="swal-input-countries" className="country-select" selectedCountries={genre.countryCodes} />
            </div>
        </div>
        <label htmlFor="swal-input-date">Date Of Origin</label>
        <input id="swal-input-date" className="swal2-input" type="date" value={genre.dateOfOrigin} />

        <label htmlFor="swal-input-description">Description</label>
        <input id="swal-input-description" className="swal2-input" value={genre.description} />

        <label htmlFor="swal-input-spotify">Spotify Track ID (optional)</label>
        <input id="swal-input-spotify" className="swal2-input" value={genre.spotifyTrackPreviewId} />
    </div >
};

export default GenreInputBox; 