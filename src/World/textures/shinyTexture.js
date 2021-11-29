import { MeshStandardMaterial, TextureLoader } from '../../../vendor/three/build/three.module.js';

const shiny = { color: 0xfffff, roughness: 0.5, metalness: 1, };

const bumpmap = new TextureLoader();

const shinybrick = (object) => bumpmap.load('../../../src/World/models/Bricks.png', function(texture){
  Object.assign(shiny, {bumpMap: texture});
  const material = new MeshStandardMaterial(shiny);
  object.traverse(function(child) { //where object is an instance of the loaded object in obj loader function
    if (child.material) {
      child.material = material;
    }
  });
});