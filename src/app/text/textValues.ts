import { EnumValues } from '@utils/enumValues/enumValues';
import { customTextValue } from '@enum/customTextValue';
import { textValue } from '@enum/textValue';

export class TextValues {
  public static getValues(value: string): string | null {
    return this.getCustomValue(value) || this.getTextValue(value);
  }

  public static getCustomValue(value: string): string | null {
    return EnumValues.getValues(value, customTextValue);
  }

  public static getTextValue(value: string): string | null {
    return EnumValues.getValues(value, textValue);
  }
}
