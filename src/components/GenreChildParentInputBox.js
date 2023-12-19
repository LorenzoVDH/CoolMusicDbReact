import './GenreChildParent.css';

const GenreChildParentInputBox = ({ genreId, children, selectableGenres }) => {
    return (
        <div className="genre-child-parent-input-wrapper">
            <label htmlFor="swal-input-children">Subgenres</label>
            <ul className="select-box-list">
                {selectableGenres.map((genre) => (
                    genre.id != genreId && <SubGenreSelectionBox
                        key={genre.id}
                        genreId={genre.id}
                        genreName={genre.name}
                        parentElementIdName="swal-input-children"
                        checked={children.some((g) => g.id === genre.id)}
                    />
                ))}
            </ul>
        </div>
    );
};

const SubGenreSelectionBox = ({ genreId, genreName, parentElementIdName, checked }) => {
    return (
        <li>
            <input type="checkbox" value={genreId} id={parentElementIdName} checked={checked} /> {genreName}
        </li>
    );
};

export default GenreChildParentInputBox;