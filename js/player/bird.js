import Sprite   from '../base/sprite'
import Music from '../runtime/music'

// 玩家相关常量设置
const PLAYER_IMG_SRC = 'images/bird.png'
const PLAYER_WIDTH   = 38
const PLAYER_HEIGHT  = 26

export default class Player extends Sprite {
  constructor() {
    super(PLAYER_IMG_SRC, PLAYER_WIDTH, PLAYER_HEIGHT)

    // 小鸟默认的位置
    this.x = 10
    this.y = 150

    this.music = new Music();

    // 重力
    this.gravity = 1.5;

    // 初始化事件监听
    this.initEvent()
  }

  /**
   * 玩家响应手指的触摸事件
   * 改变小鸟的位置
   */
  initEvent() {
    canvas.addEventListener('touchstart', ((e) => {
      e.preventDefault()
      this.fly();
    }).bind(this));
  }

  /**
   * 玩家手指点击屏幕抬起小鸟
  */
  fly() {
    this.y -= 20;
    this.music.playFly();
  }

  /**
   * 小鸟自由坠落
  */
  freeFall() {
    this.y += this.gravity;
  }
}
