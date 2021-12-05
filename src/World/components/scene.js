import { Color, Scene, TextureLoader } from '../../../vendor/three/build/three.module.js';

function createScene() {
    const scene = new Scene();

    const loader = new TextureLoader()
    const background = loader.load('../../src/World/textures/935131.jpg')
  
    scene.background = background;
  
    return scene;
  }
  
  export { createScene };