import { Thallo, GameObject, Camera, Canvas, Scene, types, components } from '../../src/Engine.js';
import Move from './Move.js';
const { Img } = components;
const { Vector2, Rect} = types;


const canvas = document.getElementById("canvas");

// 创建一个场景
// Create a scene
const scene = new Scene({ width: 400, height: 800 });

// 创建一个 相机
// Create a camera
const camera = new Camera({
    name: "camera",
    transform: {
        rect: new Rect({ x: 0, y: 0, width: 400, height: 800 }),
        position: new Vector2({ x: 200, y: 400 }),
        // anchor: new Vector2({ x: 400, y: 200 }) // !!! default is the middle of rect, 默认锚点在相机的中心点
    },
    scene // need a scene to show, 需要一个场景，相机将会显示这个场景的内容
});

// 创建将相机设置给 canvas, canvas将显示这个相机的内容
// Create canvas and set camera to the canvas, canvas will display the camera view.
const canvasObj = new Canvas({ canvas: canvas, width: 400, height: 800 });

// 创建第一个游戏对象
// create the first game object
const firstGameObject = createGameObject({
    name: "firstGameObject",
    transform: {
        rect: new Rect({ x: 0, y: 0, width: 30, height: 30 }),
    },
    components: [
        {
            component: Img,
            arguments: {
                rect: new Rect({
                    x: 0,
                    y: 0,
                    width: 30,
                    height: 30
                }),
                url: 'https://fanmingfei.github.io/thallo/example/first/a.png'
            }
        },
        {
            component: Move,
            arguments: {dir: -1}
        }
    ]
});

scene.addGameObjects(firstGameObject)
// 将游戏对象添加到场景，当相机能看到对象的时候，对象将会显示在canvas上
// add the game object to scene, when the camera see the game object, the object will show on the canvas.

// 创建一个场景
// Create a scene
const scene2 = new Scene({ width: 400, height: 800 });
// // 创建一个 相机
// // Create a camera
const camera2 = new Camera({
    name: "camera2",
    transform: {
        rect: new Rect({ x: 0, y: 0, width: 400, height: 800 }),
        position: new Vector2({ x: 200, y: 400 }),
        // anchor: new Vector2({ x: 400, y: 200 }) // !!! default is the middle of rect, 默认锚点在相机的中心点
    },
    scene: scene2 // need a scene to show, 需要一个场景，相机将会显示这个场景的内容
});

// // 创建第一个游戏对象
// // create the first game object
const firstGameObject2 = createGameObject({
    name: "firstGameObject",
    transform: {
        rect: new Rect({ x: 0, y: 0, width: 30, height: 30 }),
    },
    components: [
        {
            component: Img,
            arguments: {
                rect: new Rect({
                    x: 0,
                    y: 0,
                    width: 30,
                    height: 30
                }),
                url: 'https://fanmingfei.github.io/thallo/example/first/a.png'
            }
        },
        {
            component: Move,
            arguments: {dir:1}
        }
    ]
});
const thallo = new Thallo({canvas:canvasObj, scene});

// setTimeout(()=>thallo.loadScene({scene:scene2}),3000);
// setTimeout(()=>thallo.loadScene({scene:scene}),7000);
scene2.addGameObjects(firstGameObject2);


// 也可以使用以下方式添加组件
// You can add Component use following way.

// gameObject.addComponent(Component)(arguments);

// 给对象添加一个图片，图片需要设置width 和 height
// mount a Img component, need pass a Rect with width and height

/*
firstGameObject.addComponent(Img)({
    rect: new Rect({
        x: 0,
        y: 0,
        width: 30,
        height: 30
    }),
    url: 'https://fanmingfei.github.io/thallo/example/first/a.png'
});
*/


// 给游戏对象添加新的组件，第二个参数是要给组件传递到参数，但是我们写的 Move 组件不需要参数
// add new component to game object, the twice argument is the component needing, but the Move component don't need argument.

// firstGameObject.addComponent(Move)();


