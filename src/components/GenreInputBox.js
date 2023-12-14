import './GenreInputBox.css';
import CountryList from './CountryList';

const GenreInputBox = () => {
    return <div className="genre-input-box">
        <div className="upper-row-flex-container">
            <div className="name-input-container" >
                <label htmlFor="swal-input-name">Name</label>
                <input id="swal-input-name" classNameZ="swal2-input" />
            </div>
            <div className="countries-selector-container">
                <CountryList idName="swal-input-countries" className="country-select" />
            </div>
        </div>
        <label htmlFor="swal-input-date">Date Of Origin</label>
        <input id="swal-input-date" className="swal2-input" type="date" />

        <label htmlFor="swal-input-description">Description</label>
        <input id="swal-input-description" className="swal2-input" />

        <label htmlFor="swal-input-spotify">Spotify Track ID (optional)</label>
        <input id="swal-input-spotify" className="swal2-input" />
    </div >;
};

export default GenreInputBox; 