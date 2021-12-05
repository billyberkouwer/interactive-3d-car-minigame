function setupKeyControls(object, camera) {
    var objectSpeed = 0.2;

    var keys = {};

    function handleKeyPress(event) {
        let { keyCode, type } = event || Event;
        let isKeyDown = (type == 'keydown');
        keys[keyCode] = isKeyDown;
    };

    object.tick = (delta) => {
        const rotation = Math.PI / 2 * delta;
        const xCos = (objectRotation) => objectSpeed * Math.cos(objectRotation);
        const ySin = (objectRotation) => objectSpeed * Math.sin(objectRotation);
        if (keys[87] && keys[68]) {
            object.rotation.y -= rotation;
            object.position.x += xCos(object.rotation.y);
            object.position.z -= ySin(object.rotation.y);
        } else if (keys[87] && keys[65]) {
            object.rotation.y += rotation;
            object.position.x += xCos(object.rotation.y);
            object.position.z -= ySin(object.rotation.y);
        } else if (keys[83] && keys[68]) {
            object.rotation.y += rotation;
            object.position.x -= xCos(object.rotation.y);
            object.position.z += ySin(object.rotation.y);
        } else if (keys[83] && keys[65]) {
            object.rotation.y -= rotation;
            object.position.x -= xCos(object.rotation.y);
            object.position.z += ySin(object.rotation.y);
        }
         else if (keys[87]) {
            object.position.x += xCos(object.rotation.y);
            object.position.z -= ySin(object.rotation.y);
        } else if (keys[83]) {
            object.position.x -= xCos(object.rotation.y);
            object.position.z += ySin(object.rotation.y);
        }
    }

    window.addEventListener("keyup", handleKeyPress);
    window.addEventListener("keydown", handleKeyPress);

}

export { setupKeyControls }
