import GameObject from '../base/GameObject';
import Touch from '../components/Touch';

export default class TouchObject extends GameObject {
    constructor({canvas}) {
        super({
            name: 'touch',
            conponents: [{
                conponent: Touch,
                arguments: { canvas }
            }]
        })
    }
}