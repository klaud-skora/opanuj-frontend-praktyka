import { ComparisonType } from './domain'; 

export const compareFn = (comparisonType: ComparisonType, value: number) => {
  switch (comparisonType) { 
    case ComparisonType.EQUAL:
      return (val: number) => val === value;
    case ComparisonType.GREATER_THAN:
      return (val: number) => val > value;
    case ComparisonType.GREATER_THAN_OR_EQUAL:
      return (val: number) => val >= value;
    case ComparisonType.LESS_THAN:
      return (val: number) => val < value;
    case ComparisonType.LESS_THAN_OR_EQUAL:
      return (val: number) => val <= value;
  }
}