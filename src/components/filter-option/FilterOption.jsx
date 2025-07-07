import './FilterOption.css'

function FilterOption({type="checkbox", label, isChecked, changeEvent}) {
    return (
        <div className="checkbox-option">
            <input type={type} checked={isChecked} onChange={changeEvent}></input>
            <label>{label}</label>
        </div>
    );
}

export default FilterOption;