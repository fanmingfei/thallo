import {
    GameObject,
    Camera,
    Canvas,
    Scene,
    types,
    Touch,
    components
} from '../../src/Engine';
import Fish from './components/Fish';
import Energy from './components/Energy';
import Circle from './components/Circle';
import Dot from './components/Dot';
import More from './components/More';


const {
    Img,
    Text
} = components;
const {
    Vector2,
    Rect
} = types;


const width = window.innerWidth;
const height = window.innerHeight;

const canvas = document.getElementById("canvas");
canvas.width = width;
canvas.height = height;
// 创建一个场景
// Create a scene
const scene = new Scene({
    width: width,
    height: height
});

// 创建一个 相机
// Create a camera
const camera = new Camera({
    name: "camera",
    transform: {
        rect: new Rect({
            x: 0,
            y: 0,
            width: width,
            height: height
        }),
        position: new Vector2({
            x: width / 2,
            y: height / 2
        }),
        // anchor: new Vector2({ x: width, y: 200 }) // !!! default is the middle of rect, 默认锚点在相机的中心点
    },
    scene // need a scene to show, 需要一个场景，相机将会显示这个场景的内容
});

// 创建将相机设置给 canvas, canvas将显示这个相机的内容
// Create canvas and set camera to the canvas, canvas will display the camera view.
const canvasObj = new Canvas({
    canvas: canvas,
    width: width,
    height: height,
    camera
});


const touch = new Touch({canvas: canvasObj});


// 创建一个背景
const background = new GameObject({
    name: 'background',
    transform: {
        position: new Vector2({
            x: 0,
            y: 0
        }),
        rect: new Rect({
            x: 0,
            y: 0,
            width: width,
            height: height
        }),
        anchor: new Vector2({
            x: 0,
            y: 0
        }),
    },
    components: [{
        component: Img,
        arguments: {
            rect: new Rect({
                x: 0,
                y: 0,
                width: width,
                height: height
            }),
            url: 'https://gw.alicdn.com/mt/TB1JGScSXXXXXcyXXXXXXXXXXXX-750-1334.jpg?v=1499321313869'
        }
    }]
})

const fish = new GameObject({
    name: 'fish',
    transform: {
        position: new Vector2({
            x: 0,
            y: height * 0.584
        }),
        rect: new Rect({
            x: 0,
            y: 0,
            width: width,
            height: height
        }),
        anchor: new Vector2({
            x: 0,
            y: 0,

        })
    },
    components: [{
        component: Fish,
        arguments: {
            width: width,
            height: height
        }
    }]
})

const energy = new GameObject({
    name: 'energy',
    transform: {
        position: new Vector2({
            x: width / 2,
            y: height * 0.2333
        }),
        rect: new Rect({
            x: 0,
            y: 0,
            width: width,
            height: 60
        }),
        // anchor: new Vector2({x:0,y:0})
    },
    components: [{
        component: Text,
        arguments: {
            text: '0',
            font: '50px futura',
            color: '#ddd',
            textAlign: 'center',
            position: new Vector2({
                x: width / 2,
                y: 0
            })
        }
    }, {
        component: Energy
    }]
})

const canUse = new GameObject({
    name: 'canUse',
    transform: {
        position: new Vector2({
            x: width / 2,
            y: height * 0.16
        }),
        rect: new Rect({
            x: 0,
            y: 0,
            width: 136,
            height: 18
        }),

    },
    components: [{
        component: Img,
        arguments: {
            rect: new Rect({
                x: 0,
                y: 0,
                width: 136,
                height: 18
            }),
            url: 'http://p8.qhimg.com/t01894b72700fb00c8a.png'
        }
    }]
})

const dot = new GameObject({
    name: 'dot',
    transform: {
        position: new Vector2({
            x: width * 0.33,
            y: height * 0.45
        }),
        rect: new Rect({
            x:0,
            y:0,
            width: 40,
            height: 40
        })
    },
    components: [{
        component: Img,
        arguments: {
            rect: new Rect({
                x:0,
                y:0,
                width: 40,
                height: 40
            }),
            url: 'http://p6.qhimg.com/t013c40a2dc6d75615f.png'
        }
    }, {
        component: Text,
        arguments: {
            position: new Vector2({
                x: 7,
                y: 14
            }),
            rect: new Rect({
                x: 0,
                y: 0,
                width: 40,
                height: 40
            }),
            text: '+300',
            color: '#fff',
            font: '8px sans-serif'
        }
    }, {
        component: Dot
    }]
})

const circle = new GameObject({
    name: 'circle',
    transform: {
        position: new Vector2({
            x: width * 0.33,
            y: height * 0.45
        }),
        anchor: new Vector2({
            x: 85/2,
            y: 85/2,
        })
    },
    components: [{
        component: Img,
        arguments: {
            rect: new Rect({
                x:0,
                y:0,
                width: 85,
                height: 85
            }),
            url: 'http://p3.qhimg.com/t0157b0ad49e0be86fe.png'
        }
    }, {
        component: Circle
    }]
});



const more = new GameObject({
    name: 'more',
    transform: {
        position: new Vector2({
            x: width * 0.5,
            y: height * 0.92
        }),
        rect: new Rect({
            width: 230,
            height: 45
        }),
        anchor: new Vector2({
            x: 230/2,
            y: 45/2,
        })
    },
    components: [{
        component: Img,
        arguments: {
            rect: new Rect({
                x:0,
                y:0,
                width: 230,
                height: 45
            }),
            url: 'http://p8.qhimg.com/t018b0bc7ac8ea50039.png'
        }
    }, {
        component: More
    }]
});

scene.addGameObjects(touch, background, fish, energy, canUse, dot, circle, more);