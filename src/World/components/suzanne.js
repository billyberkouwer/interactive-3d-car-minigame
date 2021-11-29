import { OBJLoader } from "../../../vendor/three/build/OBJLoader.js";

const loader = new OBJLoader();

async function returnSuzanne() { 
    return loader.load(
    '../../src/World/models/untitled.obj',
    function( object ) {
        object.name = "suzanne";
        object.position.y = 3;

        loop.updateables.push(object)
        object.tick = () => {
          object.rotation.x += 0.01;
          object.rotation.y += 0.01;
          object.rotation.z += 0.01;
        }

        const suzanne = object;

        return suzanne;
    },  
    function ( xhr ) {
    console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    },  
    function ( error ) {
      console.log( 'An error happened' );
  })  
}

{ returnSuzanne }

