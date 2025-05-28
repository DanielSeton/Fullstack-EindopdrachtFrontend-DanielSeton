import './ShowEntryBlock.css'
import Button from "../button/Button.jsx";

function ShowEntryBlock({date, location, title, website}) {
    return (
        <a className="content-show-container" href={website}>
            <div className="content-show-entry">
                <div className="show-entry-info">
                    <h3 className="show-entry-date">{date}</h3>
                    <p>{location}</p>
                </div>
                <div className="show-entry-title">
                    <p>{title}</p>
                </div>
                <div className="show-entry-ticketButton">
                    <Button
                        type="submit"
                        variant="secondary"
                        size="small"
                        label="Tickets"/>
                </div>
            </div>
        </a>);
}

export default ShowEntryBlock;