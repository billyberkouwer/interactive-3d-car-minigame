import { createCamera } from './components/camera.js';
import { createScene } from './components/scene.js';
import { Car } from './components/Car/car.js';

import { createRenderer } from './systems/renderer.js';
import { createAxesHelper, createGridHelper } from './systems/createHelpers.js';
import { Resizer } from './systems/Resizer.js'
import { Loop } from './systems/loop.js';
import { createControls } from './systems/controls.js';
import { createLights } from './components/lights.js';
import { MathUtils } from '../../vendor/three/build/three.module.js';

let camera;
let scene;
let renderer;
let loop;
let controls;
let axes;
let grid;
let changePos;

class World {
  constructor(container) {
        camera = createCamera();
        scene = createScene();
        renderer = createRenderer();
        controls = createControls(camera, renderer.domElement)
        loop = new Loop(camera, scene, renderer);
        container.append(renderer.domElement);
        axes = createAxesHelper();
        grid = createGridHelper();

        const { light, ambientLight } = new createLights();
        light.position.set(10, 10, 4)

        //---- create meshes

        const car = new Car();
        car.position.y = .875;

        scene.add(light, ambientLight, axes, grid, car)
        loop.updateables.push(controls, camera, car)
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