import { Rect } from '../base/types';
import Component from '../base/Component';
export default class Renderer extends Component {
    constructor({
        targetObject
    }) {
        super({
            targetObject,
        })
        this.images = [];
    }
    pushImages(...args){
        for(let img of args) {
            img.crossOrigin = 'anonymous';
            this.images.push(img);
        }
    }
}
