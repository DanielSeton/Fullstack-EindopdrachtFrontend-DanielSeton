export function formatStatus(status) {
    if (typeof status !== 'string') {
        return '';
    }

    const string = status.replaceAll("_" , " ");

    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}