import { Component, findGameObject } from '../../../src/Engine.js';

// 继承 Component 并且 export 
// extend Component and export it
export default class More extends Component {
    constructor({ targetObject }) {
        super({
            targetObject
        });
    }
    update(e) {
        if (!this.touch) {
            this.touch = findGameObject({name: 'touch'}).touch;
        }
        if (this.touch.getTouchStart(this.targetObject)) {
            alert('就这一页哦')
        }
    }
}
