import { ComparisonType, ValidationRule, ValidationMessage } from './domain';
import { compareFn } from './utils';

function validator(validationRules?: ValidationRule[]) {
  const input = document.getElementById('input');
  const validateButton = document.getElementById('button');
  const resetButton = document.getElementById('button2');
  const result = document.getElementById('result');

  if(!input || !validateButton || !resetButton || !result) {  
    throw new Error(ValidationMessage.MISSING_REQUIRED_ELEMENTS); 
  }

  const inputElement = input as HTMLInputElement;

  validateButton.addEventListener('click', () => {
    const parsedValue = parseInt(inputElement.value, 10);

    if (!validationRules || validationRules.every((rule: ValidationRule) => rule(parsedValue))) {
      result.innerHTML = ValidationMessage.VALID;
    } else {
      result.innerHTML = ValidationMessage.INVALID;
    }
  });

  resetButton.addEventListener('click', () => {
    inputElement.value = ValidationMessage.EMPTY_MESSAGE;
    result.innerHTML = ValidationMessage.EMPTY_MESSAGE;
  });
}

const basicRules = [
  (val: number) => !isNaN(val),
  compareFn(ComparisonType.GREATER_THAN, 0),
  compareFn(ComparisonType.LESS_THAN, 100),
  (val: number) => val % 2 === 0,
];

validator(basicRules);
