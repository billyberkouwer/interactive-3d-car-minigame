import { createCamera } from './components/camera.js';
import { createCube } from './components/cube.js';
import { createScene } from './components/scene.js';
import { createLights } from './components/lights.js';
import { loadSuzanne } from './components/loadSuzanne.js';

import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { createCube2 } from './components/cube2.js';
import { Loop } from './systems/loop.js';
import { OrbitControls } from '../../vendor/three/build/OrbitControls.js';
import { OBJLoader } from "../../../vendor/three/build/OBJLoader.js";

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
        loop = new Loop(camera, scene, renderer);
        container.append(renderer.domElement);

        //--- Create controls
        
        controls = new OrbitControls( camera, renderer.domElement );
        controls.enableDamping = true;
        controls.dampingFactor = .1;
        controls.tick = () => {
          controls.update();
        }

        //--- Add Lights
        
        const light = createLights();
        scene.add(light[0],light[1]);

        //--- Add Cubes

        const cubes = createCube();

        for (let i = 0; i < cubes.length; i++) {
          scene.add(cubes[i]);
          loop.updateables.push(cubes[i])
        };

        const cube2 = createCube2();
        cube2.position.set(2,0,0);
        cubes[5].add(cube2)
        cube2.rotation.x = Math.PI/4;

        const cube3 = createCube2();
        cube3.position.set(2,-2,0);
        cube2.scale.set(1.5,1.5,2);
        cubes[4].add(cube3);
        cube3.rotation.y = Math.PI/3;

        //--- Load Suzanne

        const loader = new OBJLoader()

        function loadSuzanne() {  
            loader.load('../src/World/models/untitled.obj',
                function( object ) {
                    object.name = "suzanne";
                    object.position.y = 3;
                    scene.add(object)
                },  
                function ( xhr ) {
                console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
                },  
                function ( error ) {
                console.log( 'An error happened' );
            })
        }

        loadSuzanne();

        //--- Push Updateables

        loop.updateables.push(cube2, cube3, camera, controls);

        //--- Resizer

        const resizer = new Resizer(container, camera, renderer); 

      }

      async init() {
        await loadSuzanne();
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