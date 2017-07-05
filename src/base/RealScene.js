import Camera from './Camera';
import store from '../utils/store';
export default class RealScene {
    constructor({
        width,
        height
    }) {
        this.arguments = {width,height};
        this.init(this.arguments);

    }
    init({width,height}){
        this.isRuning = false;
        this.width = width;
        this.height = height;
        this.camera = null;
        this.preGameObjects = [];
        this.gameObjects = [];
        this.gameObjectStore = store(this)('gameObject');
    }
    addGameObjects(...gameObjects) {
        for(let gameObject of gameObjects) {
            if (this.gameObjects.indexOf(gameObject) !== -1) {
                continue;
            }
            if (gameObject instanceof Camera) {
                this.camera = gameObject;
            }

            this.gameObjects.push(gameObject);
            this.gameObjectStore.push(gameObject);

            if(this.isRuning){
                this.startGameObject(gameObject);
            }
        }
    }
    start() {
        // this.init(this.arguments);
        for(let gameObject of this.gameObjects) {
            this.startGameObject(gameObject);
        }
        this.isRuning = true;
    }
    startGameObject(gameObject) {
        gameObject.start({ scene: this });
        // gameObject.setScene();
    }
    destroy () {
        this.isRuning = false;
        this.camera = null;
        for (let gameObject of this.gameObjects) {
            gameObject.destroy();
        }
        this.gameObjects = [];
        this.gameObjectStore = null;
        store.remove(this);
        this.isRuning = false;
    }
}
