import './ShowEntryBlock.css'

function ShowEntryBlock({date, location, title}) {
    return (
        <a className="content-show-container" onClick={() => console.log("Show entry clicked")}>
            <div className="content-show-entry">
                <div className="show-entry-info">
                    <h3 className="show-entry-title">{date}</h3>
                    <p>{location}</p>
                </div>
                <div className="show-location-text">
                    <p>{title}</p>
                </div>
                <div className="show-entry-ticketButton">
                    <button onClick={() => console.log("ticket button clicked")}>TICKETS</button>
                </div>
            </div>
        </a>);
}

export default ShowEntryBlock;