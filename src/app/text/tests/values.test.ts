import { describe, expect, test } from '@jest/globals';
import { TextValues } from '@textValues';

describe('Return text values or null', () => {
  test('Should return text values if it is correct value or not null', () => {
    expect(TextValues.getValues('root')).toBe('1rem');
    expect(TextValues.getValues('rt')).toBe('1rem');

    expect(TextValues.getValues('sml')).toBe('small');
    expect(TextValues.getValues('smr')).toBe('smaller');
    expect(TextValues.getValues('x-sml')).toBe('x-small');
    expect(TextValues.getValues('xx-sml')).toBe('xx-small');
    expect(TextValues.getValues('med')).toBe('medium');
    expect(TextValues.getValues('lrg')).toBe('large');
    expect(TextValues.getValues('lrgr')).toBe('larger');
    expect(TextValues.getValues('x-lrg')).toBe('x-large');
    expect(TextValues.getValues('xx-lrg')).toBe('xx-large');
  });

  test('Should return null if the value is not correct or null', () => {
    expect(TextValues.getValues('')).toBe(null);
  });
});
