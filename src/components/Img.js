import { Rect } from '../base/types';
import Component from '../base/Component';
export default class Img extends Component {
    constructor({
        targetObject,
        rect = new Rect(),
        url = '',
        rotation = 0
    }) {
        super({
            targetObject,
        })
        var rect;
        var image;
        Object.defineProperties(this, {
            rect: {
                set(value) {
                    rect = value;
                    this.image.rect = rect;
                },
                get() {
                    return rect;
                }
            },
            image: {
                set(value) {
                    image = value;
                },
                get() {
                    return image;
                }
            }
        })
        this.setUrl({ url });
        this.rect = rect;
    }
    setUrl({ url }) {
        this.url = url;
        this.image = new Image();
        this.image.src = url;
        this.targetObject.renderer.image = this.image;
        this.targetObject.renderer.rect = this.rect;
    }
}
