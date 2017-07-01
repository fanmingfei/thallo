import Transform from '../components/Transform';
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
        this.transform = this.addComponent(Transform)(transform);
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
    addComponent(component) {
        return (obj = {}) => {
            const index = this.components.push(new component({
                targetObject: this,
                ...obj
            }));
            return this.components[index];
        }
    }
    removeComponent(component) {
        const index = this.components.findIndex(c => c instanceof component);
        (index !== -1) && this.component.splice(index, 1);
    }
    getComponent(component) {
        return this.components.find(c => c instanceof component);
    }
    setActive(flag) {
        this.active = flag;
    }
    distroy() {
        for (let component of this.components) {
            component.distory();
        }
        this.active = false;
    }
}