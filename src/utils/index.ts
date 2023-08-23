export function formatPhoneNumber(value: string) {
  const cleanedValue = value.replace(/[^\d]/g, '');

  if (cleanedValue.length <= 10) {
    const formattedValue = cleanedValue.replace(
      /(\d{3})(\d{2})(\d{2})(\d{1,3})/,
      '($1) $2 $3 $4'
    );
    return formattedValue.trim();
  } else {
    const formattedValue = cleanedValue
      .slice(0, 10)
      .replace(/(\d{3})(\d{2})(\d{2})(\d{3})/, '($1) $2 $3 $4');
    return formattedValue.trim();
  }
}
