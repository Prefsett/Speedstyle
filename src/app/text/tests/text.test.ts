import { describe, expect, test } from '@jest/globals';
import { TextValues } from '@textValues';

describe('Return text value or null', () => {
  test('Should return an integer value if the given shortened value passed is true or not null', () => {
    expect(TextValues.getTextValue('sml')).toBe('small');
    expect(TextValues.getTextValue('smr')).toBe('smaller');
    expect(TextValues.getTextValue('x-sml')).toBe('x-small');
    expect(TextValues.getTextValue('xx-sml')).toBe('xx-small');
    expect(TextValues.getTextValue('med')).toBe('medium');
    expect(TextValues.getTextValue('lrg')).toBe('large');
    expect(TextValues.getTextValue('lrgr')).toBe('larger');
    expect(TextValues.getTextValue('x-lrg')).toBe('x-large');
    expect(TextValues.getTextValue('xx-lrg')).toBe('xx-large');
  });

  test('Should return null if the value is not correct or null', () => {
    expect(TextValues.getTextValue('')).toBe(null);
    expect(TextValues.getTextValue('10px')).toBe(null);
  });
});
