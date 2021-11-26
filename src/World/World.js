import { createCamera } from './components/camera.js';
import { createCube } from './components/cube.js';
import { createScene } from './components/scene.js';
import { createLights } from './components/lights.js';

import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';

let camera;
let scene;
let renderer;

class World {
  constructor(container) {
        camera = createCamera();
        scene = createScene();
        renderer = createRenderer();
        container.append(renderer.domElement);

        const light = createLights();
        scene.add(light[0],light[1]);
        const cubes = createCube();
        for (let i = 0; i < cubes.length; i++) {
          scene.add(cubes[i]);
        };

        const resizer = new Resizer(container, camera, renderer)
      }
      render() {
        renderer.render(scene, camera);
      }
    }

export { World }