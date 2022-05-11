export class Constants {
}
Constants.canvas = document.getElementById("canvas");
Constants.c = Constants.canvas.getContext("2d");
Constants.width = 1366;
Constants.height = 768;
Constants.ground = 660;
Constants.actionFrameCount = {
    player: {
        idle: 8,
        fall: 2,
        jump: 2,
        attack1: 6,
        attack2: 6,
        run: 8,
        takeHit: 4,
        death: 6,
    },
    enemy: {
        idle: 4,
        fall: 2,
        jump: 2,
        attack1: 4,
        attack2: 4,
        run: 8,
        takeHit: 3,
        death: 7,
    },
};
Constants.gameTimer = 150;
//# sourceMappingURL=constants.js.map