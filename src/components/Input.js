

import Component from '../base/Component';

export default class Input extends Component {
    constructor ({targetObject, canvas}) {
        super({targetObject});
        this.canvas = canvas;
        this.currentKeyList = [];
        this.currentFrameDown = [];
        this.currentFrameUp = [];
        this.addEventListener();
    }
    getKeyDown(keyCode) {
        if (this.currentFrameDown.indexOf(keyCode) != -1) {
            return true;
        }
        return false;
    }
    getKeyUp(keyCode) {
        if (this.currentFrameUp.indexOf(keyCode) != -1) {
            return true;
        }
        return false;
    }
    getKey(keyCode) {
        keyCode = +keyCode;
        if (this.currentKeyList.indexOf(keyCode) != -1 &&
            this.currentFrameDown.indexOf(keyCode) == -1 &&
            this.currentFrameUp.indexOf(keyCode) == -1) {
            return true;
        }
        return false;
    }
    setKeyDown(keyCode) {
        if (this.currentKeyList.indexOf(keyCode) != -1) {
            return;
        }
        this.currentKeyList.push(keyCode);
        this.currentFrameDown.push(keyCode);
    }
    setKeyUp(keyCode) {
        const index = this.currentKeyList.findIndex(c => c == keyCode);
        if (index != -1) {
            this.currentKeyList.splice(index, 1);
        }
        this.currentFrameUp.push(keyCode);
    }
    lateUpdate(){
        this.clearInput();
    }
    clearInput() {
        this.currentFrameDown = [];
        this.currentFrameUp = [];
    }
    addEventListener() {
        document.addEventListener('keydown', e => {
            this.setKeyDown(e.keyCode);
        })
        document.addEventListener('keyup', e => {
            this.setKeyUp(e.keyCode);
        })
    }

}