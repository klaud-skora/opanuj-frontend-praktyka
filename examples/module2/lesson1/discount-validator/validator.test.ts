import { describe, expect, test } from 'vitest';
import { formValidator } from './validator';

describe('Form validation', () => {
    test('should return an error if first name is missing', () => {
        const errors = formValidator('', 'Doe', 30);
        expect(errors).toContain('First name is required');
    });

    test('should return an error if last name is missing', () => {
        const errors = formValidator('John', '', 30);
        expect(errors).toContain('Last name is required');
    });

    test('should return an error if age is negative', () => {
        const errors = formValidator('John', 'Doe', -1);
        expect(errors).toContain('Age must be a positive number');
    });

    test('should return empty errors when all fields are valid', () =>{
        const errors = formValidator('John', 'Doe', 30);
        expect(errors).toHaveLength(0);
    })

    test('should return errors length of 3 when all fields are empty or invalid', () => {
        const errors = formValidator('', '', -1);
        expect(errors).toHaveLength(3);
    });

    test('should throw an error when age is not a number', () => {
        expect(() => formValidator('', '', NaN)).toThrow('Age must be a number');
    });
});