import './Playlist.css'
import PageDivider from "../pagedivider/PageDivider.jsx";

function Playlist() {
    return (
        <div className="playlist-container">
            <div className="playlist-player-body">
                <div>
                    <h1 className="playlist-title">Title of Soundtrack</h1>
                    <PageDivider/>
                </div>
                <audio className="submission-audio" controls src="src/assets/placeholders/Beach_Walk.mp3"></audio>
            </div>
            <div className="playlist-list-body">
                <div className="playlist-list-header">
                    <h2>Playlist</h2>
                </div>
                <ul>
                    <li>Artist - title of track</li>
                    <li>Artist - title of track</li>
                    <li>Artist - title of track</li>
                    <li>Artist - title of track</li>
                    <li>Artist - title of track</li>
                    <li>Artist - title of track</li>
                    <li>Artist - title of track</li>
                    <li>Artist - title of track</li>
                    <li>Artist - title of track</li>
                    <li>Artist - title of track</li>
                </ul>
            </div>
        </div>
    );
}

export default Playlist;