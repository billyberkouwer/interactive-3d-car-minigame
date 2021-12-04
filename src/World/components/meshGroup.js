import { Group, MathUtils } from "../../../vendor/three/build/three.module.js";
import { createSphere } from './sphere.js';

function createMeshGroup() {

    const group = new Group();

    const sphere = createSphere();

    for (let i = 0; i < 1; i += 0.075) {
        const clonedSphere = sphere.clone();
        clonedSphere.position.x = Math.cos(2 * Math.PI * i);
        clonedSphere.position.y = Math.sin(2 * Math.PI * i);
        clonedSphere.position.z = -i * 5;
        clonedSphere.scale.multiplyScalar(-0.1 - i);
        group.add(clonedSphere)
    }

    const radiansPerSecond = MathUtils.degToRad(30);

    group.tick = (delta) => {
    group.rotation.z -= delta * radiansPerSecond;
    };

    group.scale.multiplyScalar(4)
    group.rotation.y = MathUtils.degToRad(45)
    group.position.x = 7;

    return group;

}

export { createMeshGroup }