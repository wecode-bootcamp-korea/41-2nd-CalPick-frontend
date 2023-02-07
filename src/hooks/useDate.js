export default function useDate(GMT) {
  let ISODay = GMT.slice(0, 10);
  let ISODotDay = ISODay.replace(/-/gi, '.');

  const getOfDay = data => {
    const week = ['월', '화', '수', '목', '금', '토', '일'];
    const findWeek = week[new Date(data).getDay()];
    return findWeek;
  };

  const ISOWeek = getOfDay(ISODay);
  return [ISODay, ISODotDay, ISOWeek];
}
