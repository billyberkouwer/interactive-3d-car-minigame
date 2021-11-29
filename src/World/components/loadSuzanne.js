import {GLTFLoader} from '../../../vendor/three/build/GLTFLoader.js'

async function loadSuzanne(scene) {  
    const loader = new GLTFLoader();
    const suzanneData = await loader.loadAsync('../../src/World/models/untitled.glb');
    console.log('suzanne', suzanneData)
}

export { loadSuzanne }

