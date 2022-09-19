export const formatRuntime = (mins:number | undefined):string => {
  const hours = mins && Math.floor(mins / 60);
  const minutes = mins && mins % 60;
  if (minutes) {
    return hours + 'ч ' + minutes + 'мин';
  }
    return hours + 'ч ';
}