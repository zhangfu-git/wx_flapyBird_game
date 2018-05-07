let instance

/**
 * 统一的音效管理器
 */
export default class Music {
  constructor() {
    if ( instance )
      return instance

    instance = this

    // this.bgmAudio = new Audio()
    // this.bgmAudio.loop = true
    // this.bgmAudio.src  = 'audio/bgm.mp3'

    this.flyAudio = new Audio();
    this.flyAudio.src = 'audio/fly.mp3';

    this.scoreAudio = new Audio();
    this.scoreAudio.src = 'audio/score.mp3';

    this.gameOverAudio = new Audio();
    this.gameOverAudio.src = 'audio/game_over.mp3'

  }

  playFly() {
    this.flyAudio.currentTime = 0
    this.flyAudio.play()
  }

  playScore() {
    this.scoreAudio.currentTime = 0
    this.scoreAudio.play()
  }

  playGameOver() {
    this.gameOverAudio.currentTime = 0
    this.gameOverAudio.play()
  }
}
