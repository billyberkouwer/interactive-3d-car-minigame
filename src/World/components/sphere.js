import { SphereBufferGeometry, MeshStandardMaterial, Mesh, TextureLoader, RepeatWrapping } from "../../../vendor/three/build/three.module.js";

const radius = 2.5;
const widthSegments = 16;
const heightSegments = 16;
const color = 'lightblue';
const metalness = .5;
const roughness = 0.5;

function createSphere() {
    const geometry = new SphereBufferGeometry(
        radius,
        widthSegments,
        heightSegments,
    )

    const texloader = new TextureLoader()

    const bump = texloader.load('../../../src/World/textures/bumpy-sphere-map.png')

    bump.wrapS = RepeatWrapping;
    bump.wrapT = RepeatWrapping;
    bump.scale = 2;

    const texture = new MeshStandardMaterial({
        color,
        metalness,
        roughness,  
    }
    )

    texture.bumpMap = bump;
    texture.bumpScale = .01;
    
    

    const sphere = new Mesh(geometry, texture)

    return sphere;
}

export {createSphere}

