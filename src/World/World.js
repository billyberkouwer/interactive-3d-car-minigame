import { createCamera } from './components/camera.js';
import { createScene } from './components/scene.js';
import { Car } from './components/Car/car.js';

import { createRenderer } from './systems/renderer.js';
import { setupKeyControls } from './systems/keyboardControls.js'
import { createAxesHelper, createGridHelper } from './systems/createHelpers.js';
import { Resizer } from './systems/Resizer.js'
import { Loop } from './systems/loop.js';
import { createControls } from './systems/controls.js';
import { createChangePosition } from './systems/changePosition.js';
import { createLights } from './components/lights.js';
import { MathUtils } from '../../vendor/three/build/three.module.js';
import { createPlane } from './components/plane.js';

let camera;
let scene;
let renderer;
let loop;
let controls;
let axes;
let grid;
let changePos;
let keyControls

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
        const changePosButton = container.querySelector('#change-position')
        changePos = createChangePosition(changePosButton, controls, camera);

        const { light, ambientLight } = new createLights();
        light.position.set(10, 10, 4)

        //---- create meshes

        const plane = createPlane()
        scene.add(plane)

        const car = new Car();
        console.log(car)
        car.position.y = .9;

        camera.tick = () => {
          camera.lookAt(car.position)
        }

        car.add(camera)

        scene.add(light, ambientLight, axes, grid, car)
        keyControls = setupKeyControls(car, camera);
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