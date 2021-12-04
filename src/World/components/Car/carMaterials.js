import { MeshStandardMaterial } from "../../../../vendor/three/build/three.module.js";

function createMaterials() {
    const body = new MeshStandardMaterial({
        color: 'firebrick',
        flatShading: true,
    });
    const details = new MeshStandardMaterial({
        color: 'darkgrey',
        flatShading: true,
    });

    return { body, details }
}

export { createMaterials }