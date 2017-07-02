import store from './utils/store';
import GameObject from './base/GameObject';
import Canvas from './base/Canvas';
import Scene from './base/Scene';
import Camera from './base/Camera';
import types from './base/types';
import Component from './base/Component';

const gameObjectStore = store('gameObject');
export default{
    createObject({
            name,
            transform,
            components
        }) {
            const gameObject = new GameObject({
                name,
                transform,
                components
            });
            gameObjectStore.push(gameObject);
            return gameObject;
        },
        distroyObject(gameObject) {
            gameObject.distroy();
            gameObjectStore.remove(gameObject)
        },
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
        },

        Canvas,
        Scene,
        Camera,
        types,
        Component
}
