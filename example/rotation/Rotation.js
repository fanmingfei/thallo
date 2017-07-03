import { Component } from '../../src/Engine.js';

// 继承 Component 并且 export 
// extend Component and export it
export default class Move extends Component {
    constructor({ targetObject, dir, speed }) {
        super({
            targetObject
        });
        this.dir = dir;
        this.speed = speed;
    }
    update(e) {
        this.targetObject.transform.rotation = this.targetObject.transform.rotation  + (e.deltaTime * this.speed * this.dir);
    }
}
