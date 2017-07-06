import {
    Component,
    components,
    types
} from '../../../src/Engine.js';
const {Rect} = types;
const {Text} = components;
export default class Energy extends Component {
    constructor({targetObject}) {
        super({targetObject});
        this.num = 0;
        this.targetNum = 0;
    }
    setEnergy(num) {
        this.targetNum = num;
    }
    update() {
        if (this.num < this.targetNum)  {
            this.num += 5;
            this.targetObject.getComponent(Text).text = this.num;
        }
    }
}