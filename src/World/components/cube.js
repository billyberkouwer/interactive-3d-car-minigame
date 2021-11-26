import { BoxBufferGeometry, Mesh, MeshStandardMaterial } from '../../../vendor/three/build/three.module.js';

function createCube() {

    const geometry = new BoxBufferGeometry(1, 1, 1);

    const qualities = {
      color: 'peachpuff',
    }
    
    const material = new MeshStandardMaterial(qualities);

    const cubes = [];

    const cubeParameters = {
      number: 10,
      xPosition: -5,
      yPosition: -2,
      xSpacing: 1,
      ySpacing: .3,
      rotation: 1,
      rotationInc: 0.2
    }

    function generateCubes(cubeParameters) {

      let cubeIndex = 0;
      const num = cubeParameters.number;
      let posX = cubeParameters.xPosition;
      let posY = cubeParameters.yPosition;
      let spcX = cubeParameters.xSpacing;
      let spcY = cubeParameters.ySpacing;
      let rot = cubeParameters.rotation;
      let rotInc = cubeParameters.rotationInc;
  
      while (cubeIndex < num) {
        cubes.push(new Mesh(geometry, material));
        cubeIndex++;
      }
  
      for (let i = 0; i < cubes.length; i++) {
        let random = Math.random()*2;
        cubes[i].position.set(posX, posY, 0);
        cubes[i].rotation.set(rot, rot, 0)
        cubes[i].scale.set(random, random, random);
        cubes[i].tick = () => {
          cubes[i].rotation.x += 0.01 ;
          cubes[i].rotation.y += 0.01;
          cubes[i].rotation.z += 0.01;
        }
        rot+=rotInc;
        posX+=spcX;
        posY+=spcY;
      }
    }

    generateCubes(cubeParameters);
  
    return cubes;
  }
  
  export { createCube };