import { GameObject, Camera, Canvas, Scene, types, components } from '../../src/Engine.js';
import InputManager from './InputManager.js';
const { Img } = components;
const { Vector2, Rect} = types;


const canvas = document.getElementById("canvas");
const canvasObj = new Canvas({ canvas: canvas, width: 400, height: 800 });

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

// 将相机设置给 canvas, canvas将显示这个相机的内容
// Set camera to the canvas, canvas will display the camera view.
canvasObj.setCamera(camera);

// 创建第一个游戏对象
// create the first game object
const firstGameObject = new GameObject({
    name: "firstGameObject",
    transform: {
        rect: new Rect({ x: 0, y: 0, width: 100, height: 100 }),
        position: new Vector2({x:180,y:200}),
        rotation: 45
    },
    components: [
        {
            component: Img,
            arguments: {
                rect: new Rect({
                    x: 0,
                    y: 0,
                    width: 100,
                    height: 100
                }),
                url: 'https://fanmingfei.github.io/thallo/example/first/a.png'
            }
        },
        {
            component: InputManager,
            arguments: {
                dir: -1,
                speed: 50
            }
        }
    ]
});

scene.addGameObjects(firstGameObject);



