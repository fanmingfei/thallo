import { Transform, Renderer } from '../components/components';
import store from '../utils/store';
export default class GameObject {
    constructor({
        name,
        transform = undefined,
        components = []
    }) {
        this.name = name;
        this.childs = [];
        this.parent = undefined;
        this.components = [];
        this.active = true;
        this.scene = undefined;
        this.transform = this.addComponent(Transform)(transform);
        this.renderer = this.addComponent(Renderer)();
        for (let component of components) {
            this.addComponent(component.component)(component.arguments);
        }
    }
    find({
        name
    }) {
        let obj = this.childs.find(obj => obj.name == name);
        if (!obj) {
            for (let child of this.childs) {
                obj = child.find({
                    name
                })
                if (obj) break;
            }
        }
        return obj;

    }
    addComponent(Component) {
        return (obj = {}) => {
            const arg = {
                targetObject: this,
                ...obj
            };
            const component = new Component(arg);
            if (this.componentsStore) {
                this.componentsStore.push(component);
            }
            this.components.push(component);
            component.start();
            return component;
        }
    }
    removeComponent(Component) {
        const index = this.components.findIndex(c => c instanceof Component);
        (index !== -1) && this.component.splice(index, 1);
    }
    getComponent(Component) {
        return this.components.find(c => c instanceof Component);
    }
    setActive(flag) {
        this.active = flag;
    }
    setScene({ scene }) {
        this.scene = scene;
        this.componentsStore = store(scene)('component');
        this.componentsStore.push(...this.components);
    }
    distroy() {
        for (let component of this.components) {
            component.distory();
        }
        this.active = false;
    }
}
