import { describe, expect, test } from '@jest/globals';
import { Values } from '@values';

describe('Return inheritance value or null', () => {
  test('Should return an integer value if the given shortened value passed is true or not null', () => {
    expect(Values.getInheritanceValue('inh')).toBe('inherit');
    expect(Values.getInheritanceValue('ini')).toBe('initial');
    expect(Values.getInheritanceValue('uns')).toBe('unset');
  });

  test('Should return null if the value is not correct or null', () => {
    expect(Values.getInheritanceValue('')).toBe(null);
  });
});
