import './FilterOption.css'

function FilterOption({type="checkbox", label, isChecked}) {
    return (
        <div className="checkbox-option">
            <input type={type} checked={isChecked}></input>
            <label>{label}</label>
        </div>
    );
}

export default FilterOption;