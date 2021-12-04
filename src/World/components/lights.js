import {  DirectionalLight, HemisphereLight } from "../../../vendor/three/build/three.module.js";

function createLights() {
    const light = new DirectionalLight('white', 4)
    const ambientLight = new HemisphereLight('white', 'white', 2);

    return { light, ambientLight }
}

export { createLights }