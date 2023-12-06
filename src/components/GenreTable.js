import React, { useEffect, useState } from 'react';
import './GenreTable.css';
import MusicPlayer from './MusicPlayer';
import CountryFlag from 'react-country-flag';

const GenreTable = ({ genres }) => {
    return (
        <table className="genre-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th className="hidden-1024">Country</th>
                    <th>Decade</th>
                    <th>Description</th>
                    <th className="hidden-1024">Popular</th>
                    <th className="hidden-1280">Example</th>
                </tr>
            </thead>
            <tbody>
                {genres?.map((genre, index) => (
                    <GenreRow key={genre.id} genre={genre} depth={0} baseHue={index * 130} />
                ))}
            </tbody>
        </table>
    );
};

const GenreRow = ({ genre, depth, baseHue, hide }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    const getRowColor = () => {
        const saturation = 75;
        const lightness = 40 - depth * 5;
        const hue = baseHue + depth * 15;
        return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    };

    const getRowColorLighter = () => {
        const saturation = 75;
        const lightness = 93 + depth * 3;
        const hue = baseHue + depth * 15;
        return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    };

    return !hide && (
        <>
            <tr style={{ color: getRowColor(), backgroundColor: getRowColorLighter() }} hidden={hide}>
                <td style={{ borderColor: getRowColor() }}>
                    <div className="genre-button">
                        <div style={{ width: '1em' }}>
                            {genre.children.length > 0 && (
                                <i className="material-icons arrow-icon" onClick={toggleCollapse}>
                                    {isCollapsed ? 'arrow_right' : 'arrow_drop_down'}
                                </i>
                            )}
                        </div>
                        <button
                            style={{ color: getRowColor(), fontSize: `${1.7 - depth * 0.3}em` }}
                            onClick={toggleCollapse}
                            className={`genre-name-button bold ${genre.children.length > 0 ? 'pointer' : ''}`}
                        >
                            {genre.name}
                        </button>
                    </div>
                </td>
                <td className="hidden-1024" >
                    <ul className="countries-list">
                        {genre.countryCodes?.map((c, index) =>
                        (<li key={index}>
                            <CountryFlag countryCode={c} svg />
                        </li>))}
                    </ul>
                </td>
                <td style={{ borderColor: getRowColor() }}>{genre.decade}</td>
                <td style={{ borderColor: getRowColor() }} className="genre-description">{genre.description}</td>
                <td style={{ borderColor: getRowColor() }} className="hidden-1024">
                    <ul className="popular-artists-list">
                        {genre.popularArtists.map((data, index) =>
                            (<li key={index}>{data.artistName}</li>))}
                    </ul>
                </td>
                <td className="hidden-1280">
                    <div className='music-player'>
                        {genre.spotifyTrackPreviewId &&
                            <MusicPlayer spotifyTrackPreviewId={genre.spotifyTrackPreviewId} />
                        }
                    </div>
                </td>
            </tr>
            {genre.children.length > 0 && (
                <>
                    {genre.children?.map((childGenre, childIndex) => (
                        <GenreRow
                            key={childGenre.name}
                            genre={childGenre}
                            depth={depth + 1}
                            baseHue={baseHue}
                            hide={hide || isCollapsed}
                        />
                    ))}
                </>
            )}
        </>
    );
};


export default GenreTable;
