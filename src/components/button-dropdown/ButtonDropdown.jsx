import './ButtonDropdown.css'

function ButtonDropdown() {
    return (
        <select>
            <option value="volvo">MERN</option>
            <option value="saab" selected>DevOps</option>
            <option value="mercedes">AI/ML</option>
            <option value="audi">Data Science</option>
        </select>
    );
}

export default ButtonDropdown;