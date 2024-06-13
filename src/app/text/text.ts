import { RegExpArr } from '@type/regExpArr';
import { Values } from '@utils/values/values';
import { TextValues } from './textValues';

export class Text {
  private static elements: HTMLElement[] = this.getElements();

  public static applyStyle(): void {
    this.addStyles();
    this.removeClasses();
  }

  private static getElements(): HTMLElement[] {
    return Array.from(
      document.querySelectorAll('[class*="text:"]'),
    ) as HTMLElement[];
  }

  private static addStyles(): void {
    for (let element of this.elements) {
      const value: string = this.getClassName(element).replace(/text:/, '');
      element.style.fontSize = Text.getValue(value);
    }
  }

  private static removeClasses(): void {
    for (let element of this.elements)
      element.classList.remove(this.getClassName(element));
  }

  private static getClassName(element: HTMLElement): string {
    const classList: RegExpArr = element.className.match(/text:[\d\w-]*/);
    return classList ? classList[0] : '';
  }

  private static getValue(value: string): string {
    const STANDARD_FONT_SIZE: string = '16px';
    return (
      Values.getValues(value) ||
      TextValues.getValues(value) ||
      STANDARD_FONT_SIZE
    );
  }
}
