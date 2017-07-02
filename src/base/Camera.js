import {
    isCollsion,
    isPointCollsion
} from '../utils/tools';
import GameObject from './GameObject';
export default class Camera extends GameObject {
    constructor({
        name,
        transform = undefined,
        components = [],
        scene
    }) {
        super({
            name,
            transform,
            components
        });
        this.scene = scene;
    }

    // 获取当前相机可见的gameObject
    getVisibleGameObjects() {
        const visibleGameObject = this.scene.gameObjects.reduce((prev, gameObject) => {
            if (gameObject.active && isCollsion(this, gameObject)) {
                prev.push(gameObject);
            } else {
                return prev;
            }
            return prev;
        }, []);
        return visibleGameObject;
    }

    isGameObjectVisible(gameObject) {
        if (gameObject.active && isCollsion(this, gameObject)) {
            return true;
        } else {
            return false;
        }
    }

    worldToScreen({
        position
    }) {
        const x1y1 = Vector2.minus(this.transform.position, this.transform.anchor);
        return Vector2.minus(position, x1y1);
    }
    screenToWorld({
        position
    }) {
        const x1y1 = Vector2.minus(this.transform.position, this.transform.anchor);
        return Vector2.add(position, x1y1);
    }
}