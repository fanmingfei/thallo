import { Component, findGameObject } from '../../../src/Engine.js';
import Energy from './Energy';
// 继承 Component 并且 export 
// extend Component and export it
export default class Dot extends Component {
    constructor({ targetObject }) {
        super({
            targetObject
        });
        this.touch = null;
    }
    preUpdate(e) {
        if (!this.touch) {
            this.touch = findGameObject({name: 'touch'}).touch;
        }
        if (this.touch.getTouchStart(this.targetObject)) {
            this.targetObject.active = false;
            findGameObject({name: 'circle'}).active = true;
            findGameObject({name: 'energy'}).getComponent(Energy).setEnergy(300)
        }
    }
}
