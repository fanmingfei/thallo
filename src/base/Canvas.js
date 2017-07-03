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
        const x1y1 = Vector2.minus(gameObject.transform.position, gameObject.transform.anchor);
        const x2y2 = Vector2.add(x1y1, new Vector2({ x: gameObject.renderer.rect.x, y: gameObject.renderer.rect.y }));
        this.context.drawImage(gameObject.renderer.image, x2y2.x, x2y2.y, gameObject.renderer.rect.width, gameObject.renderer.rect.height);
    }
    setCamera(camera) {
        this.camera = camera;
    }
}
