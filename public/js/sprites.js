import SpriteSheet from './SpriteSheet';
import { loadImage } from './loaders';

export function loadMarioSprite() {
  return loadImage('/img/characters.gif').then(image => {
    const sprites = new SpriteSheet(image, 16, 16);
    sprites.define('idle', 276, 44, 16, 16);
    return sprites;
  });
}
