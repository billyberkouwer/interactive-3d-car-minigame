function setupKeyControls(car, camera) {
    var objectSpeed = 0.1;

    var keys = {};

    function handleKeyPress(event) {
        let { keyCode, type } = event || Event;
        let isKeyDown = (type == 'keydown');
        keys[keyCode] = isKeyDown;
    };

    car.tick = (delta) => {
        if (keys[87] && keys[68]) {
            car.rotation.y -= Math.PI / 2 * delta;
            car.position.x += objectSpeed * Math.cos(car.rotation.y);
            car.position.z -= objectSpeed * Math.sin(car.rotation.y);
        } else if (keys[87] && keys[65]) {
            car.rotation.y += Math.PI / 2 * delta;
            car.position.x += objectSpeed * Math.cos(car.rotation.y);
            car.position.z -= objectSpeed * Math.sin(car.rotation.y);
        } else if (keys[83] && keys[68]) {
            car.rotation.y += Math.PI / 2 * delta;
            car.position.x -= objectSpeed * Math.cos(car.rotation.y);
            car.position.z += objectSpeed * Math.sin(car.rotation.y);
        } else if (keys[83] && keys[65]) {
            car.rotation.y -= Math.PI / 2 * delta;
            car.position.x -= objectSpeed * Math.cos(car.rotation.y);
            car.position.z += objectSpeed * Math.sin(car.rotation.y);
        }
         else if (keys[87]) {
            car.position.x += objectSpeed * Math.cos(car.rotation.y);
            car.position.z -= objectSpeed * Math.sin(car.rotation.y);
        } else if (keys[83]) {
            car.position.x -= objectSpeed * Math.cos(car.rotation.y);
            car.position.z += objectSpeed * Math.sin(car.rotation.y);
        }
    }

    window.addEventListener("keyup", handleKeyPress);
    window.addEventListener("keydown", handleKeyPress);

}

export { setupKeyControls }
