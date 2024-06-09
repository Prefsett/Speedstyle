import { RegExpArr } from '@type/regExpArr';
import { UnitsMeasurement } from '@enum/uintsMeasurement';

export class FontSize {
  private static elements: HTMLElement[] = FontSize.getElements();

  public static applyStyle(): void {
    FontSize.addStyles();
    FontSize.removeClasses();
  }

  private static getElements(): HTMLElement[] {
    const elements: NodeListOf<Element> =
      document.querySelectorAll('[class*="text:"]');
    return Array.from(elements) as HTMLElement[];
  }

  private static addStyles(): void {
    for (let element of FontSize.elements) {
      const value: string = FontSize.getClassName(element).replace(/text:/, '');
      const match: RegExpArr = value.match(/(\d+)(\w+)/);
      const unit: string = match ? match[1] : '';
      const unitMeasurement: string = match ? match[2] : '';

      if (FontSize.checkUnitMeasurement(unitMeasurement))
        element.style.fontSize = unit + unitMeasurement;
    }
  }

  private static removeClasses(): void {
    for (let element of FontSize.elements)
      element.classList.remove(FontSize.getClassName(element));
  }

  private static getClassName(element: HTMLElement): string {
    const classList: RegExpArr = element.className.match(/text:[\d\w]+/);
    return classList ? classList[0] : '';
  }

  private static checkUnitMeasurement(unitMeasurement: string): boolean {
    return (
      unitMeasurement == UnitsMeasurement.px ||
      unitMeasurement == UnitsMeasurement.rem
    );
  }
}
