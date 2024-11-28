export const formatDate = (timestamp) => {
    const date = new Date(timestamp)
    return new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: '2-digit',
    }).format(date)
}