/**
 * @param {*} form //single form from document
 * @returns //error div to append to errors ul
 *
 * Validation for required input fields, test if input has any value
 */

const isEmpty = (input) => {
  const empty = input.replace(/\s/g, '');
  if (!input || empty === '') {
    console.log('empty');
    return true;
  }
  console.log('not empty');
  return false;
};

export default isEmpty;
