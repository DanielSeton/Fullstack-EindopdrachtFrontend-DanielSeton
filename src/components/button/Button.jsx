import './Button.css'

function Button({type = "button", variant, clickEvent, size, label, disabled = false }) {
    let cssVariantClass = '';
    let cssSizeClass = '';

    switch (variant) {
        case 'primary':
            cssVariantClass = 'primary';
            break;
        case 'secondary':
            cssVariantClass = 'secondary';
            break;
        case 'link':
            cssVariantClass = 'link';
            break;
        case 'inverted':
        default:
            cssVariantClass = 'inverted';
    }

    switch (size) {
        case 'small':
            cssSizeClass = 'button-small';
            break;
        case 'large':
            cssSizeClass = 'button-large';
            break;
        case 'full':
            cssSizeClass = 'button-full';
            break;
        case 'medium':
        default:
            cssSizeClass = 'button-medium';
    }


    return (
        <button type={type} onClick={clickEvent} disabled={disabled} className={`button-styling ${cssSizeClass} ${cssVariantClass} ${disabled ? 'disabled' : ''}`}>
            {label}
        </button>
    )
}

export default Button;