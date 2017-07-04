import { Component, input, keyCode, types } from '../../src/Engine.js';
// 取出自己想要的类
// fetch needing class.
// const { Component, types: { Vector2 } } = Engine;
const { Vector2 } = types;

// 继承 Component 并且 export 
// extend Component and export it
export default class InputManager extends Component {
    constructor({ targetObject, dir, speed }) {
        super({
            targetObject
        });
        this.speed = 50;
    }
    update(e) {
        const conditions = {
            [keyCode.W]: new Vector2({x: 0, y: -this.speed * e.deltaTime}),
            [keyCode.S]: new Vector2({x: 0, y: this.speed * e.deltaTime}),
            [keyCode.A]: new Vector2({x: -this.speed * e.deltaTime, y: 0}),
            [keyCode.D]: new Vector2({x: this.speed * e.deltaTime, y: 0})
        };
        for (let condition in conditions) {
            if (input.getKey(condition)) {
                this.move(conditions[condition]);
            }
        }

        if (input.getKeyDown(keyCode.J)) {
            this.targetObject.transform.rotation = 45 + this.targetObject.transform.rotation;
        }
        if (input.getKeyUp(keyCode.J)) {
            this.targetObject.transform.rotation = 45 + this.targetObject.transform.rotation;
        }
    }
    move(direction){
        const position = this.targetObject.transform.position;
        this.targetObject.transform.position = Vector2.add(position, direction);
    }
}
