import './ArtistTable.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import nameToColor from './NameToColor';
import CountryFlag from 'react-country-flag';

const ArtistTable = ({ artists, onEditClick, onDeleteClick }) => {
    return (
        <table className="artist-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Date Of Birth</th>
                    <th>Country</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {artists?.map((artist) => {
                    const artistName = artist.artistName || "Bob";

                    return (
                        <tr key={artist.id} style={{ backgroundColor: nameToColor(artistName) }}>
                            <td>{artist.artistName}</td>
                            <td>{artist.firstName}</td>
                            <td>{artist.lastName}</td>
                            <td>{artist.dateOfBirth}</td>
                            <td><CountryFlag countryCode={artist.countryCode} svg /></td>
                            <td>
                                <button className="icon-button" onClick={c => onEditClick(artist.id)}>
                                    <EditIcon className='edit-icon' />
                                </button>
                            </td>
                            <td>
                                <button className="icon-button" onClick={c => onDeleteClick(artist.id)}>
                                    <DeleteIcon className='delete-icon' />
                                </button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default ArtistTable; 