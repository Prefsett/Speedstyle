interface ISpeedstyle {}

export class Speedstyle implements ISpeedstyle {
  private static instance: Speedstyle;

  constructor() {
    if (Speedstyle.instance) return Speedstyle.instance;

    Speedstyle.instance = this;
  }
}
