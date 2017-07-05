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
        let store = {
            color: color,
            font: font,
            text: text,
            textAlign: textAlign,
            textBaseline: textBaseline,
            position: position,
            rect: rect
        }

        this.needRender = false;

        for (let name in store) {
            Object.defineProperty(this, name, {
                get() {
                    return store[name];
                },
                set(value) {
                    store[name] = value;
                    this.needRender = true;
                }
            })
        }

        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.updateText();
    }
    update() {
        if (this.needRender) {
            this.updateText();
        } else {
            this.targetObject.renderer.pushImages(this.renderImg);
        }
    }
    updateText() {
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
        this.renderImg = {
            image: img,
            rect: new Rect({x: 0, y: 0, width: this.canvas.width, height: this.canvas.height}),
        };
        this.targetObject.renderer.pushImages(this.renderImg);
        this.needRender = false;
    }
}
