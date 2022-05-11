import { Constants } from "./constants.js";
export class Sprite {
    constructor(props) {
        this.image = new Image();
        this.framesElapsed = 0;
        this.holdFrame = 5;
        this.currentFrame = 0;
        this.props = props;
        this.position = props.position;
        this.image.src = props.imgSrc;
        this.image.onload = () => { };
    }
    draw() {
        if (this.framesElapsed++ % this.holdFrame == 0) {
            if (++this.currentFrame >= this.props.frames) {
                this.currentFrame = 0;
            }
            this.framesElapsed = 1;
        }
        Constants.c.drawImage(this.image, this.currentFrame * (this.image.width / this.props.frames), 0, this.image.width / this.props.frames, this.image.height, this.position.x, this.position.y, (this.props.scale * this.image.width) / this.props.frames, this.props.scale * this.image.height);
    }
    update() {
        this.draw();
    }
}
//# sourceMappingURL=sprite.js.map