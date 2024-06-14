import { describe, expect, test } from '@jest/globals';
import { TextValues } from '../textValues';

describe('Return custom value or null', () => {
  test('Should return the custom value if it is correct value or not null', () => {
    expect(TextValues.getCustomValue('root')).toBe('1rem');
    expect(TextValues.getCustomValue('rt')).toBe('1rem');
  });

  test('Should return null if the value is not correct or null', () => {
    expect(TextValues.getCustomValue('')).toBe(null);
    expect(TextValues.getCustomValue('10px')).toBe(null);
  });
});
