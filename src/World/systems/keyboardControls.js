import {MathUtils} from '../../../vendor/three/build/three.module.js';

function setupKeyControls(object, camera) {
    var objectSpeed = 0.2;
    const wheelSpin = MathUtils.degToRad((360/2.5))

    var keys = {};

    function handleKeyPress(event) {
        let { keyCode, type } = event || Event;
        let isKeyDown = (type == 'keydown');
        keys[keyCode] = isKeyDown;
    };

    function createWheelSpin(object, wheelSpin, delta) {
        object.meshes.wheel.rotation.y -= wheelSpin * delta;
        object.meshes.wheel2.rotation.y -= wheelSpin * delta;
        object.meshes.wheel3.rotation.y -= wheelSpin * delta;
        object.meshes.wheel4.rotation.y -= wheelSpin * delta;
    }

    object.tick = (delta) => {
        const rotation = Math.PI / 2 * delta;
        const xCos = (objectRotation) => objectSpeed * Math.cos(objectRotation);
        const ySin = (objectRotation) => objectSpeed * Math.sin(objectRotation);
        if (keys[87] && keys[68]) {
            object.rotation.y -= rotation;
            object.position.x += xCos(object.rotation.y);
            object.position.z -= ySin(object.rotation.y);
            createWheelSpin(object, wheelSpin, delta);
        } else if (keys[87] && keys[65]) {
            object.rotation.y += rotation;
            object.position.x += xCos(object.rotation.y);
            object.position.z -= ySin(object.rotation.y);
            createWheelSpin(object, wheelSpin, delta);
        } else if (keys[83] && keys[68]) {
            object.rotation.y += rotation;
            object.position.x -= xCos(object.rotation.y);
            object.position.z += ySin(object.rotation.y);
            createWheelSpin(object, wheelSpin, delta);
        } else if (keys[83] && keys[65]) {
            object.rotation.y -= rotation;
            object.position.x -= xCos(object.rotation.y);
            object.position.z += ySin(object.rotation.y);
            createWheelSpin(object, wheelSpin, delta);
        }
         else if (keys[87]) {
            object.position.x += xCos(object.rotation.y);
            object.position.z -= ySin(object.rotation.y);
            createWheelSpin(object, wheelSpin, delta);
        } else if (keys[83]) {
            object.position.x -= xCos(object.rotation.y);
            object.position.z += ySin(object.rotation.y);
            createWheelSpin(object, wheelSpin, delta);
        }
    }

    window.addEventListener("keyup", handleKeyPress);
    window.addEventListener("keydown", handleKeyPress);

}

export { setupKeyControls }
