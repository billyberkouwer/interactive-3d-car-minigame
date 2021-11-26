import { World } from './World/World.js';

function main() {
  const container = document.querySelector('#scene-container');
  const button = document.querySelector('#loader');

  const world = new World(container);
  
  world.start();

}

main();