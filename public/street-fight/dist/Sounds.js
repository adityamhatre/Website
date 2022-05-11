export class Sounds {
    static play(audio) {
        if (audio === "bg") {
            if (Sounds.isBgPlaying)
                return;
            Sounds.isBgPlaying = true;
            Sounds.audioMap["bg"].loop = true;
        }
        Sounds.audioMap[audio].cloneNode(true).play();
    }
}
Sounds.audioMap = {
    gotHit: new Audio("src/assets/sounds/gotHit.ogg"),
    bg: new Audio("src/assets/sounds/bg.mp3"),
    attack: new Audio("src/assets/sounds/attack.mp3"),
};
Sounds.isBgPlaying = false;
//# sourceMappingURL=Sounds.js.map