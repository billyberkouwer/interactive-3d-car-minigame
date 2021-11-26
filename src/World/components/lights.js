import { AmbientLight, DirectionalLight } from "../../../vendor/three/build/three.module.js";

function createLights() {
    const light = new DirectionalLight('white', 8);
    const ambientLight = new AmbientLight('0x404040');

    light.position.set(10,10,10);
    ambientLight.position.set(2,2,0)

    return [light, ambientLight]

}

export {createLights}