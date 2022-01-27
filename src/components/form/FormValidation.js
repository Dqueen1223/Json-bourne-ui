/**
 * @param {*} form //single form from document
 * @returns //error div to append to errors ul
 *
 * Validation for required input fields, test if input has any value
 */

const isEmpty = (input) => {
  const errors = {};
  const empty = input.replace(/\s/g, '');
  if (!input || empty === '') {
    errors.empty = 'Required';
    console.log('empty');
    // return true;
  }
  console.log(errors);
  return errors;
};

export default isEmpty;
