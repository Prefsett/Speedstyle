import { Values } from '@utils/values/values';
import { FontValues } from './fontValues';
import { RegExpArr } from '@app/lib/type/regExpArr';

export class Font {
  private static elements: HTMLElement[] = this.getElements();

  public static applyStyle(): void {
    this.addStyles();
    this.removeClasses();
  }

  private static getElements(): HTMLElement[] {
    return Array.from(
      document.querySelectorAll('[class*="font:"]'),
    ) as HTMLElement[];
  }

  private static addStyles(): void {
    for (let element of this.elements) {
      const value: string = this.getClassName(element).replace(/font:/, '');
      element.style.fontFamily = this.getValue(value);
    }
  }

  private static removeClasses(): void {
    for (let element of this.elements)
      element.classList.remove(this.getClassName(element));
  }

  private static getClassName(element: HTMLElement): string {
    const className: RegExpArr = element.className.match(/font:[\w-]*/);
    return className ? className[0] : '';
  }

  private static getValue(value: string): string {
    const STANDARD_FONT_FAMILY = "'Times New Roman'";
    return (
      Values.getInheritanceValue(value) ||
      Values.getVarValue(value) ||
      FontValues.getValues(value) ||
      STANDARD_FONT_FAMILY
    );
  }
}
