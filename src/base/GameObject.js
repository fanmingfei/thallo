import {Transform, Img} from '../components/components';
export default class GameObject {
    construct({
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
        this.img = this.addComponent(Img)();
        for (let component of this.components) {
            this.addComponent(component)();
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
            const index = this.components.push(new Component({
                targetObject: this,
                ...obj
            }));
            return this.components[index];
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
    setScene(scene) {
        this.scene = scene;
    }
    distroy() {
        for (let component of this.components) {
            component.distory();
        }
        this.active = false;
    }
}