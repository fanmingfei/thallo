import {
	isCollsion
} from '../utils/tools';
export default class Camera extends GameObject {
	constructor({
		scene,
		transform
	}) {
		this.scene = scene;
	}
	// 获取当前相机可见的gameObject
	getVisibleGameObject() {
		const visibleGameObject = this.scene.gameObjects.reduce((prev, curr) => {
			if (gameObject.active && isCollsion(this, gameObject)) {
				prev.push(gameObject);
			} else {
				return prev;
			}
			return prev;
		}, []);

	}

}