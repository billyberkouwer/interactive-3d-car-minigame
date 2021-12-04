import { CylinderBufferGeometry, BoxBufferGeometry } from "../../../../vendor/three/build/three.module.js";

function createGeometries() {
    const carBody = new BoxBufferGeometry(3, 1, 2);
    const carHood = new BoxBufferGeometry(1, .5, 2);
    const wheel = new CylinderBufferGeometry(.4,.4,.25, 16);

    return {
        carBody,
        carHood,
        wheel
    }

}

export { createGeometries }