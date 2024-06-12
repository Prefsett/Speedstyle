export class TextValues {
  public static getTextValues(value: string): string | null {
    return this.getCustomValue(value) || this.getFontSizeValue(value);
  }

  public static getCustomValue(value: string): string | null {
    switch (value) {
      case 'root':
        return '1rem';
      default:
        return null;
    }
  }

  public static getFontSizeValue(value: string): string | null {
    switch (value) {
      case 'sml':
        return 'small';
      case 'smr':
        return 'smaller';
      case 'x-sml':
        return 'x-small';
      case 'xx-sml':
        return 'xx-small';
      case 'med':
        return 'medium';
      case 'lrg':
        return 'large';
      case 'lrgr':
        return 'larger';
      case 'x-lrg':
        return 'x-large';
      case 'xx-lrg':
        return 'xx-large';
      default:
        return null;
    }
  }
}
