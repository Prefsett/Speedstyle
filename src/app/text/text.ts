import { RegExpArr } from '@type/regExpArr';
import { UnitsMeasurement } from '@enum/uintsMeasurement';
import { Values } from '@utils/values';

export class Text {
  private static elements: HTMLElement[] = Text.getElements();

  public static applyStyle(): void {
    Text.addStyles();
    Text.removeClasses();
  }

  private static getElements(): HTMLElement[] {
    const elements: NodeListOf<Element> =
      document.querySelectorAll('[class*="text:"]');
    return Array.from(elements) as HTMLElement[];
  }

  private static addStyles(): void {
    for (let element of Text.elements) {
      const value: string = Text.getClassName(element).replace(/text:/, '');
      element.style.fontSize = Text.getValue(value);
    }
  }

  private static removeClasses(): void {
    for (let element of Text.elements)
      element.classList.remove(Text.getClassName(element));
  }

  private static getClassName(element: HTMLElement): string {
    const classList: RegExpArr = element.className.match(/text:[\d\w-]+/);
    return classList ? classList[0] : '';
  }

  private static getValue(value: string): string {
    const STANDARD_FONT_SIZE: string = '16px';
    return (
      Text.getUnitValue(value) ||
      Text.getFontSizeValue(value) ||
      Text.getCustomValue(value) ||
      Values.getInheritanceValue(value) ||
      Values.getVarValue(value) ||
      STANDARD_FONT_SIZE
    );
  }

  private static getCustomValue(value: string): string | null {
    switch (value) {
      case 'root':
        return '1rem';
      default:
        return null;
    }
  }

  private static getFontSizeValue(value: string): string | null {
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

  private static getUnitValue(value: string): string | null {
    const match: RegExpArr = value.match(/(\d+)(\w+)/);
    const unit: string = match ? match[1] : '';
    const unitMeasurement: string = match ? match[2] : '';

    if (Text.checkUnitMeasurement(unitMeasurement))
      return unit + unitMeasurement;
    else return null;
  }

  private static checkUnitMeasurement(unitMeasurement: string): boolean {
    let checked: boolean = false;
    for (let UnitMeasurement in UnitsMeasurement)
      checked = checked || unitMeasurement == UnitMeasurement;
    return checked;
  }
}
