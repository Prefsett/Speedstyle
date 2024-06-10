import { describe, expect, test } from '@jest/globals';
import { Values } from '@utils/values';

describe('Inheritance value module', () => {
  test('inh in CSS value inherit', () => {
    expect(Values.getInheritanceValue('inh')).toBe('inherit');
  });

  test('ini in CSS value initial', () => {
    expect(Values.getInheritanceValue('ini')).toBe('initial');
  });

  test('uns in CSS value unset', () => {
    expect(Values.getInheritanceValue('uns')).toBe('unset');
  });

  test('small in CSS value [null]', () => {
    expect(Values.getInheritanceValue('small')).toBe(null);
  });
});
