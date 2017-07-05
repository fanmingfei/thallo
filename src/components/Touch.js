import Camera from './Camera';
import Component from '../base/Component';

export default class Touch extends Component {
    constructor({ canvas }) {
        this.canvas = canvas;
        this.touchStartList = new Map();
        this.touchList = new Map();
        this.touchEndList = new Map();
        this.addEventListener();
    }
    getTouchStart(rect) {
        for (let touch of touchStartList) {
            // if (isPointInRect(touch.rect)
        }
    }
    getTouchEnd() {
        if (this.currentFrameUp.indexOf(keyCode) != -1) {
            return true;
        }
        return false;
    }
    setTouchStart(touches) {
        for (let touch of touches) {
            if (this.touchList.has(touch.identifier)) {
                return;
            }
            this.touchList.set(touch.identifier, touch);
            this.touchStartList.set(touch.identifier, touch);
        }
    }
    setTouchEnd(touches) {
        for (let touch of touches) {
            this.touchList.delete(touch.identifier)
            this.touchEndList.set(touch.identifier, touch);
        }
    }
    clearTouch() {
        this.touchStartList.clear();
        this.touchEndList.clear();
    }
    addEventListener () {
        this.canvas.canvas.addEventListener('touchstart', (e)=>{
            this.setTouchStart(e.touches);
        });
        this.canvas.canvas.addEventListener('touchend', (e)=>{
            this.setTouchEnd(e.touches);
        });
        this.canvas.canvas.addEventListener('touchcancel', e=>{
            this.setTouchEnd(e.touches);
        })
    }
}