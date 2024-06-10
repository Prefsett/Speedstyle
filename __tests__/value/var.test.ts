import { describe, expect, test } from '@jest/globals';
import { Values } from '@utils/values';

describe('Var value module', () => {
  test('--color in CSS value var(--color)', () => {
    expect(Values.getVarValue('--color')).toBe('var(--color)');
  });

  test('--color-second in CSS value var(--color-second)', () => {
    expect(Values.getVarValue('--color-second')).toBe('var(--color-second)');
  });

  test('10px in CSS value var([null])', () => {
    expect(Values.getVarValue('10px')).toBe(null);
  });
});
