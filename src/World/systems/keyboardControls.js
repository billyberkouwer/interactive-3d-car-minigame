function setupKeyControls(container, car) {
    var xSpeed = 0.1;
    var ySpeed = 0.1;

    var keys = {}
    function handleKeyPress(event) {
        let { keyCode, type } = event || Event; // to deal with IE
        let isKeyDown = (type == 'keydown');
        keys[keyCode] = isKeyDown;

        // test: enter & shift key pressed down
        car.tick = (delta) => {
            if (isKeyDown && keys[87] && keys[68]) {
                car.rotation.y -= Math.PI / 2 * delta;
                car.position.x += ySpeed;
                car.position.z += xSpeed;
            } else if (isKeyDown && keys[87] && keys[65]) {
                car.rotation.y += Math.PI / 2 * delta;
                car.position.x += ySpeed;
                car.position.z -= xSpeed;
            } else if (isKeyDown && keys[87]) {
                car.position.x += ySpeed;
            } else if (isKeyDown && keys[83]) {
                car.position.x -= ySpeed;
            } else if (isKeyDown && keys[65]) {
                car.position.z -= xSpeed;
            } else if (isKeyDown && keys[68]) {
                car.position.z += xSpeed;
            }
        }
    };

    window.addEventListener("keyup", handleKeyPress);
    window.addEventListener("keydown", handleKeyPress);

    var map = []; // You could also use an array
    
    onkeydown = onkeyup = function(event){
        let keyEvent = event.which;
        map[keyEvent] = event.type == 'keydown';
        if (map == 87) {
            car.position.x += ySpeed;
        } else if (map == 83) {
            car.position.x -= ySpeed;
        } else if (map == 65) {
            car.position.z -= xSpeed;
        } else if (map == 68) {
            car.position.z += xSpeed;
        } else if (map == 32) {
            car.position.set(0, 0, 0);
        } else if (map == 83 && keyCode == 68) {
            car.position.x += ySpeed;
            car.position.z += xSpeed;
        }
    }

}

export { setupKeyControls }
