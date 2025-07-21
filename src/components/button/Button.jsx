import './Button.css'

function Button({type = "button", variant, clickEvent, size, label}) {
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
        <button type={type} onClick={clickEvent} className={`button-styling ${cssSizeClass} ${cssVariantClass}`}>
            {label}
        </button>
    )
}

export default Button;