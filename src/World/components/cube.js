import { BoxBufferGeometry, Mesh, MeshBasicMaterial } from '../../../vendor/three/build/three.module.js';

function createCube() {
    // create a geometry
    const geometry = new BoxBufferGeometry(1, 1, 1);
  
    // create a default (white) Basic material
    const material = new MeshBasicMaterial();
  
    // create a Mesh containing the geometry and material

    const cubes = [];

    function generateCubes(
      number, 
      xPosition, 
      yPosition, 
      xSpacing, 
      ySpacing
      ) {
      let cubeIndex = 0;
      let cubePositionX = xPosition;
      let cubePositionY = yPosition;
  
      while (cubeIndex < number) {
        cubes.push(new Mesh(geometry, material));
        cubeIndex++;
      }
  
      for (let i = 0; i < cubes.length; i++) {
        cubes[i].position.set(cubePositionX, cubePositionY, 0);
        cubePositionX+=xSpacing;
        cubePositionY+=ySpacing;
        console.log(cubes[i]);
      }
    }

    generateCubes(10, -5, -3, 1.5, .75);
  
    return cubes;
  }
  
  export { createCube };