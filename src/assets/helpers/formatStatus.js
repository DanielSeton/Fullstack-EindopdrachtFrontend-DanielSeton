export function formatStatus(status) {
    console.log("Gegeven status: ", status);

    if (typeof status !== 'string') {
        console.warn('formatStatus verwacht een string, maar kreeg:', status);
        return '';
    }

    const string = status.replaceAll("_" , " ");

    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}