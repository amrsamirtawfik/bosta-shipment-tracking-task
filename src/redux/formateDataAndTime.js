export function formatDateAndTime(dateString) {
    const dateTime = new Date(dateString);
    
    // Format date as "MM/DD/YYYY"
    const date = dateTime.toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
    });
    
    // Format time as "hh:mm AM/PM"
    const time = dateTime.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
    
    return { date, time };
  }