import './StatusBlock.css'
import {formatDate} from "../../assets/helpers/formatDate.js";
import {formatStatus} from "../../assets/helpers/formatStatus.js";

function StatusBlock({variant, size, label}) {
    let cssStatusClass = '';
    let cssSizeClass = '';

    switch (variant) {
        case 'approved':
            cssStatusClass = 'approved';
            break;
        case 'rejected':
            cssStatusClass = 'rejected';
            break;
        case 'consideration':
            cssStatusClass = 'consideration';
            break;
        case 'nofeedback':
        default:
            cssStatusClass = 'nofeedback';
    }

    switch (size) {
        case 'small':
            cssSizeClass = 'status-small';
            break;
        case 'large':
            cssSizeClass = 'status-large';
            break;
        case 'full':
            cssSizeClass = 'status-full';
            break;
        case 'medium':
        default:
            cssSizeClass = 'status-medium';
    }



    return (
        <div className={`status-styling ${cssSizeClass} ${cssStatusClass}`}>
            {formatStatus(label)}
        </div>
    )
}

export default StatusBlock;