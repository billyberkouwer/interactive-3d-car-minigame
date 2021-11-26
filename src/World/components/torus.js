import { Mesh, MeshBasicMaterial, TorusGeometry } from "../../../vendor/three/build/three.module.js";

function createTorus() {
    const geometry = new TorusGeometry( 10, 3, 16, 100 );
    const material = new MeshBasicMaterial();

    const torus = new Mesh(geometry, material);

    return torus;
}

export { createTorus }