export class Values {
  public static getVarValue(value: string): string | null {
    return /--.*/.test(value) ? `var(${value})` : null;
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
}
