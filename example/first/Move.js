import Engine from '../../src/Engine.js';
const { GameObject, Camera, Canvas, Component, Scene, types: { Vector2, Rect } } = Engine;
export default class Move extends Component {
    constructor({
        targetObject,
    }) {
        super({
            targetObject
        });
    }
    update(e) {
        const r = 100;
        const x = r * Math.sin(0.5 * Math.PI * e.time) + 600,
            y = -r * Math.cos(0.5 * Math.PI * e.time) + 200;

        this.targetObject.transform.position = new Vector2({ x: x, y: y });
    }
}
