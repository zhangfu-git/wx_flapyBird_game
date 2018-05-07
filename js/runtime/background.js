import Sprite from '../base/sprite'

const screenWidth  = window.innerWidth
const screenHeight = window.innerHeight

const BG_IMG_SRC   = 'images/bg.png'
const BG_WIDTH = screenWidth
const BG_HEIGHT = screenHeight

console.log(BG_IMG_SRC);
/**
 * 游戏背景类
 * 提供update和render函数实现无限滚动的背景功能
 */
export default class BackGround extends Sprite {
  constructor(ctx) {
    super(BG_IMG_SRC, BG_WIDTH, BG_HEIGHT)

    this.render(ctx)

    this.top = 0
  }

  update() {
    this.top += 2

    if ( this.top >= screenHeight )
      this.top = 0
  }

  /**
   * 背景图函数
   */
  render(ctx) {
    ctx.drawImage(
      this.img,
      0,
      0,
      screenWidth,
      screenHeight
    )
  }
}
