import { Clock } from '../../../vendor/three/build/three.module.js';

class Loop {
    constructor(camera, scene, renderer) {
        this.camera = camera;
        this.scene = scene;
        this.renderer = renderer;
        this.updateables = [];
    }

    start(){
        this.renderer.setAnimationLoop(() => {
            this.tick()
            this.renderer.render(this.scene, this.camera);
        })
    };

    stop(){
        this.renderer.setAnimationLoop(null);
    };

    tick(){
        for (const object of this.updateables) {
            object.tick();
        }
    }
}

export {Loop}