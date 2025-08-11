import './ShowEntryBlock.css'
import Button from "../button/Button.jsx";

function ShowEntryBlock({date, location, title, website, tickets}) {
    return (
        <a className="show-card" href={website}>
            <div className="show-entry">
                <div className="show-entry-info">
                    <h3 className="show-entry-date">{date}</h3>
                    <p>{location}</p>
                </div>
                <div className="show-entry-title">
                    <p>{title}</p>
                </div>
                <div className="show-entry-ticket-button">
                    <Button
                        type="submit"
                        variant="secondary"
                        clickEvent={tickets}
                        size="small"
                        label="Tickets"/>
                </div>
            </div>
        </a>);
}

export default ShowEntryBlock;