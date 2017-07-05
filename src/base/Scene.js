import RealScene from './RealScene';
import GameObject from './GameObject';

export default class Scene {
    constructor() {
        this.gameObjects = [];
    }
    addGameObjects(...gameObjects) {
        if (this.gameObjects.indexOf(gameObject) !== -1) {
            continue;
        }

        if (gameObject instanceof Camera) {
            this.camera = gameObject;
        }
    }
}