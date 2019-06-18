import { validZipcodes } from './constants';

/**
 * Certain areas of New Orleans are allowed only
 *
 * @param {string} zipcode
 * @returns {boolean}
 */
export function isValidZipcode(zipcode = '') {
  return validZipcodes.includes(zipcode);
}
