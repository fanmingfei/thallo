import Camera from './Camera';
import store from '../utils/store';
import Frame from './Frame';
export default class Scene {
    constructor({
        width,
        height
    }) {
        this.width = width;
        this.height = height;
        this.camera = [];
        this.gameObjects = [];
        this.frame = new Frame({scene:this});
        this.gameObjectStore = store(this)('gameObject');
    }
    addGameObject(gameObject) {
        gameObject instanceof Camera && this.camera.push(gameObject);
        gameObject.setScene({ scene: this });
        this.gameObjects.push(gameObject);
        this.gameObjectStore.push(gameObject);
    }
}
