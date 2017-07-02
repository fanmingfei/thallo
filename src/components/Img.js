import Component from '../base/Component';
export default class Img extends Component {
	construct({
		targetObject,
		url,
		rect
	}) {
		super({
			targetObject
		});
		this.url = url;
		this.rect = rect;
	}
}