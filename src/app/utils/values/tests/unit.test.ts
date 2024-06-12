import { describe, expect, test } from '@jest/globals';
import { Values } from '@utils/values/values';

describe('Return unit value or null', () => {
  test('Should return the input value if it is not null or correct value', () => {
    expect(Values.getUnitValue('10px')).toBe('10px');
    expect(Values.getUnitValue('2,7rem')).toBe('2,7rem');
    expect(Values.getUnitValue('5%')).toBe('5%');
  });

  test('Should return null if the value is not correct or null', () => {
    expect(Values.getUnitValue('')).toBe(null);
    expect(Values.getUnitValue('14kg')).toBe(null);
    expect(Values.getUnitValue('18-5px')).toBe(null);
  });
});
