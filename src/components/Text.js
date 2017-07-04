import { Rect, Vector2 } from '../base/types';
import Component from '../base/Component';
export default class Text extends Component {
    constructor({
        targetObject,
        text = 'text',
        font = '12px sans-serif',
        color = '#000',
        textAlign = 'start',
        textBaseline = 'hanging',
        position = new Vector2(),
        rect = targetObject.transform.rect
    }) {
        super({
            targetObject
        });

        this.color = color;
        this.font = font;
        this.text = text;
        this.textAlign = textAlign;
        this.textBaseline = textBaseline;
        this.position = position;
        this.rect = rect;
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
    }
    update() {
        this.canvas.width = this.rect.width;
        this.canvas.height = this.rect.height;
        this.ctx.fillStyle = this.color;
        this.ctx.font = this.font;
        this.ctx.textAlign = this.textAlign;
        this.ctx.textBaseline = this.textBaseline;
        this.ctx.fillText(this.text, this.position.x, this.position.y);
        const base64 = this.canvas.toDataURL('image/png');
        const img = new Image();
        img.src = base64;
        this.targetObject.renderer.pushImages({
            image: img,
            rect: new Rect({x: 0, y: 0, width: this.canvas.width, height: this.canvas.height})
        })
    }
}
