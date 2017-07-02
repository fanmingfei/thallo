import { Rect } from '../base/types';
import Component from '../base/Component';
export default class Img extends Component {
    construct({
        targetObject,
        url = undefined,
        rect = new Rect();
    }) {
        super({
            targetObject
        });
        this.url = url;
        this.rect = rect;
        this.image = new Image(url);
    }

}
