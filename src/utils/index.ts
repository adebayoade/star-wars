import dayjs from 'dayjs';

/**
 * The function `dateFormatter` takes a string value and formats it as 'MM-DD-YYYY' using the dayjs
 * library.
 * @param {string} value - A string representing a date in any valid format.
 * @returns The `dateFormatter` function is returning the input `value` formatted as a date in the
 * 'MM-DD-YYYY' format using the `dayjs` library.
 */
const dateFormatter = (value: string) => {
  return dayjs(value).format('MM-DD-YYYY');
};

const processEnv = {
  BASE_API_URL: import.meta.env.VITE_BASE_API_URL || 'https://swapi.dev/api',
};

export const UTIL = {
  processEnv,
  dateFormatter,
};
