import store from '../utils/store';

export default class Frame {
    constructor({ scene }) {
        this.scene = scene;
        this.componentStore = store(scene)('component');
        this.sceneStartTime = performance.now()
        this.lastFrameTime = performance.now();
        this.frameCount = 0;
        requestAnimationFrame(() => this.frame());
    }
    frame() {
        const components = this.componentStore.getAll();
        const currentTime = performance.now();
        const e = {
            deltaTime: (currentTime - this.lastFrameTime) / 1000,
            frameCount: this.frameCount,
            time: (currentTime - this.sceneStartTime) / 1000
        }

        this.lastFrameTime = performance.now();
        this.frameCount++;
        for (let component of components) {
            if (component.active == true) {
                component.preUpdate && component.preUpdate(e)
            }
        }
        for (let component of components) {
            if (component.active == true) {
                component.update && component.update(e)
            }
        }
        for (let component of components) {
            if (component.active == true) {
                component.lateUpdate && component.lateUpdate(e)
            }
        }
        requestAnimationFrame(() => this.frame());
    }

}
