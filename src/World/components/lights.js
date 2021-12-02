import {  DirectionalLight, HemisphereLight } from "../../../vendor/three/build/three.module.js";

function createLights() {
    const light = new DirectionalLight('white', 4)
    const ambientLight = new HemisphereLight(0xffffbb, 0x080820, 1);

    return { ambientLight, light }
}

export { createLights }