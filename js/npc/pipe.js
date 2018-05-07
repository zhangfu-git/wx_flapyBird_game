import Sprite from '../base/sprite'
import DataBus from '../databus'

const screenWidth = window.innerWidth
const screenHeight = window.innerHeight

const X = 0;
const Y = 0;

const databus = new DataBus()

const PIPE_WIDTH = databus.pipeInfo.width
const PIPE_HEIGHT = databus.pipeInfo.height

export default class Pipe extends Sprite {
  constructor(img, x, y, ctx) {
    super(img, PIPE_WIDTH, PIPE_HEIGHT, x);
    
    this.update(x, y);
  }
  update(x, y) {
    this.x = x;
    this.y = y;
    this.visible = true
  }
}
