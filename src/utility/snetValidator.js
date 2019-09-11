import validate from "validate.js";

let snetValidator;

const hasLowerCase = (value, options, key, attributes) => {
  if (/[a-z]/.test(value)) {
    return;
  }
  return options.message || "must contain a lowercase character";
};

const hasUpperCase = (value, options, key, attributes) => {
  if (/[A-Z]/.test(value)) {
    return;
  }
  return options.message || "must contain an uppercase character";
};

const hasNumber = (value, options, key, attributes) => {
  if (/[0-9]/.test(value)) {
    return;
  }
  return options.message || "must contain a number";
};

const hasAWSPasswordSplChar = (value, options, key, attributes) => {
  // eslint-disable-next-line no-useless-escape
  if (/[\^\$\*\.\[\]\{\}\(\)\?\-\"\!\@\#\%\&\/\,\>\<\'\:\;\|\_\~\`]/.test(value)) {
    return;
  }
  return options.message || "must contain a special character";
};

export const initSnetValidator = () => {
  if (snetValidator) {
    return snetValidator;
  }

  snetValidator = validate;
  snetValidator.validators = {
    ...validate.validators,
    // custom validators
    hasLowerCase,
    hasUpperCase,
    hasNumber,
    hasAWSPasswordSplChar,
  };

  // default options
  snetValidator.options = { format: "flat" };

  return snetValidator;
};
