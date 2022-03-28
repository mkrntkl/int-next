export * from './fields';
export { default as useWatch } from './hooks/useWatch';

export const isEmpty = (value: any) => {
  if (value === null) return true;
  if (typeof value === 'object') {
    if (isValidDate(value)) return false;
    return Object.keys(value).length === 0;
  } else if (typeof value === 'undefined') return true;
  else return value.toString().length === 0;
};

export const isValidDate = (date: Date) => {
  if (Object.prototype.toString.call(date) === '[object Date]') {
    if (isNaN(date.getTime())) return false;
    else return true;
  } else return false;
};
