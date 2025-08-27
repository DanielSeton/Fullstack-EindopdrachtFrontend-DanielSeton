import "./PlaylistItem.css"

function PlaylistItem({artist, title, onPlayClick}) {

    return (
        <li className="playlist-item" onClick={onPlayClick}>
            <p>{artist} - {title}</p>
        </li>
    )
}



export default PlaylistItem;