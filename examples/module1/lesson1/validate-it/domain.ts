export interface ValidationRule {  
  (intValue: number): boolean;
} 

export enum ComparisonType {
  EQUAL = 'EQUAL',
  GREATER_THAN = 'GREATER_THAN',
  GREATER_THAN_OR_EQUAL = 'GREATER_THAN_OR_EQUAL',
  LESS_THAN = 'LESS_THAN',
  LESS_THAN_OR_EQUAL = 'LESS_THAN_OR_EQUAL',
}

export enum ValidationMessage {
  INVALID = 'Invalid',
  VALID = 'Valid',
  MISSING_REQUIRED_ELEMENTS = 'Missing required elements',
  EMPTY_MESSAGE = ''
}