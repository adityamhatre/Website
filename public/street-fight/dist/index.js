import { Constants } from "./constants.js";
import { Game } from "./game.js";
const width = Constants.width;
const height = Constants.height;
const canvas = Constants.canvas;
const c = Constants.c;
canvas.width = width;
canvas.height = height;
c.fillRect(0, 0, canvas.width, canvas.height);
const game = new Game();
game.start();
//# sourceMappingURL=index.js.map