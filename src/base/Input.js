const keyCode = {
    BackSpace: 8,
    Tab: 9,
    Clear: 12,
    Enter: 13,
    Shift_L: 16,
    Control_L: 17,
    Alt_L: 18,
    Pause: 19,
    Caps_Lock: 20,
    Escape: 27,
    Space: 32,
    Prior: 33,
    Next: 34,
    End: 35,
    Home: 36,
    Left: 37,
    Up: 38,
    Right: 39,
    Down: 40,
    Select: 41,
    Print: 42,
    Execute: 43,
    Insert: 45,
    Delete: 46,
    Help: 47,
    Alpha_0: 48,
    Alpha_1: 49,
    Alpha_2: 50,
    Alpha_3: 51,
    Alpha_4: 52,
    Alpha_5: 53,
    Alpha_6: 54,
    Alpha_7: 55,
    Alpha_8: 56,
    Alpha_9: 57,
    A: 65,
    B: 66,
    C: 67,
    D: 68,
    E: 69,
    F: 70,
    G: 71,
    H: 72,
    I: 73,
    J: 74,
    K: 75,
    L: 76,
    M: 77,
    N: 78,
    O: 79,
    P: 80,
    Q: 81,
    R: 82,
    S: 83,
    T: 84,
    U: 85,
    V: 86,
    W: 87,
    X: 88,
    Y: 89,
    Z: 90,
    KP_0: 96,
    KP_1: 97,
    KP_2: 98,
    KP_3: 99,
    KP_4: 100,
    KP_5: 101,
    KP_6: 102,
    KP_7: 103,
    KP_8: 104,
    KP_9: 105,
    KP_Multiply: 106,
    KP_Add: 107,
    KP_Separator: 108,
    KP_Subtract: 109,
    KP_Decimal: 110,
    KP_Divide: 111,
    F1: 112,
    F2: 113,
    F3: 114,
    F4: 115,
    F5: 116,
    F6: 117,
    F7: 118,
    F8: 119,
    F9: 120,
    F10: 121,
    F11: 122,
    F12: 123,
    F13: 124,
    F14: 125,
    F15: 126,
    F16: 127,
    F17: 128,
    F18: 129,
    F19: 130,
    F20: 131,
    F21: 132,
    F22: 133,
    F23: 134,
    F24: 135,
    Num_Lock: 136,
    Scroll_Lock: 137
}

class Input {
    constructor() {
        this.currentKeyList = [];
        this.currentFrameDown = [];
        this.currentFrameUp = [];
        this.createInputEvent();
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
    clearUpDown() {
        this.currentFrameDown = [];
        this.currentFrameUp = [];
    }
    createInputEvent() {
        document.addEventListener('keydown', e => {
            this.setKeyDown(e.keyCode);
        })
        document.addEventListener('keyup', e => {
            this.setKeyUp(e.keyCode);
        })
    }

}


export default new Input();
export {
    keyCode
};