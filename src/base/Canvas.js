import {Vector2} from './types';

export default class Canvas {
    constructor({ canvas, width, height, camera = undefined }) {
        this.canvas = canvas;
        this.width = width;
        this.height = height;
        this.context = canvas.getContext('2d');
        this.camera = camera;
        this.framer = requestAnimationFrame(()=>this.render());
    }

    render() {
        this.clearContext();
        const gameObjects = this.camera.getVisibleGameObjects();
        for (let gameObject of gameObjects) {
            this.drawImg(gameObject);
        }
        this.framer = requestAnimationFrame(()=>this.render());
    }
    clearContext() {
        this.context.clearRect(0, 0, this.width, this.height);
    }
    drawImg(gameObject) {
        for (let img of gameObject.renderer.images){
            let x1y1 = Vector2.minus(gameObject.transform.position, gameObject.transform.anchor);
            let x2y2 = Vector2.add(x1y1, new Vector2({ x: img.rect.x, y: img.rect.y }));
            this.context.save();
            this.context.translate(gameObject.transform.position.x , gameObject.transform.position.y);
            this.context.rotate(gameObject.transform.rotation * Math.PI/180);
            this.context.drawImage(img.image, -gameObject.transform.anchor.x, -gameObject.transform.anchor.y, img.rect.width, img.rect.height);
            this.context.restore();
        }
    }
    setCamera(camera) {
        this.camera = camera;
    }
}
