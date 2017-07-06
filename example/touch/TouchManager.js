import { GameObject, Component, keyCode, Input, types, findGameObject } from '../../src/Engine.js';

// 取出自己想要的类
// fetch needing class.
// const { Component, types: { Vector2 } } = Engine;
const { Vector2 } = types;

// 继承 Component 并且 export 
// extend Component and export it
export default class TouchManager extends Component {
    constructor({ targetObject, dir, speed }) {
        super({
            targetObject
        });
        this.rotate = false;
    }
    preUpdate() {
        this.touch = findGameObject({name: 'touch'}).touch;
        if (this.touch.getTouchStart(this.targetObject)) {
                this.rotate = true;
        }
        if (this.touch.getTouchEnd(this.targetObject)) {
            this.rotate = false;
        }
    }
    update(){
        if (this.rotate) {
            this.targetObject.transform.rotation = this.targetObject.transform.rotation += 10;
        }
    }
}