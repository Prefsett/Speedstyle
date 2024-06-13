import { Text } from './text/text';
export class Speedstyle {
  private static instance: Speedstyle;

  constructor() {
    if (Speedstyle.instance) return Speedstyle.instance;

    Speedstyle.instance = this;

    Text.applyStyle();
  }
}
