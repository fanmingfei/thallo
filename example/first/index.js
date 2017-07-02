import Engine from '../../src/Engine.js';
import Move from './Move.js';
const { GameObject, Camera, Canvas, Scene, types: { Vector2, Rect } } = Engine;
const canvas = document.getElementById("canvas");
const canvasObj = new Canvas({ canvas: canvas, width: 800, height: 400 });

// 创建一个场景
// Create a scene
const scene = new Scene({ width: 2000, height: 2000 });

// 创建一个 相机
// Create a camera
const camera = new Camera({
    name: "camera",
    transform: {
        rect: new Rect({ x: 0, y: 0, width: 800, height: 400 }),
        position: new Vector2({ x: 400, y: 200 }),
        anchor: new Vector2({ x: 400, y: 200 })
    },
    scene
});

// 将相机设置给 canvas, canvas将显示这个相机的内容
// Set camera to the canvas, canvas will display the camera view.
canvasObj.setCamera(camera);

// 创建第一个游戏对象
// create the first game object
const firstGameObject = new GameObject({
    name: "firstGameObject",
    transform: {
        rect: new Rect({ x: 0, y: 0, width: 30, height: 30 }),
        position: new Vector2({ x: 400, y: 200 }),
        anchor: new Vector2({ x: 200, y: 100 }),
    }
});

// 设置这个对象的 img 宽高 和 位置，img 是 gameObject自带的组件
// Set the game object img's width height, and the img's {x,y} on object, img is the game object default component.
firstGameObject.img.setRect({
    rect: new Rect({
        x: 0,
        y: 0,
        width: 30,
        height: 30
    })
});

// 设置图片的 url
// set img with url
firstGameObject.img.setUrl({ url: 'https://fanmingfei.github.io/thallo/example/first/a.png' });

// 给游戏对象添加新的组件，第二个参数是要给组件传递到参数，但是我们写的 Move 组件不需要参数
// add new component to game object, the twice argument is the component needing, but the Move component isn't need argument.
firstGameObject.addComponent(Move)();

// 将游戏对象添加到场景，当相机能看到对象的时候，对象将会显示在canvas上
// add the game object to scene, when the camera see the game object, the object will show on the canvas.
scene.addGameObject(firstGameObject);

