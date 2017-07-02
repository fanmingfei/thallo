import Component form '../base/Component';
import {
    Vector2
} from '../base/types';
export default class Transform extends Component {
    constructor({
        targetObject,
        rect,
        position,
        anchor
    }) {
        super({
            targetObject
        });
        this.rect = rect;
        this.position = position;
        this.anchor = anchor;
    }
}