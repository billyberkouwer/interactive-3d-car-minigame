import { WebGLRenderer } from '../../../vendor/three/build/three.module.js';

function createRenderer(scene, camera) {
    const renderer = new WebGLRenderer({antialias: true});
    
    renderer.physicallyCorrectLights = true;

    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
    })
  
    return renderer;
  }
  
export { createRenderer };