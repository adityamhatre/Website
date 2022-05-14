import { Constants } from "./constants.js";
import { DVD } from "./DVD.js";

const width = Constants.width;
const height = Constants.height;
const canvas = Constants.canvas;
const c = Constants.c;

canvas.width = width;
canvas.height = height;

c.fillRect(0, 0, canvas.width, canvas.height);

new DVD();
