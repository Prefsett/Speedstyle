import { describe, expect, test } from '@jest/globals';
import { Values } from '@utils/values/values';

describe('Return values or null', () => {
  test('Should return the input value if it is not null or correct value', () => {
    expect(Values.getValues('10px')).toBe('10px');
    expect(Values.getValues('2,7rem')).toBe('2,7rem');
    expect(Values.getValues('5%')).toBe('5%');

    expect(Values.getValues('--color')).toBe('var(--color)');
    expect(Values.getValues('--color-first')).toBe('var(--color-first)');
    expect(Values.getValues('--color_second')).toBe('var(--color_second)');

    expect(Values.getValues('inh')).toBe('inherit');
    expect(Values.getValues('ini')).toBe('initial');
    expect(Values.getValues('uns')).toBe('unset');
  });

  test('Should return null if the value is not correct or null', () => {
    expect(Values.getValues('')).toBe(null);
    expect(Values.getValues('18-5px')).toBe(null);
    expect(Values.getValues('--')).toBe(null);
  });
});
