import Camera from './Camera';
export default class Scene {
    constructor({
        width,
        height
    }) {
        this.width = width;
        this.height = height;
        this.camera = [];
        this.gameObjects = [];
    }
    addGameObject(gameObject) {
        gameObject instanceof Camera && this.camera.push(gameObject);
        this.gameObjects.push(gameObject);
    }
}
