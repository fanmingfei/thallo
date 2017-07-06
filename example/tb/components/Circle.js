import { Component } from '../../../src/Engine.js';

// 继承 Component 并且 export 
// extend Component and export it
export default class Circle extends Component {
    constructor({ targetObject }) {
        super({
            targetObject
        });
        this.targetObject.active = false
    }
    update(e) {
        if (this.targetObject.active)
            this.targetObject.transform.rotation = this.targetObject.transform.rotation + 4;
    }
}
