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

    const x2y2 = Vector2.minus(gameObject.transform.position, gameObject.transform.anchor);
    const x2 = x2y2.x;
    const y2 = x2y2.y;
    const w = gameObject.transform.rect.width;
    const h = gameObject.transform.rect.height;

    if (x1 >= x2 && x1 <= x2 + w && y1 >= y2 && y1 <= y2 + h) {
        return true;
    }
    return false;
}

export function isPointRectCollsion (point, rect) {
    const x1 = point.x;
    const y1 = point.y;
    const x2 = rect.x;
    const y2 = rect.y;
    const w = rect.width;
    const h = rect.height;

    if (x1 >= x2 && x1 <= x2 + w && y1 >= y2 && y1 <= y2 + h) {
        return true;
    }
    return false;
}
