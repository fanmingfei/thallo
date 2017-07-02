import store from '../utils/store';
export default class Component {
    constructor({
        targetObject
    }) {
        this.targetObject = targetObject;
        this.active = true;
    }
    start() {}
    preUpdate() {}
    update() {}
    lateUpdate() {}
    setActive (flag) {
        this.active = flag;
    }
    distroy() {
        store(targetObject.scene)('component').remove(this);
    }
}