export default class Rect {
    constructor({
        x = 0,
        y = 0,
        width = 0,
        height = 0
    } = {x: 0, y: 0, width: 0, height: 0}) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
}
