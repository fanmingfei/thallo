import Engine from '../../src/Engine.js';
import Move from './Move.js';
const { GameObject, Camera, Canvas, Scene, types: { Vector2, Rect } } = Engine;
const canvas = document.getElementById("canvas");
const canvasObj = new Canvas({ canvas: canvas, width: 800, height: 400 });
// const a = new Image();
// a.src = "https://www.baidu.com/img/bd_logo1.png";
// a.onload = function () {
const scene = new Scene({ width: 2000, height: 2000 });
const camera = new Camera({
    name: "camera",
    transform: {
        rect: new Rect({ x: 0, y: 0, width: 800, height: 400 }),
        position: new Vector2({ x: 400, y: 200 }),
        anchor: new Vector2({ x: 400, y: 200 })
    },
    scene
});
canvasObj.setCamera(camera);
const firstGameObject = new GameObject({
    name: "firstGameObject",
    transform: {
        rect: new Rect({ x: 0, y: 0, width: 30, height: 30 }),
        position: new Vector2({ x: 400, y: 200 }),
        anchor: new Vector2({ x: 200, y: 100 }),
    }
});
firstGameObject.img.setRect({
    rect: new Rect({
        x: 0,
        y: 0,
        width: 30,
        height: 30
    })
});
// firstGameObject.img.setUrl({ url: 'https://www.baidu.com/img/bd_logo1.png' });
firstGameObject.img.setUrl({ url: '/example/first/a.png' });
firstGameObject.addComponent(Move)();
scene.addGameObject(firstGameObject);

console.log(camera.transform)
console.log(firstGameObject.transform)

// }
