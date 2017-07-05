import { Component, types } from '../../src/Engine.js';
// 取出自己想要的类
// fetch needing class.
// const { Component, types: { Vector2 } } = Engine;
const { Vector2 } = types;
// 继承 Component 并且 export 
// extend Component and export it
export default class Move extends Component {
    constructor({
        targetObject,
        dir = 1
    }) {
        super({
            targetObject,
        });
        this.dir = dir;
    }
    update(e) {
        // 随着时间做圆周运动
        // Do circle active with time.
        console.log(123)
        const r = 100;
        const x = r * Math.sin(0.5 * this.dir * Math.PI * e.timeSinceSceneLoad) + 120,
            y =  r * Math.cos(0.5 * this.dir * Math.PI * e.timeSinceSceneLoad) + 150;
        // 设置位置
        // set position
        this.targetObject.transform.position = new Vector2({ x: x, y: y });
    }
}
