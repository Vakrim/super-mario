import Compositor from './Compositor';
import GroundCollider from './GroundCollider';

export default class Level {
  constructor() {
    this.gravity = 2000;

    this.comp = new Compositor();
    this.entities = new Set();
    this.grounds = new Set();
  }

  update(deltaTime) {
    const groundColliders = new Set();
    this.grounds.forEach(ground => groundColliders.add(new GroundCollider(ground)));

    this.entities.forEach(entity => {
      entity.update(deltaTime);

      entity.pos.x += entity.vel.x * deltaTime;
      groundColliders.forEach(collider => {
        collider.checkX(entity);
      });

      entity.pos.y += entity.vel.y * deltaTime;
      groundColliders.forEach(collider => {
        collider.checkY(entity);
      });

      entity.vel.y += this.gravity * deltaTime;
    });
  }
}
