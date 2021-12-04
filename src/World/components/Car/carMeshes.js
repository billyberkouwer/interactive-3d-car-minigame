import { Mesh, MathUtils } from "../../../../vendor/three/build/three.module.js";
import { createGeometries } from './carGeometries.js';
import { createMaterials } from './carMaterials.js';

function createMeshes() {
    const geometries = createGeometries();
    const materials = createMaterials();

    const body = new Mesh(geometries.carBody, materials.body);
    const hood = new Mesh(geometries.carHood, materials.body);
    hood.position.set(2, -.25, 0)
    const boot = hood.clone();
    boot.position.set(-2, -.25, 0)
    const wheel = new Mesh(geometries.wheel, materials.details);
    wheel.rotation.x = Math.PI / 2;
    wheel.position.set(-1.25, -.5, .9)
    const wheel3 = wheel.clone()
    wheel3.position.z = -.9;

    const wheel2 = wheel.clone();
    wheel2.position.set(1.25, -.5, .9);
    const wheel4 = wheel2.clone();
    wheel4.position.z = -.9;

    
    return {body, hood, boot, wheel, wheel2, wheel3, wheel4};
}

export { createMeshes }