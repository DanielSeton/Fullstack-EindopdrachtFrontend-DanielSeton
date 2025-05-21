import './PageDivider.css'

function PageDivider({size}) {
    let cssSizeClass = ''

    switch (size) {
        case 'small':
            cssSizeClass = 'divider-small';
            break;
        case 'large':
            cssSizeClass = 'divider-large';
            break;
        case 'medium':
        default:
            cssSizeClass = 'divider-medium';
    }

    return (
        <hr className={`page-divider ${cssSizeClass}`}></hr>
    );
}

export default PageDivider