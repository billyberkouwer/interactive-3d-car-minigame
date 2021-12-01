import {  DirectionalLight, HemisphereLight } from "../../../vendor/three/build/three.module.js";

function createLights() {
    const light = new DirectionalLight('white', 4)
    const ambientLight = new HemisphereLight('white', 'darkslategrey', 4);

    ambientLight.position.set(2,2,0);

    return { ambientLight, light }

}

export { createLights }