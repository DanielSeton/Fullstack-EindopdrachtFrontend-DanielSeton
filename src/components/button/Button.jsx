import './Button.css'

function Button({type = "button", variant, size, label}) {
    let cssVariantClass = '';
    let cssSizeClass = '';
    console.log({label} + " clicked")

    switch (variant) {
        case 'primary':
            cssVariantClass = 'primary';
            break;
        case 'secondary':
            cssVariantClass = 'secondary';
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
        case 'medium':
        default:
            cssSizeClass = 'button-medium';
    }

    return (
        <button type={type} className={`button-styling ${cssSizeClass} ${cssVariantClass}`}>
            {label}
        </button>
    )
}

export default Button;