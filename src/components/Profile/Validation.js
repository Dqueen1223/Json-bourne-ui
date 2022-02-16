const profileValidation = (data) => {
  const error = new Map();

  Object.keys(data).forEach((key) => {
    if (data[key] === null || data[key] === undefined || data[key].trim() === '') {
      error[key] = 'This field may not be empty or whitespace';
    }
  });
  return error;
};
export default profileValidation;
