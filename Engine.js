import Store form '../utils/store.js';
import GameObject from './base/GameObject.js';

const gameObjectStore = Store('gameObject');
export default {
	createObject({name, components}) {
		const gameObject = new GameObject({name, components});
		gameObjectStore.push(gameObject);
	}
	distroyObject(gameObject) {
		gameObject.distroy();
		gameObjectStore.remove()
	}
	find({name}) {
		return store.findAll().find(obj=>obj.name==name);
	}
}