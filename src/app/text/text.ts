import { RegExpArr } from '@type/regExpArr';
import { UnitsMeasurement } from '@enum/uintsMeasurement';

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

      const STANDARD_FONT_SIZE: string = '16px';
      let resultValue: string = STANDARD_FONT_SIZE;

      switch (value) {
        case 'root':
          resultValue = '1rem';
          break;

        case 'sml':
          resultValue = 'small';
          break;
        case 'smr':
          resultValue = 'smaller';
          break;
        case 'x-sml':
          resultValue = 'x-small';
          break;
        case 'xx-sml':
          resultValue = 'xx-small';
          break;

        case 'med':
          resultValue = 'medium';
          break;

        case 'lrg':
          resultValue = 'large';
          break;
        case 'lrgr':
          resultValue = 'larger';
          break;
        case 'x-lrg':
          resultValue = 'x-large';
          break;
        case 'xx-lrg':
          resultValue = 'xx-large';
          break;

        case 'inh':
          resultValue = 'inherit';
          break;
        case 'ini':
          resultValue = 'initial';
          break;
        case 'uns':
          resultValue = 'unset';

        default:
          if (!/--.*/.test(value)) {
            const match: RegExpArr = value.match(/(\d+)(\w+)/);
            const unit: string = match ? match[1] : '';
            const unitMeasurement: string = match ? match[2] : '';
            if (Text.checkUnitMeasurement(unitMeasurement))
              resultValue = unit + unitMeasurement;
          } else resultValue = `var(${value})`;

          break;
      }

      element.style.fontSize = resultValue;
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

  private static checkUnitMeasurement(unitMeasurement: string): boolean {
    let checked: boolean = false;
    for (let UnitMeasurement in UnitsMeasurement)
      checked = checked || unitMeasurement == UnitMeasurement;
    return checked;
  }
}
