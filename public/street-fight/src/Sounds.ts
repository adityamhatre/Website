export class Sounds {
  private static audioMap: { [k: string]: HTMLAudioElement } = {
    gotHit: new Audio("/street-fight/src/assets/sounds/gotHit.ogg"),
    bg: new Audio("/street-fight/src/assets/sounds/bg.mp3"),
    attack: new Audio("/street-fight/src/assets/sounds/attack.mp3"),
  };

  private static isBgPlaying = false;

  static play(audio: string) {
    if (audio === "bg") {
      if (Sounds.isBgPlaying) return;
      Sounds.isBgPlaying = true;
      Sounds.audioMap["bg"].loop = true;
    }

    (Sounds.audioMap[audio].cloneNode(true) as HTMLAudioElement).play();
  }
}
