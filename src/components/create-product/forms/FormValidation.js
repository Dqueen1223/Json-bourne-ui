/**
 * @param {*} form //single form from document
 * @returns //error div to append to errors ul
 *
 * Validation for required input fields, test if input has any value
 */
const generateErrors = (form, idList) => {
  const noValue = [];
  const twoDecimal = [];
  const noDecimal = [];
  const noNegativeNumbers = [];
  const nonDecimal = [];
  const errors = {};

  for (let i = 0; i < idList.length; i += 1) {
    const id = idList[i];
    const value = form[id];

    if (!value && id !== 'active') {
      noValue.push(id);
    }
    if (id === 'price' && value) {
      const splitNumber = value.toString().split('.');
      if (value.includes('.') && value.match(/^\d+(\.\d+)?$/)) {
        if (splitNumber.length > 2) {
          twoDecimal.push(id);
        }
        if (splitNumber[1].length !== 2) {
          twoDecimal.push(id);
        }
      } else {
        nonDecimal.push(id);
      }
    }
    if ((id === 'quantity' || id === 'price') && value < 0) {
      noNegativeNumbers.push(id);
    }
    if (id === 'quantity' && value) {
      const splitNumber = value.toString().split('.');
      if (splitNumber.length > 1) {
        noDecimal.push(id);
      }
    }
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
  if (noDecimal.length) {
    noDecimal.forEach((i) => {
      errors[i] = 'No decimals allowed';
    });
  }
  if (noNegativeNumbers.length) {
    noNegativeNumbers.forEach((i) => {
      errors[i] = 'No Negative Quantity';
    });
  }
  if (nonDecimal.length) {
    nonDecimal.forEach((i) => {
      errors[i] = 'Price must be a decimal';
    });
  }

  return errors;
};

export default generateErrors;
