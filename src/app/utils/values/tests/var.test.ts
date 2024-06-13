import { describe, expect, test } from '@jest/globals';
import { Values } from '@values';

describe('Return var value or null', () => {
  test('Should return the input value wrapped in var() if it is not null or correct value', () => {
    expect(Values.getVarValue('--color')).toBe('var(--color)');
    expect(Values.getVarValue('--color-first')).toBe('var(--color-first)');
    expect(Values.getVarValue('--color_second')).toBe('var(--color_second)');
  });

  test('Should return null if the value is not correct or null', () => {
    expect(Values.getVarValue('')).toBe(null);
    expect(Values.getVarValue('--')).toBe(null);
  });
});
