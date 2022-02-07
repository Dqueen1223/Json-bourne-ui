/**
 * @param {*} form //single form from document
 * @returns //error div to append to errors ul
 *
 * Validation for required input fields, test if input has any value
 */
const generateErrors = (form, idList) => {
  const noValue = [];
  const twoDecimal = [];
  const onlyAlphaNum = [];
  const onlyNum = [];
  const invalidRange = [];
  const noNegativeNumbers = [];
  const expired = [];
  const errors = {};

  for (let i = 0; i < idList.length; i += 1) {
    const id = idList[i];
    const value = form[id];
    const alphaNum = /^[a-z0-9]+$/i;
    const numbers = /^[.0-9]+$/;

    if (!value && (id !== 'endDate')) {
      console.log(id);
      noValue.push(id);
    }
    if (value && (id === 'code' && !value.match(alphaNum))) {
      onlyAlphaNum.push(id);
    }
    if (value && (id === 'discount' && !value.match(numbers))) {
      onlyNum.push(id);
    }
    if (value && (form.type === '$' && id === 'discount')) {
      const cents = value.toString().split('.');
      console.log(cents.length);
      if (cents.length > 2) {
        twoDecimal.push(id);
      }
      if (cents.length === 2 && cents[1].length !== 2) {
        twoDecimal.push(id);
      }
    }
    if (value && (value > 100 || value < 1) && (form.type === '%' && id === 'discount')) {
      invalidRange.push(id);
    }
    if (value && (value < 0) && (form.type === '$' && id === 'discount')) {
      noNegativeNumbers.push(id);
    }
    // if (id === 'endDate' && new Date() > value.toDate()) {
    //   expired.push(id);
    // }
  }

  if (noValue.length) {
    noValue.forEach((i) => {
      errors[i] = 'Required';
    });
  }
  if (twoDecimal.length) {
    twoDecimal.forEach((i) => {
      errors[i] = 'Requires two decimals';
    });
  }
  if (onlyAlphaNum.length) {
    onlyAlphaNum.forEach((i) => {
      errors[i] = 'Must contain only alphanumeric characters';
    });
  }
  if (invalidRange.length) {
    invalidRange.forEach((i) => {
      errors[i] = 'Must be between 1-100%';
    });
  }
  if (onlyNum.length) {
    onlyNum.forEach((i) => {
      errors[i] = 'Must contain only numbers';
    });
  }
  if (noNegativeNumbers.length) {
    noNegativeNumbers.forEach((i) => {
      errors[i] = 'No Negative Amount';
    });
  }
  if (expired.length) {
    expired.forEach((i) => {
      errors[i] = 'Date is expired';
    });
  }
  console.log(errors);
  return errors;
};

export default generateErrors;
