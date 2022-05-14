import { Constants } from "./constants.js";
import { SpriteProps } from "./sprite.props.js";
export class Sprite {
  private props: SpriteProps;
  public velocity: {
    x: number;
    y: number;
  } = {
    x: 0,
    y: 0,
  };
  private x;
  private y;
  private color;
  private r = 255;
  private g = 0;
  private b = 0;

  private isChanging = false;
  private logo = new Image();

  constructor(props: SpriteProps) {
    this.props = props;
    this.x = props.x;
    this.y = props.y;
    this.color = `rgb(${this.r}, ${this.g}, ${this.b})`;
    this.logo.src = "src/assets/images/logo.svg";
  }

  public draw() {
    this.x += this.velocity.x;
    this.y += this.velocity.y;
    Constants.c.fillStyle = this.color;
    Constants.c.fillRect(this.x, this.y, this.props.width, this.props.height);

    Constants.c.drawImage(
      this.logo,
      this.x + 10,
      this.y + 25,
      this.props.width * 0.8,
      this.props.height * 0.6
    );
  }

  public isOutsideRight(): boolean {
    return this.x + this.props.width > Constants.width;
  }

  public isOutsideLeft(): boolean {
    return this.x < 0;
  }

  public isOutsideTop(): boolean {
    return this.y < 0;
  }

  public isOutsideBottom(): boolean {
    return this.y + this.props.height > Constants.height;
  }

  public transitionColor() {
    if (this.isChanging) return;
    console.log("changing color");
    this.isChanging = true;
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    let redDifference = Math.abs(red - this.r);
    let greenDifference = Math.abs(green - this.g);
    let blueDifference = Math.abs(blue - this.b);

    const interval = setInterval(() => {
      redDifference = Math.abs(red - this.r);
      greenDifference = Math.abs(green - this.g);
      blueDifference = Math.abs(blue - this.b);

      if (redDifference > 0) {
        this.r += red > this.r ? 1 : -1;
      }

      if (greenDifference > 0) {
        this.g += green > this.g ? 1 : -1;
      }

      if (blueDifference > 0) {
        this.b += blue > this.b ? 1 : -1;
      }

      if (
        redDifference === 0 &&
        greenDifference === 0 &&
        blueDifference === 0
      ) {
        this.isChanging = false;
        clearInterval(interval);
      }

      this.color = `rgb(${this.r}, ${this.g}, ${this.b})`;
    }, 5);
  }
}
