export class Constants {
  static readonly canvas = document.getElementById(
    "canvas"
  ) as HTMLCanvasElement;
  static readonly c = Constants.canvas.getContext(
    "2d"
  ) as CanvasRenderingContext2D;

  static readonly width = Math.max(window.screen.width, window.innerWidth);

  static readonly height = Math.max(window.screen.height, window.innerHeight);
}
