import './AlbumTable.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import nameToColor from './NameToColor';

const AlbumTable = ({ albums }) => {

    return (
        <table className="album-table">
            <thead>
                <tr>
                    <th>Artist(s)</th>
                    <th>Releasedate</th>
                    <th>Album</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {albums?.map((album) => {
                    const artistName = album.artists[0].artistName;

                    return (
                        <tr key={album.id} style={{ backgroundColor: nameToColor(artistName) }}>
                            <td><ul className="album-artist-list">{album.artists.map(({ id, artistName }) => <li key={id}>{artistName}</li>)}</ul></td>
                            <td>{album.releaseDate}</td>
                            <td>{album.name}</td>
                            <td>
                                <button className="icon-button">
                                    <EditIcon className='edit-icon' />
                                </button>
                            </td>
                            <td>
                                <button className="icon-button">
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

export default AlbumTable; 