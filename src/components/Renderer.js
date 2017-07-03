import { Rect } from '../base/types';
import Component from '../base/Component';
export default class Renderer extends Component {
    constructor({
        targetObject,
        rect = new Rect(),
        image = new Image()
    }) {
        super({
            targetObject,
        })
        this.rect = rect;
        this.image = image;
    }
}
