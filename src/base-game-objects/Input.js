import GameObject from '../base/GameObject';
import Input from '../components/Input';

export default class InputObject extends GameObject {
    constructor({canvas}) {
        super({
            name: 'input',
            conponents: [{
                conponent: Input,
                arguments: { canvas }
            }]
        })
    }
}