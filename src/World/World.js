import { createCamera } from './components/camera.js';
import { createScene } from './components/scene.js';
import { createSphere } from './components/sphere.js'
import { createMeshGroup } from './components/meshGroup.js';

import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js'
import { Loop } from './systems/loop.js';
import { createControls } from './systems/controls.js';
import { createLights } from './components/lights.js';
import { Group, Sphere, MathUtils } from '../../vendor/three/build/three.module.js';

let camera;
let scene;
let renderer;
let loop;
let controls;
let changePos;

class World {
  constructor(container) {
        camera = createCamera();
        scene = createScene();
        renderer = createRenderer();
        controls = createControls(camera, renderer.domElement)
        loop = new Loop(camera, scene, renderer);
        container.append(renderer.domElement);

        //---- create meshes

        const { light, ambientLight } = new createLights();
        const group = createMeshGroup();

        light.position.set(10, 10, 4)
        scene.add(light, ambientLight, group)

        loop.updateables.push(controls, camera, group)
        const resizer = new Resizer(container, camera, renderer)
      }

      render() {
        renderer.render(scene, camera);
      }

      start() {
        loop.start();
      }

      stop() {
        loop.stop();
      }
    }

export { World }