import { World } from './World/World.js';

function main() {
  const container = document.querySelector('#scene-container');
  const startbut = document.querySelector('#start');
  const stopbut = document.querySelector('#stop');
  const viewControls = document.querySelector('#controls')
  const controlsDiv = document.querySelector('#controls-div')

  let toggle = 0;

  viewControls.addEventListener('click', () => {
    if (toggle % 2 === 0) {
      toggle += 1;
      controlsDiv.style.display = 'block';
    } else {
      toggle += 1;
      controlsDiv.style.display = 'none';
    }
  })

  const world = new World(container);

  world.start()
  
  startbut.addEventListener('click', function(){
    world.start()
  });

  stopbut.addEventListener('click', function(){
    world.stop();
    world.render();
  })

}

main();