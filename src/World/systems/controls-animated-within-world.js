loop = new Loop(camera, scene, renderer);
controls = new OrbitControls( camera, renderer.domElement );

//controls.autoRotate = true;
controls.enableDamping = true;
controls.dampingFactor = .1;
controls.tick = () => {
  controls.update();
}