import { Constants } from "./constants.js";
import { Fighter } from "./fighter.js";
import { Keys } from "./Keys.js";
import { Sounds } from "./Sounds.js";
import { Sprite } from "./sprite.js";

export class Game {
  private player: Fighter;
  private enemy: Fighter;
  private bg: Sprite;
  private shop: Sprite;

  constructor() {
    [this.player, this.enemy] = this.initPlayers();
    this.bg = new Sprite({
      position: { x: 0, y: 0 },
      size: { x: Constants.width, y: Constants.height },
      imgSrc: "src/assets/images/background.png",
      scale: 1,
      frames: 1,
    });
    this.shop = new Sprite({
      position: { x: Constants.width - 425, y: Constants.height - 430 },
      size: { x: 100, y: 100 },
      imgSrc: "src/assets/images/shop.png",
      scale: 2.5,
      frames: 6,
    });
    this.loop = this.loop.bind(this);
  }

  private initPlayers(): Fighter[] {
    const player = new Fighter({
      debug: false,
      position: { x: 50, y: 100 },
      velocity: { x: 0, y: 0 },
      size: { x: 50, y: 150 },
      imgSrc: "src/assets/images/player-right/idle.png",
      frames: 8,
      scale: 2.25,
      direction: "right",
      type: "player",
      hitBoxOffset: {
        size: { width: 35, height: 60 },
        position: { x: 0, y: 0 },
      },
    });

    const enemy = new Fighter({
      debug: false,
      position: { x: 500, y: 100 },
      velocity: { x: 0, y: 0 },
      size: { x: 50, y: 150 },
      imgSrc: "src/assets/images/enemy-left/idle.png",
      scale: 2.25,
      frames: 4,
      direction: "left",
      type: "enemy",
      hitBoxOffset: {
        size: { width: 35, height: 65 },
        position: { x: 0, y: 0 },
      },
    });
    return [player, enemy];
  }

  private addEventListeners() {
    addEventListener("keydown", async (event: KeyboardEvent) => {
      const key = event.key;
      switch (key) {
        case "d":
          Keys.d.pressed = true;
          this.player.lastKey = "d";
          break;
        case "a":
          Keys.a.pressed = true;
          this.player.lastKey = "a";
          break;
        case "w":
          Keys.w.pressed = true;
          this.player.lastKey = "w";
          break;
        case " ":
          const playerAttackSuccessful = await this.player.attack(this.enemy);
          if (playerAttackSuccessful) {
            this.enemy.gotAttacked();
          }
          break;
        case "ArrowLeft":
          Keys.ArrowLeft.pressed = true;
          this.enemy.lastKey = "ArrowLeft";
          break;
        case "ArrowRight":
          Keys.ArrowRight.pressed = true;
          this.enemy.lastKey = "ArrowRight";
          break;
        case "ArrowUp":
          Keys.ArrowUp.pressed = true;
          this.enemy.lastKey = "ArrowUp";
          break;
        case "Enter":
        case "Return":
          const enemyAttackSuccessful = await this.enemy.attack(this.player);
          if (enemyAttackSuccessful) {
            this.player.gotAttacked();
          }
          break;
      }

      Sounds.play("bg"); //will only play if the sound is not already playing
    });

    addEventListener("keyup", (event: KeyboardEvent) => {
      const key = event.key;
      switch (key) {
        case "d":
          Keys.d.pressed = false;
          break;
        case "a":
          Keys.a.pressed = false;
          break;
        case "w":
          Keys.w.pressed = false;
          break;

        case "ArrowLeft":
          Keys.ArrowLeft.pressed = false;
          break;
        case "ArrowRight":
          Keys.ArrowRight.pressed = false;
          break;
        case "ArrowUp":
          Keys.ArrowUp.pressed = false;
          break;
      }
    });
  }

  private checkKeys() {
    if (
      this.player.health === 0 ||
      this.enemy.health === 0 ||
      Constants.gameTimer === 0
    )
      return;
    if (this.player.lastKey === "a" && Keys.a.pressed) {
      this.player.goLeft();
    }
    if (this.player.lastKey === "d" && Keys.d.pressed) {
      this.player.goRight();
    }
    if (this.player.lastKey === "w" && Keys.w.pressed) {
      this.player.jump();
    }
    if (!Keys.a.pressed && !Keys.d.pressed) {
      this.player.stopHorizontal();
    }

    if (Keys.ArrowLeft.pressed && this.enemy.lastKey === "ArrowLeft") {
      this.enemy.goLeft();
    }
    if (Keys.ArrowRight.pressed && this.enemy.lastKey === "ArrowRight") {
      this.enemy.goRight();
    }
    if (this.enemy.lastKey === "ArrowUp" && Keys.ArrowUp.pressed) {
      this.enemy.jump();
    }
    if (!Keys.ArrowLeft.pressed && !Keys.ArrowRight.pressed) {
      this.enemy.stopHorizontal();
    }
  }

  private loop() {
    requestAnimationFrame(this.loop);
    Constants.c.fillStyle = "black";
    Constants.c.fillRect(0, 0, Constants.canvas.width, Constants.canvas.height);
    this.checkKeys();

    this.bg.update();
    this.shop.update();
    this.player.update();
    this.enemy.update();

    if (this.player.health === 0 || this.enemy.health === 0) {
      this.player.stop();
      this.enemy.stop();
    }
    this.updateInterface();
  }

  private updateInterface() {
    const enemyHealthBar = document.getElementById("enemyHealthBar");
    if (enemyHealthBar) {
      enemyHealthBar.style.width = `${this.enemy.health}%`;
    }

    const playerHealthBar = document.getElementById("playerHealthBar");
    if (playerHealthBar) {
      playerHealthBar.style.width = `${this.player.health}%`;
    }

    const status = document.getElementById("timer");
    if (status) {
      status.innerHTML = `${this.twoDigits(Constants.gameTimer)}`;
      if (Constants.gameTimer === 0) {
        this.determineWinner(status);
      }
      if (this.player.health === 0 || this.enemy.health === 0) {
        this.determineWinner(status);
      }
    }
  }

  private determineWinner(status: HTMLElement) {
    if (this.player.health > this.enemy.health) {
      status.innerHTML = "Player 1 win!";
    }
    if (this.player.health < this.enemy.health) {
      status.innerHTML = "Player 2 win!";
    }
    if (this.player.health == this.enemy.health) {
      status.innerHTML = "Draw!";
    }
  }

  private twoDigits(num: number) {
    return num < 10 ? `0${num}` : num;
  }

  private startTimer() {
    const interval = setInterval(() => {
      Constants.gameTimer--;
      if (Constants.gameTimer === 0) {
        clearInterval(interval);
      }
    }, 1000);
  }

  public start() {
    this.addEventListeners();
    this.loop();
    this.startTimer();
  }
}
