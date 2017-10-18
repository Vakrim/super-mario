import Level from './Level';
import SpriteSheet from './SpriteSheet';
import { createGroundsLayer, createSpriteLayer } from './layers';

export function loadImage(url) {
  return new Promise(resolve => {
    const image = new Image();
    image.addEventListener('load', () => {
      resolve(image);
    });
    image.src = url;
  });
}

function loadJSON(url) {
  return fetch(url).then(r => r.json());
}

function createGrounds(level, grounds) {
  grounds.forEach(ground => {
    level.grounds.add({
      pos: { x: ground[0], y: ground[1] },
      size: { x: ground[2], y: ground[3] },
    });
  });
}

export function loadLevel(name) {
  return loadJSON(`/levels/${name}.json`).then(levelSpec => {
    const level = new Level();

    createGrounds(level, levelSpec.grounds);

    const groundsLayer = createGroundsLayer(level.grounds);
    level.comp.layers.push(groundsLayer);

    const spriteLayer = createSpriteLayer(level.entities);
    level.comp.layers.push(spriteLayer);

    return level;
  });
}
