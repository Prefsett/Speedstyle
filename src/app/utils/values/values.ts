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
    switch (value) {
      case 'inh':
        return 'inherit';
      case 'ini':
        return 'initial';
      case 'uns':
        return 'unset';
      default:
        return null;
    }
  }

  private static checkUnitValue(unit: string): boolean {
    for (let unitMeasurement of Object.values(UnitsMeasurement))
      if (unit == unitMeasurement) return true;
    return false;
  }
}
