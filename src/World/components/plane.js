import { MathUtils, Mesh, MeshStandardMaterial, PlaneBufferGeometry } from "../../../vendor/three/build/three.module.js";
import { createTexture } from '../textures/generatedColor.js'

function createPlane() {
    const planeGeo = new PlaneBufferGeometry(100,100,50,50)
    const genTexture = createTexture();
    const planeMat = new MeshStandardMaterial({
        color: 'grey',
        roughness: 1,
        map: genTexture,
        bumpMap: genTexture,
        bumpScale: .1,
    })
    const plane = new Mesh(planeGeo, planeMat)
    plane.rotation.x = MathUtils.degToRad(-90);
    return plane;
}

export {createPlane}