import Component form '../base/Component';
import {
	Vector2
} from '../base/types';
export default class Transform extends Component {
	constructor({
		targetObject,
		rect: {
			width,
			height
		} = {
			x: 0,
			y: 0
		},
		position: {
			x,
			y
		} = {
			x: 0,
			y: 0
		},
		anchor: {
			x,
			y
		} = {
			x: 0,
			y: 0
		}
	}) {
		super({
			targetObject
		});
		this.rect = rect;
		this.position = new Vector2(position);
		this.anchor = new Vector2(anchor);
	}
}