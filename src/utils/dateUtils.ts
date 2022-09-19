export const getYear = (date: string | undefined) => {
  return date?.slice(0, 4);
};
export const formatDate = (date: string): string => {
  const getDate = new Date(date);
  const getMonth = getDate.toLocaleString('ru-RU', {
    month: 'long',

  });
  const formattedMonth = getMonth[0].toUpperCase() + getMonth.slice(1);
  const getYear = date?.slice(0, 4);
  const getDay = date?.slice(9, 11);
  return `${getYear} ${formattedMonth} ${getDay} `;
};