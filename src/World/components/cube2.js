import { BoxBufferGeometry, Mesh, MeshStandardMaterial } from '../../../vendor/three/build/three.module.js';

function createCube2() {

    const geometry = new BoxBufferGeometry(1, 1, 1);

    const qualities = {
      color: 'red',
    }
    const material = new MeshStandardMaterial(qualities);

    const cube = new Mesh(geometry, material);

    cube.tick = () => {
      cube.rotation.x += 0.01 ;
      cube.rotation.y += 0.01;
      cube.rotation.z += 0.01;
    }
  
    return cube;
  }
  
  export { createCube2 };