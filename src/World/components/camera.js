import { PerspectiveCamera } from '../../../vendor/three/build/three.module.js';

function createCamera() {
    const camera = new PerspectiveCamera(
      30, // fov = Field Of View
      1, // aspect ratio (dummy value)
      0.1, // near clipping plane
      200, // far clipping plane
    );
  
    // move the camera back so we can view the scene
    camera.position.set(0, 0, 50);

    camera.tick = (delta) => {

    }
  
    return camera;
  }
  
  export { createCamera };