import { World } from './World/World.js';

function main() {
  const container = document.querySelector('#scene-container');
  const button = document.querySelector('#loader');

  function loader() {
    let initClick = 0;
    if (!initClick) {
      initClick++;
      const world = new World(container);
      world.render();
      button.style.display = 'none';
    } else {
      return;
    };
  }

  button.addEventListener('click', loader)

}

main();