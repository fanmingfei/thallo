import {
    isCollsion,
    isPointCollsion
} from '../utils/tools';
export default class Camera extends GameObject {
    constructor({
        name,
        scene,
        transform
    }) {
        super({
            name,
            transform
        });
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