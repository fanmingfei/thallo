import {
    Component,
    types
} from '../../../src/Engine.js';
const {Rect} = types;

export default class Fish extends Component {
    constructor({
        targetObject,
        width,
        height
    }) {
        super({
            targetObject
        })
        this.url = '';
     
        this.imageWidth = width;
        this.imageHeight = height;

        this.width = 750;
        this.height = 410;
        this.imageList = [];
        this.images = [];
        this.image = new Image();
        this.rect =  new Rect({
                x: 0,
                y: 0,
                width: width,
                height: height * 0.2608
            });
        this.i = 0;
        this.init();
    }
    update(e) {
        this.setImg()
        this.i = Math.floor(e.time / 0.1) % 16;
        // console.log(this.i)
    }
    init() {
        this.url = 'https://gw.alicdn.com/mt/TB1rFX6SXXXXXbCXpXXXXXXXXXX-1504-1648.jpg?v=1499321313957';
        this.splitImg().then(()=>{
        this.url = 'https://gw.alicdn.com/mt/TB1_zmaSXXXXXcLXXXXXXXXXXXX-1504-1648.jpg?v=1499321313947';
            this.splitImg();    
        })
    }
    splitImg() {
        return new Promise(resolve=>{

            const width = this.width;
            const height = this.height;
            const gap = 2;
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = width;
            canvas.height = height;

            const image = new Image();
            image.crossOrigin = 'anonymous';
            image.src = this.url;
            image.onload = () => {
                for (let j = 0; j < 4; j++) {
                    for (let i = 0; i < 2; i++) {
                        let sx = i * gap + i * width;
                        let sy = j * gap + j * height;
                        ctx.clearRect(0, 0, width, height);
                        ctx.drawImage(image, sx, sy, width, height, 0, 0, width, height);
                        // this.imageList.push();
                        // this.image.src = canvas.toDataURL('image/png');
                        let img = new Image();
                        img.src= canvas.toDataURL('image/png');
                        this.images.push(img);
                    }
                }
                resolve();
            }
        })
    }
    setImg() {
        if (this.images.length == 0) return;
        this.targetObject.renderer.pushImages({
            rect: this.rect,
            image: this.images[this.i]
        });
    }

}