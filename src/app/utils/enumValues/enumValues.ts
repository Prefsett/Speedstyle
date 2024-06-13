export class EnumValues {
  public static getValues<T extends object>(
    value: string,
    valuesEnum: T,
  ): string | null {
    for (let valueEnum in valuesEnum)
      if (value == valueEnum) return valuesEnum[valueEnum] as string;

    return null;
  }
}
