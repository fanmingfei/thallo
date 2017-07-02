import Store form '../utils/store.js';
import GameObject from './base/GameObject.js';

const gameObjectStore = Store('gameObject');
export default {
    createObject({
        name,
        components
    }) {
        const gameObject = new GameObject({
            name,
            components
        });
        gameObjectStore.push(gameObject);
    }
    distroyObject(gameObject) {
        gameObject.distroy();
        gameObjectStore.remove(gameObject)
    }
    find({
        name
    }) {
        let gameObject;
        const all = store.findAll();
        for (let obj of all) {
            if (obj.name == name) {
                gameObject = obj;
                break;
            } else {
                gameObject = obj.find({
                    name
                });
                if (gameObject) {
                    break;
                }
            }
        }
        return gameObject;
    }
}