import Sprite from '../base/sprite'

const screenWidth = window.innerWidth
const screenHeight = window.innerHeight

const BG_IMG_SRC = 'images/fg.png'
const BG_WIDTH = screenWidth
const BG_HEIGHT = 118

export default class Floor extends Sprite {
  constructor(ctx) {
    super(BG_IMG_SRC, BG_WIDTH, BG_HEIGHT);
  }

  render(ctx) {
    ctx.drawImage(
      this.img,
      0,
      screenHeight - BG_HEIGHT,
      screenWidth,
      BG_HEIGHT
    )
  }
}