import { Group, MathUtils } from "../../../../vendor/three/build/three.module.js";
import { createMeshes } from "./carMeshes.js";

const wheelSpin = MathUtils.degToRad(24)

class Car extends Group {
    constructor() {
        super();
        this.meshes = createMeshes();

        this.add(
            this.meshes.body,
            this.meshes.boot,
            this.meshes.hood,
            this.meshes.wheel,
            this.meshes.wheel2,
            this.meshes.wheel3,
            this.meshes.wheel4,
        )

    };

    tick(delta) {
        this.meshes.wheel.rotation.y += wheelSpin * delta;
        this.meshes.wheel2.rotation.y += wheelSpin * delta;
        this.meshes.wheel3.rotation.y += wheelSpin * delta;
        this.meshes.wheel4.rotation.y += wheelSpin * delta;
    };
}

export { Car }