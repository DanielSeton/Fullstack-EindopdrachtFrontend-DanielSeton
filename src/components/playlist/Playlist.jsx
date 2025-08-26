import './Playlist.css'
import PageDivider from "../pagedivider/PageDivider.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import PlaylistItem from "../playlist-item/PlaylistItem.jsx";

function Playlist({id}) {

    const [tracks, setTracks] = useState([]);
    const [audioSrc, setAudioSrc] = useState("");
    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("");

    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        async function loadTracks() {
            toggleError(false);
            toggleLoading(true);

            const token = localStorage.getItem('token');

            try {
                const response = await axios.get(`http://localhost:8080/playlists/${id}/tracks`, {
                    signal: controller.signal,
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                });
                setTracks(response.data);
                console.log("tracks data: ", response.data);
            } catch (e) {
                if (axios.isCancel(e)) {
                    console.error('Request is canceled...', e.message);
                } else {
                    console.error(e);
                    toggleError(true);
                }
            } finally {
                toggleLoading(false);
            }
        }

            loadTracks();

            return function cleanup() {
                controller.abort();
            }

    }, [])

    return (
        <div className="playlist-container">
            <div className="playlist-player-body">
                <div>
                    <h1 className="playlist-title">{title || "Titel track"}</h1>
                    <PageDivider/>
                    <h2 className="playlist-title">{artist || "Naam artiest"}</h2>
                </div>
                <audio className="submission-audio" controls src={audioSrc || null}></audio>
            </div>
            <div className="playlist-list-body">
                <div className="playlist-list-header">
                    <h2>Playlist</h2>
                </div>
                <ul>
                    {!loading && !error && Object.keys(tracks).length > 0 && tracks.map((track) => {
                        return (
                            <li key={track.id}>
                                <PlaylistItem
                                    artist={track.uploadedBy}
                                    title={track.title}
                                    onPlayClick={() => {
                                        setAudioSrc(`http://localhost:8080/${track.audioDownloadUrl}`);
                                        setTitle(track.title);
                                        setArtist(track.uploadedBy);
                                    }}
                                />
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Playlist;