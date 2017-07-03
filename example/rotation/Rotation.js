import { Component, types, components } from '../../src/Engine.js';

// 取出自己想要的类
// fetch needing class.
// const { Component, types: { Vector2 } } = Engine;
const { Vector2 } = types;

const { Img } = components;
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
        console.log(this.targetObject.transform.rotation, e.deltaTime, this.speed, this.dir)
        this.targetObject.transform.rotation = this.targetObject.transform.rotation  + (e.deltaTime * this.speed * this.dir);
    }
}
