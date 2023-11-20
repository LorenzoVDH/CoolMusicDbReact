import React from 'react';
import { Link } from 'react-router-dom';
import { MaterialIcon } from 'material-icons';
import './Navbar.css';

const Navbar = () => {
    return (
        <>
            <nav>
                <div className="--logo">
                    <i className="material-icons --logo-icon">headphones</i>
                    <h1 className="--logo-text">CoolMusicDb</h1>
                </div>
                <ul className="--navbarlinks">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/genres">Genres</Link></li>
                    <li><Link to="/bands">Bands</Link></li>
                    <li><Link to="/artists">Artists</Link></li>
                    <li><Link to="/tracks">Tracks</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar; 