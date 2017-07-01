export default class Scene {
    constructor({
        width,
        height
    }) {
        this.width = width;
        this.height = height;
        this.gameObjects = [];
    }
    addGameObject(gameObject) {
        this.gameObjects.push(gameObject);
    }
}
