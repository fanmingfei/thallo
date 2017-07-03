export default class Vector2 {
    constructor({
        x = 0,
        y = 0
    } = {x:0, y:0}) {
        this.x = x;
        this.y = y;
    }
    static minus(...objs) {
        return objs.reduce((prev, curr) => {
            return new Vector2({
                x: prev.x - curr.x,
                y: prev.y - curr.y
            })
        });
    }
    static add(...objs) {
        return objs.reduce((prev, curr) => {
            return new Vector2({
                x: prev.x + curr.x,
                y: prev.y + curr.y
            })
        }, new Vector2({x:0,y:0}));
    }
}