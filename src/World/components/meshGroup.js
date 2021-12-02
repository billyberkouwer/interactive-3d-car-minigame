import {
    Group,
    } from '../../../vendor/three/build/three.module.js';
import { SphereBufferGeometry, MeshStandardMaterial, Mesh, TextureLoader, RepeatWrapping } from "../../../vendor/three/build/three.module.js";

import {createSphere} from './sphere.js'

function createMeshGroup() {

    const group = new Group();

    group.tick = (delta) => {};

    return sphere;
}

export { createMeshGroup };