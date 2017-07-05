import store from '../utils/store';

export default class Frame {
    constructor({ scene, canvas }) {
        this.componentStore = null;
        this.gameObjectStore = null;
        this.gameStartTime = performance.now();
        this.sceneStartTime = performance.now();
        this.lastFrameTime = performance.now();
        this.gameFrameCount = 0;
        this.sceneFrameCount = 0;
        this.canvas = canvas;
        this.setScene({ scene });
        requestAnimationFrame(() => this.frame());
    }
    setScene({ scene }) {
        this.componentStore = store(scene)('component');
        this.gameObjectStore = store(scene)('gameObject');
        this.sceneStartTime = performance.now();
        this.gameFrameCount = 0;
    }
    frame() {
        const components = this.componentStore.getAll();
        const gameObjects = this.gameObjectStore.getAll();
        const currentTime = performance.now();
        const e = {
            deltaTime: (currentTime - this.lastFrameTime) / 1000,
            gameFrameCount: this.gameFrameCount,
            sceneFrameCount: this.sceneFrameCount,
            timeSinceSceneLoad: (currentTime - this.sceneStartTime) / 1000,
            timeSinceGameLoad: (currentTime - this.gameStartTime) / 1000
        }


        this.lastFrameTime = performance.now();
        this.gameFrameCount ++;
        this.sceneFrameCount ++;

        for (let gameObject of gameObjects) {
            gameObject.renderer.images = [];
        }
        for (let component of components) {
            if (component.targetObject && component.active == true) {
                component.preUpdate && component.preUpdate(e)
            }
        }
        for (let component of components) {
            if (component.targetObject &&  component.active == true) {
                component.update && component.update(e)
            }
        }
        for (let component of components) {
            if (component.targetObject &&  component.active == true) {
                component.lateUpdate && component.lateUpdate(e)
            }
        }
        // let { input, touch } = this.scene.camera;
        // input.clearInput();
        // touch.clearTouch();
        this.canvas.render();

        requestAnimationFrame(() => this.frame());
    }

}
