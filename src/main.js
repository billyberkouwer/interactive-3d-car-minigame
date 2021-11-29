import { World } from './World/World.js';

async function main() {
  const container = document.querySelector('#scene-container');
  const startbut = document.querySelector('#start');
  const stopbut = document.querySelector('#stop');

  const world = new World(container);

  await world.init();

  world.start()
  
  startbut.addEventListener('click', function(){
    world.start()
  });

  stopbut.addEventListener('click', function(){
    world.stop();
    world.render();
  })


}

main().catch((err) => {
  console.log(err);
});