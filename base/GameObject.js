export class GameObject {
    construct({
        name,
        components
    }) {
        this.name = name;
        this.childs = [];
        this.parent = undefined;
        this.components = [];
        this.active = true;
        for (let component of this.components) {
            this.addComponent(component);
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
        this.components.push(new component({
            targetObject: this
        }));
    }
    removeComponent(component) {
        const index = this.components.findIndex(c => c.__proto__ == component.prototype);
        if (index > -1) {
            this.component.splice(index, 1);
        }
    }
    getComponent(component) {
        return this.components.find(c => c.__proto__ == component.prototype);
    }
    setActive(flag) {
        this.active = false;
    }
    distory() {
        for (let component of this.components) {
            component.distory();
        }
        this.active = false;
    }
}