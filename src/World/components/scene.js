import { Color, Scene } from '../../../vendor/three/build/three.module.js';

function createScene() {
    const scene = new Scene();
  
    scene.background = new Color('darkgray');
  
    return scene;
  }
  
  export { createScene };