import {
  BoxBufferGeometry,
  Color,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from '../vendor/three/build/three.module.js';

const container = document.querySelector('#scene-container');

const scene = new Scene();

scene.background = new Color('black');

const fov = 40;
const aspect = container.clientWidth / container.clientHeight;
const near = 0.1;
const far = 200;

const camera = new PerspectiveCamera(fov, aspect, near, far);

camera.position.set(0, 0, 10);

const geometry = new BoxBufferGeometry(2, 2, 2);

const material = new MeshBasicMaterial();

const cube = new Mesh(geometry, material);

scene.add(cube);

cube.rotation.x = .1;
cube.rotation.y = .5;

const renderer = new WebGLRenderer();

renderer.setSize(container.clientWidth, container.clientHeight);

renderer.setPixelRatio(window.devicePixelRatio);

container.append(renderer.domElement);

renderer.render(scene, camera)