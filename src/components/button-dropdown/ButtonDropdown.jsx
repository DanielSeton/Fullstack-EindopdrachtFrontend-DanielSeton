import './ButtonDropdown.css'

function ButtonDropdown() {
        return (
            <select id="select" className="dropbutton-styling" onClick={(e) => {
                e.stopPropagation();}}>
                <option value="noFeedback" selected>No feedback</option>
                <option value="StandBy">In review</option>
                <option value="positive">Approved</option>
                <option value="negative">Rejected</option>
            </select>
        );
}

export default ButtonDropdown;