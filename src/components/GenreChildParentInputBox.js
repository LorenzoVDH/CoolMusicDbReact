const GenreChildParentInputBox = ({ genreId, children, selectableGenres }) => {
    return (
        <div>
            <label htmlFor="swal-input-children">Subgenres</label>
            {selectableGenres.map((genre) => (
                genre.id != genreId && <SubGenreSelectionBox
                    key={genre.id}
                    genreId={genre.id}
                    genreName={genre.name}
                    parentElementIdName="swal-input-children"
                    checked={children.some((g) => g.id === genre.id)}
                />
            ))}
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