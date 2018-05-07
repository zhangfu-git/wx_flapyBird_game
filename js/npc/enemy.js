import DataBus from '../databus'
import Pipe from './pipe'
import Music from '../runtime/music'

const databus = new DataBus()

const screenWidth = window.innerWidth
const screenHeight = window.innerHeight

const pipeH = databus.pipeInfo.height;
const pipeW = databus.pipeInfo.width;

const constant = pipeH + databus.gap;

function rnd(start, end) {
  return Math.floor(Math.random() * (end - start) + start)
}

export default class Enemy {

  constructor() {
    this.createdRndPipe();
    this.music = new Music();
  }

  setBird(bird) {
    this.bird = bird;
  }

  renderPipe(ctx) {
    
    let pipeLen = databus.pipe.length;

    for (let i = 0; i < pipeLen; i++) {

      const currPipeX = databus.pipe[i].x
      const currPipeY = databus.pipe[i].y
      
      this.pipeNorth = new Pipe('images/pipeNorth.png', currPipeX, currPipeY, ctx);
      this.pipeNorth.drawToCanvas(ctx);

      this.pipeSouth = new Pipe('images/pipeSouth.png', currPipeX, currPipeY + constant, ctx);
      this.pipeSouth.drawToCanvas(ctx);
    
      databus.pipe[i].x -= 1;

      if (databus.pipe[i].x == 12) {
        this.createdRndPipe();
      }

      // if (this.removePipe(databus.pipe[i])) {
      //   pipeLen -= 1;
      // }
      
      this.collisionDetection(databus.pipe[i]);
      
      this.scorPlay(databus.pipe[i]);
    }
  }

  /**
   * 生产一个随机的管道
  */
  createdRndPipe() {
    const rndX = rnd(pipeH * 0.5, pipeH * 0.9) - pipeH
    databus.pipe.push({
      x: screenWidth,
      y: rndX
    });
  }

  /**
   * 移除超出屏幕的pipe
  */
  removePipe(pipe) {
    if (pipe.x <= -pipeW) {
      databus.removePipe();
      return true;
    }
    return false;
  }
  
  /**
   * 分数打印
   * pipe => 当前pipe[i]
  */
  scorPlay(pipe) {
    if (pipe.x === 5) {
      databus.score += 1;
      this.music.playScore();
    }
  }

  /**
   * 检测是否碰撞pipe
  */
  collisionDetection(pipe) {
    const bird = this.bird;
    const bX = bird.x;
    const bY = bird.y;
    const bW = bird.width;
    const bH = bird.height;

    const floorH = 118;

    if (bX + bW >= pipe.x && bX <= pipe.x + pipeW && (bY <= pipe.y + pipeH || bY + bH >= pipe.y + constant) ||
      bY + bH >= screenHeight - floorH
    ) {
      databus.gameOver = true;
      this.music.playGameOver();
    }
  }
}
