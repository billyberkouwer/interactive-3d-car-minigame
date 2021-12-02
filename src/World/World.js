import { createCamera } from './components/camera.js';
import { createScene } from './components/scene.js';
import { createSphere } from './components/sphere.js'

import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js'
import { Loop } from './systems/loop.js';
import { createControls } from './systems/controls.js';
import { createLights } from './components/lights.js';
import { AmbientLight, HemisphereLight } from '../../vendor/three/build/three.module.js';

let camera;
let scene;
let renderer;
let loop;
let controls;

class World {
  constructor(container) {
        camera = createCamera();
        scene = createScene();
        renderer = createRenderer();
        controls = createControls(camera, renderer.domElement)
        loop = new Loop(camera, scene, renderer);
        container.append(renderer.domElement);

        //---- create meshes

        const { light } = new createLights();

        const ambientLight = new HemisphereLight('white', 'lightgrey', 2);

        light.position.set(10, 10, 4)
        const sphere = new createSphere();
        scene.add(sphere, light, ambientLight)

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