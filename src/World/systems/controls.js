import { OrbitControls } from '../../../vendor/three/build/OrbitControls.js';

function createControls(camera, canvas) {
    const controls = new OrbitControls( camera, canvas );
    controls.mouseButtons.RIGHT = false;
    controls.enableDamping = true;
    controls.tick = () => controls.update();


    return controls;
}

export { createControls }