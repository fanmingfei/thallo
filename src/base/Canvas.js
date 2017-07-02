export default class Canvas {
    constructor({canvas, width, height}) {
        this.canvas = canvas;
        this.width = width;
        this.height = height;
        this.context = canvas.getContext('2d');
    }
    getData() {
        
    }
}