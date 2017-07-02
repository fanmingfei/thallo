export default class Canvas {
    constructor({ canvas, width, height, camera = undefined }) {
        this.canvas = canvas;
        this.width = width;
        this.height = height;
        this.context = canvas.getContext('2d');
        this.camera = camera;
        this.frame = requestAnimationFrame(()=>this.render());
    }

    render() {
        this.clearContext();
        const gameObjects = this.camera.getVisibleGameObject();
        for (gameObject of gameObjects) {
            drawImg(gameObject);
        }
        this.frame = requestAnimationFrame(()=>this.render());
    }
    clearContext() {
        this.context.clearRect(0, 0, this.width, this.height);
    }
    drawImg(gameObject) {
        const x1y1 = Vector2.minus(gameObject.position.transform, gameObject.position.anchor);
        const x2y2 = Vector2.add(x1y1, new Vector2({ x: gameObject.img.rect.x, y: gameObject.img.rect.y }));
        this.context.drawImg(gameObject.img.image, x2y2.x, x2y2.y, gameObject.img.rect.width, gameObject.img.rect.height);
    }
    setCamera(camera) {
        this.camera = camera;
    }
}
