import Frame from './Frame';
export default class Game {
    constructor ({ canvas, scene }) {

        this.canvas = canvas;
        this.scene = undefined;
        this.loadScene({ scene: scene });
        this.frame = new Frame({ scene: scene, canvas });
    }
    loadScene({ scene }) {
        const prevScene = this.scene;
        prevScene && prevScene.destroy();
        this.frame && this.frame.setScene({scene});
        this.canvas.setCamera(scene.camera);
        this.scene = scene;
        this.scene.start();
    }
}