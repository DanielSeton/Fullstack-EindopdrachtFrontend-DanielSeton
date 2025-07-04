import './ButtonDropdown.css'

function ButtonDropdown({value, changeEvent}) {
        return (
            <select id="select" className="dropbutton-styling" onChange={changeEvent} value={value} onClick={(e) => {
                e.stopPropagation();}}>
                <option value="NO_FEEDBACK">No feedback</option>
                <option value="IN_CONSIDERATION">In review</option>
                <option value="APPROVED">Approved</option>
                <option value="REJECTED">Rejected</option>
            </select>
        );
}

export default ButtonDropdown;