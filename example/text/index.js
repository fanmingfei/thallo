import { GameObject, Camera, Canvas, Scene, types, components } from '../../src/Engine.js';
const { Text } = components;
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
        position: new Vector2({ x: 0, y: 0 }),
        anchor: new Vector2({ x: 0, y: 0 }) // !!! default is the middle of rect, 默认锚点在相机的中心点
    },
    scene // need a scene to show, 需要一个场景，相机将会显示这个场景的内容
});

// 将相机设置给 canvas, canvas将显示这个相机的内容
// Set camera to the canvas, canvas will display the camera view.
canvasObj.setCamera(camera);

// 创建游戏对象
// create the first game object
const getRandom = (min = 0,max = 10) => Math.floor(min + Math.random() * (max - min + 1));
const texts = ['工作使我快乐','我热爱工作','你看他是不是傻','快和牛魔王一起出来看上帝','b(￣▽￣)d','快来用这个游戏引擎','这个没有物理引擎？','好厉害！', '这是个无聊的DEMO'];
let objects = texts.map(text=>{
    return new GameObject({
        name: "text",
        transform: {
            rect: new Rect({ x: 0, y: 0, width: 400, height: 800 }),
            anchor: new Rect({x:0, y: 0})
        },
        components: [
            {
                component: Text,
                arguments: {
                    text: text,
                    font: getRandom(0,30)+'px sans-serif',
                    color: `rgb(${getRandom(0,255)},${getRandom(0,255)},${getRandom(0,255)})`,
                    // color: 'red',
                    position: new Vector2({x: getRandom(0, 200), y: getRandom(0, 750)})
                }
            }
        ]
    })
});




scene.addGameObjects(...objects);



