export default class Vector2 {
  x:number;
  y:number;
  constructor(x : number = 0, y ?:number = 0) {
    if(y) {
      this.x = x
      this.y = y
    } else {
      this.x = x
      this.y = x
    }
  }
}




