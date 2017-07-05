import {
    Vector2
} from '../base/types';
export function isCollsion(gameObject1, gameObject2) {
    const transform1 = gameObject1.transform;
    const transform2 = gameObject2.transform;

    const w1 = transform1.rect.width;
    const w2 = transform2.rect.width;
    const h1 = transform1.rect.height;
    const h2 = transform2.rect.height;

    const x1y1 = Vector2.minus(transform1.position, transform1.anchor);
    const x2y2 = Vector2.minus(transform2.position, transform2.anchor);

    const x1 = x1y1.x;
    const x2 = x2y2.x;
    const y1 = x1y1.y;
    const y2 = x2y2.y;

    if (x1 >= x2 && x1 >= x2 + w2) {
        return false;
    } else if (x1 <= x2 && x1 + w1 <= x2) {
        return false;
    } else if (y1 >= y2 && y1 >= y2 + h2) {
        return false;
    } else if (y1 <= y2 && y1 + h1 <= y2) {
        return false;
    }
    return true;

}

export function isPointCollsion(point, gameObject) {
    const x1 = point.x;
    const y1 = point.y;
    const x2 = gameObject.transform.position.x;
    const y2 = gameObject.transform.position.y;
    const w = gameObject.rect.width;
    const h = gameObject.rect.height;

    if (x1 >= x2 && x1 <= x2 + w && y1 >= y2 && y1 <= y2 + h) {
        return true;
    }
    return false;
}

export function isPointInRect (vector2, rect) {
    if (vector2.x >= rect.x && vector2.x <= rect.x + rect.width && vector2.y >= rect.y && vector2.y <= rect.y + rect.height) {
        return true;
    }
    return false;
}
