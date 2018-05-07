// import Pool from './base/pool'

let instance
const screenWidth = window.innerWidth
const screenHeight = window.innerHeight
/**
 * 全局状态管理器
 */
export default class DataBus {
  constructor() {
    if ( instance )
      return instance

    instance = this

    this.reset()
  }

  reset() {
    this.gap        = 80
    this.pipeInfo   = {
      height: screenHeight - 118,
      width: 52
    }
    this.score      = 0
    this.speed      = 
    this.enemys     = []
    this.pipe       = []
    this.animations = []
    this.gameOver   = false
  }

  removePipe() {
    console.log(this.pipe)
    let temp = this.pipe.shift();
    temp.visible = false;
  }
}
