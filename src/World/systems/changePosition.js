function createChangePosition(button, controls, camera) {
    button.addEventListener('click', () => {
        controls.enabled = false;
        camera.tick = (delta) => {
            camera.position.y -= Math.cos(3.14) * delta;
            camera.position.z += Math.cos(3.14) * 5 * delta;
        };
        console.log('moving')
        setTimeout(function() {
            camera.tick = () => {
            return;
            };
            controls.enabled = true;
        }, 3000)
    })
}

export { createChangePosition }