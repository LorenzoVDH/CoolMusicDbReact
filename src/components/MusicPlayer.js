import './MusicPlayer.css';

const MusicPlayer = ({ spotifyTrackPreviewId }) => {
    return <div className="spotify-container">
        <iframe
            className="music-player"
            src={`https://open.spotify.com/embed/track/${spotifyTrackPreviewId}?utm_source=generator&theme=1`}
            style={{ border: 0, height: 'fit-content', width: 'fit-content' }}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
            loading="lazy">
        </iframe>
    </div>;
};

export default MusicPlayer; 