import { Constants } from "./constants.js";
import { Sprite } from "./sprite.js";
export class DVD {
    constructor() {
        this.speed = 5;
        this.loop = this.loop.bind(this);
        this.sprite = new Sprite({
            x: 0,
            y: 0,
            width: 125,
            height: 125,
        });
        this.sprite.velocity.x = this.speed;
        this.sprite.velocity.y = this.speed;
        this.loop();
    }
    loop() {
        requestAnimationFrame(this.loop);
        Constants.c.fillStyle = "black";
        Constants.c.fillRect(0, 0, Constants.canvas.width, Constants.canvas.height);
        if (this.sprite.isOutsideRight()) {
            this.sprite.velocity.x = -this.speed;
            this.sprite.transitionColor();
        }
        if (this.sprite.isOutsideLeft()) {
            this.sprite.velocity.x = this.speed;
            this.sprite.transitionColor();
        }
        if (this.sprite.isOutsideTop()) {
            this.sprite.velocity.y = this.speed;
            this.sprite.transitionColor();
        }
        if (this.sprite.isOutsideBottom()) {
            this.sprite.velocity.y = -this.speed;
            this.sprite.transitionColor();
        }
        this.sprite.draw();
    }
}
//# sourceMappingURL=DVD.js.map