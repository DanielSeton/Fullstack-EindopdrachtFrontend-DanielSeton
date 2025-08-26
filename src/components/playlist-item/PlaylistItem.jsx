import "./PlaylistItem.css"

function PlaylistItem({artist, title, onPlayClick}) {

    return (
        <div className="playlist-item" onClick={onPlayClick}>
            <p>{artist} - {title}</p>
        </div>
    )
}



export default PlaylistItem;