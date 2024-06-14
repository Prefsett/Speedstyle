import { describe, expect, test } from '@jest/globals';
import { FontValues } from '@typography/font/fontValues';

describe('Return font family value or null', () => {
  test('Should return the font-family value if it is correct short name or not null', () => {
    expect(FontValues.getFontValue('system')).toBe('system-ui');
    expect(FontValues.getFontValue('system-ui')).toBe('system-ui');

    expect(FontValues.getFontValue('tnr')).toBe("'Times New Roman'");
    expect(FontValues.getFontValue('sans')).toBe('sans-serif');
  });
});
