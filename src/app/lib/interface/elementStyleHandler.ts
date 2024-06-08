export interface IElementStyleHandler {
  elements: HTMLElement[];
  applyStyle(): void;
  getElements(): HTMLElement[];
  addStyles(): void;
  removeClasses(): void;
}
