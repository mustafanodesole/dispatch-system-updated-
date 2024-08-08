export const poundFormat = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
  maximumFractionDigits: 0,
});

export const poundFormatWithDecimals = (
  unformattedValue: string | number,
  maximumFractionDigits = 0
) => {
  const formattedString = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits,
  }).format(parseFloat(unformattedValue.toString()));

  return formattedString;
};

export const formatPriceToFixed = (price: number) => {
  return Number(price.toFixed(2))
}

export function formatDateWithTime(dateString: string): string {
  const dateObj = new Date(dateString);
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  
  const day = dateObj.getDate();
  const daySuffix =
    day === 1 || day === 21 || day === 31
      ? 'st'
      : day === 2 || day === 22
      ? 'nd'
      : day === 3 || day === 23
      ? 'rd'
      : 'th';
  const formattedDate = `${day}${daySuffix} ${monthNames[dateObj.getMonth()]}, ${dateObj.getFullYear()} ${dateObj
    .getHours()
    .toString()
    .padStart(2, '0')}:${dateObj.getMinutes().toString().padStart(2, '0')}`;

  return formattedDate;
}