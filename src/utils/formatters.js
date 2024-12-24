export function formatCurrency(value) {
  const numValue = typeof value === 'string' ? parseFloat(value) : Number(value || 0);
  
  if (isNaN(numValue)) {
    return 'MT 0,00';
  }
  
  return `MT ${numValue.toFixed(2).replace('.', ',')}`;
}

export function formatDateTime(dateString) {
  if (!dateString) return '';
  
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('pt-PT', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
}