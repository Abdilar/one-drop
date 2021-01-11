import validator from "validator";

class FormValidator {
  constructor(validations) {
    this.validations = validations;
    this.message = 'Field';
  }

  validate(state) {
    let validation = this.valid();
    this.validations.forEach((rule) => {
      if (Object.keys(state).includes(rule.field)) {
        if (!validation[rule.field].isInvalid) {
          const field_value = state[rule.field]
            ? state[rule.field].toString()
            : "";
          const args = rule.args || [];
          const validation_method =
            typeof rule.method === "string"
              ? validator[rule.method]
              : rule.method;
          if (
            validation_method(field_value, ...args, state) !== rule.validWhen
          ) {
            validation[rule.field] = {
              isInvalid: true,
              message: `${this.message} ${rule.label} ${rule.message}`,
            };
            validation.isValid = false;
          }
        }
      } else if (rule.method === "isEmpty") {
        validation[rule.field] = {
          isInvalid: true,
          message: `${this.message} ${rule.label} ${rule.message}`,
        };
        validation.isValid = false;
      }
    });

    return validation;
  }

  valid() {
    const validation = {};
    this.validations.map(
      (rule) => (validation[rule.field] = { isInvalid: false, message: "" })
    );

    return { isValid: true, ...validation };
  }
}

export default FormValidator;
