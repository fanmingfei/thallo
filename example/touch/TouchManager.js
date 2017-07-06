import { GameObject, Component, keyCode, Input, types } from '../../src/Engine.js';

import store from '../../src/utils/store';

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
        const gameObjects = store(this.targetObject.scene)('gameObject').getAll();
        this.touch = gameObjects.find(x=>x.name=='touch').touch;
        if (this.touch.getTouchStart(this.targetObject)) {
            // if (this.rotate) {
            //     this.rotate = false;
            // } else {
                this.rotate = true;
            // }
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