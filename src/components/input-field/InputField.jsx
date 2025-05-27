import './InputField.css'

function InputField({type, placeholder, size, inputValue, handleInputChange, isRequired}) {
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
            type={type}
            placeholder={placeholder}
            value={inputValue}
            className={`input-field ${cssSizeClass}`}
            onChange={(e) => handleInputChange(e.target.value)}
            required={isRequired}
        />
    );
}

export default InputField;