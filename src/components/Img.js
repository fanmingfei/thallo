import { Rect } from '../base/types';
import Component from '../base/Component';
export default class Img extends Component {
    constructor({
        targetObject,
    }) {
        super({
            targetObject
        });
        this.rect = new Rect();
        this.image = new Image();
    }
    setRect({ rect }) {
        this.rect = rect;
    }
    setUrl({ url }) {
        this.url = url;
        this.image = new Image();
        this.image.src=url;
    }

}
