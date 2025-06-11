import './InputField.css'

function InputField({name, inputType, placeholder, size, inputValue, changeEvent, isRequired}) {
    let cssSizeClass = '';

    switch (size) {
        case 'small':
            cssSizeClass = 'input-small';
            break;
        case 'large':
            cssSizeClass = 'input-large';
            break;
        case 'medium':
        default:
            cssSizeClass = 'input-medium';
    }

    return (
        <input
            name={`${name}-field`}
            id={`${name}-field`}
            type={inputType}
            placeholder={placeholder}
            value={inputValue}
            className={`input-field ${cssSizeClass}`}
            onChange={changeEvent}
            required={isRequired}
        />
    );
}

export default InputField;