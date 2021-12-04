import { SphereBufferGeometry, MeshStandardMaterial, Mesh, TextureLoader, RepeatWrapping } from "../../../vendor/three/build/three.module.js";
import { createTexture } from "../textures/generatedColor.js";

const radius = .175;
const widthSegments = 12;
const heightSegments = 12;
const color = 'red';
const roughness = 0.2;

function createSphere() {
    const geometry = new SphereBufferGeometry(
        radius,
        widthSegments,
        heightSegments,
    )

    const texloader = new TextureLoader()

    const texture = createTexture();

    const material = new MeshStandardMaterial({
        map: texture,
        roughnessMap: texture,
        flatShading: true,
    })

    console.log(material)
    
    const sphere = new Mesh(geometry, material)

    return sphere;
}

export {createSphere}

