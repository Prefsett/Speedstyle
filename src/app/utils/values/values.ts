import { EnumValues } from '@utils/enumValues/enumValues';
import { inheritanceValue } from '@enum/inheritanceValue';
import { UnitsMeasurement } from '@enum/uintsMeasurement';

export class Values {
  public static getValues(value: string): string | null {
    return (
      this.getUnitValue(value) ||
      this.getInheritanceValue(value) ||
      this.getVarValue(value)
    );
  }

  public static getUnitValue(value: string): string | null {
    const unit: string = value.replace(/[\d,]*/, '');
    return this.checkUnitValue(unit) ? value : null;
  }

  public static getVarValue(value: string): string | null {
    return /--.*/.test(value) && value.length != 2 ? `var(${value})` : null;
  }

  public static getInheritanceValue(value: string): string | null {
    return EnumValues.getValues(value, inheritanceValue);
  }

  private static checkUnitValue(unit: string): boolean {
    for (let unitMeasurement in UnitsMeasurement)
      if (unit == unitMeasurement) return true;
    return false;
  }
}
