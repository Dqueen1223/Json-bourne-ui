/**
 * @param {*} form //single form from document
 * @returns //error div to append to errors ul
 *
 * Validation for required input fields, test if input has any value
 */
const generateErrors = (form, idList) => {
  const noValue = [];
  const exceedMax300 = [];
  const exceedMax50 = [];
  const errors = {};

  for (let i = 0; i < idList.length; i += 1) {
    const id = idList[i];
    const value = form[id];

    if (!value) {
      noValue.push(id);
    }
    if (id === 'reviewsDescription' && (value.length > 300)) {
      exceedMax300.push(id);
    }
    if (id === 'title' && (value.length > 50)) {
      exceedMax50.push(id);
    }
  }
  if (noValue.length) {
    noValue.forEach((i) => {
      errors[i] = 'Required';
    });
  }
  if (exceedMax300.length) {
    exceedMax300.forEach((i) => {
      errors[i] = 'Cannot exceed 300 characters';
    });
  }
  if (exceedMax50.length) {
    exceedMax50.forEach((i) => {
      errors[i] = 'Cannot exceed 50 characters';
    });
  }

  return errors;
};

export default generateErrors;
