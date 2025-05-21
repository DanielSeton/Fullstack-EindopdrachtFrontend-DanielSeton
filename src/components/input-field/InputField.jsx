import './InputField.css'

function InputField({type, placeholder, size, isRequired}) {
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
        <input type={type} placeholder={placeholder} className={`input-field ${cssSizeClass}`} required={isRequired}/>
    );
}

export default InputField;