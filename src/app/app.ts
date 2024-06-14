import { Typography } from './typography/typography';
export class Speedstyle {
  private static instance: Speedstyle;

  constructor() {
    if (Speedstyle.instance) return Speedstyle.instance;

    Speedstyle.instance = this;

    Typography.applyStyles();
  }
}
