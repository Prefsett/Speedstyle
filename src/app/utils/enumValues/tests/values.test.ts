import { describe, expect, test } from '@jest/globals';
import { EnumValues } from '@utils/enumValues/enumValues';
import { customTextValue } from '@app/lib/enum/typography/text/customTextValue';

describe('Return enum value or null', () => {
  test('Should return the enum value if it is not null or correct value', () => {
    expect(EnumValues.getValues('rt', customTextValue)).toBe('1rem');
    expect(EnumValues.getValues('root', customTextValue)).toBe('1rem');
  });
});
