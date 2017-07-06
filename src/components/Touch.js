import { Vector2 } from '../base/types';
import {isPointCollsion} from '../utils/tools';
import Component from '../base/Component';

export default class Touch extends Component {
    constructor({ targetObject, canvas }) {
        super({ targetObject })
        this.canvas = canvas;
        this.touchStartList = new Map();
        this.touchList = new Map();
        this.touchEndList = new Map();
        this.addEventListener();
    }
    getTouchStart(gameObject) {
        if (!gameObject) {
            return this.touchStartList.size > 0;
        }

        for (let touch of this.touchStartList.values()) {
            let coll = isPointCollsion(new Vector2({
                x: touch.pageX - this.canvas.canvas.offsetLeft,
                y: touch.pageY - this.canvas.canvas.offsetTop 
            }), gameObject);
            if (coll) {
                return true
            };
        }
        return false;
    }
    getTouchEnd(gameObject) {
        for (let touch of this.touchEndList.values()) {
            let coll = isPointCollsion(new Vector2({
                x: touch.pageX - this.canvas.canvas.offsetLeft,
                y: touch.pageY - this.canvas.canvas.offsetTop 
            }), gameObject);
            if (coll) {
                return true
            };
        }
        return false;
    }
    setTouchStart(touches) {
        for (let touch of touches) {

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
    lateUpdate() {
        this.clearTouch();
    }
    clearTouch() {
        this.touchStartList.clear();
        this.touchEndList.clear();
    }
    addEventListener () {
        this.canvas.canvas.addEventListener('touchstart', (e)=>{
            e.preventDefault();
            e.stopPropagation();
            this.setTouchStart(e.touches);
        });
        this.canvas.canvas.addEventListener('touchend', (e)=>{
            this.setTouchEnd(e.changedTouches);
        });
        this.canvas.canvas.addEventListener('touchcancel', (e)=>{
            this.setTouchEnd(e.touches);
        })
    }
}