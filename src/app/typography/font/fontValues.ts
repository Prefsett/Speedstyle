import { EnumValues } from '@utils/enumValues/enumValues';
import { fontValue } from '@enum/typography/font/fontValue';

export class FontValues {
  public static getValues(value: string): string | null {
    return this.getFontValue(value);
  }

  public static getFontValue(value: string): string | null {
    return EnumValues.getValues(value, fontValue);
  }
}
