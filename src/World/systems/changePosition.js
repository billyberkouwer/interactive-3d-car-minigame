function createChangePosition(changepos, controls, camera) {
    changepos.addEventListener('click', () => {
        let random1 = Math.random() * 10;
        controls.enabled = false;
        camera.tick = (delta) => {
            camera.position.y += Math.sin(3.14/2)*5 * delta;
        };
        setTimeout(function() {
            camera.tick = () => {
            return;
            };
            controls.enabled = true;
        }, 3000)
    })
}

export {createChangePosition}