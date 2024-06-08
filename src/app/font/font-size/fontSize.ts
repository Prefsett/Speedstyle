import { RegExpArr } from '@type/regExpArr';
import { UnitsMeasurement } from '@enum/uintsMeasurement';

export class FontSize {
  private static elements: HTMLElement[] = FontSize.getElements();

  static applyStyle(): void {
    FontSize.addStyles();
    FontSize.removeClasses();
  }

  private static getElements(): HTMLElement[] {
    return Array.from(
      document.querySelectorAll('[class*="fs-"]'),
    ) as HTMLElement[];
  }

  private static addStyles(): void {
    for (let element of FontSize.elements) {
      const className: string = FontSize.getClassName(element);
      let value: string = className.replace(/fs-/, '');

      const regex: RegExp = /(\d+)(\w+)/;
      const match: RegExpArr = value.match(regex);
      let unitMeasurement;
      let unit;

      if (match) {
        unitMeasurement = match[2];
        unit = match[1];
      }

      if (
        unitMeasurement == UnitsMeasurement.px ||
        unitMeasurement == UnitsMeasurement.rem
      )
        element.style.fontSize = unit + unitMeasurement;
    }
  }

  private static removeClasses(): void {
    for (let element of FontSize.elements)
      element.classList.remove(FontSize.getClassName(element));
  }

  private static getClassName(element: HTMLElement): string {
    const classList: RegExpArr = element.className.match(/fs-[\d\w]+/);
    const className: string = classList ? classList[0] : '';
    return className;
  }
}
