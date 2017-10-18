export default class GroundCollider {
  constructor(ground) {
    this.ground = ground;
  }

  isIntersect(a, b) {
    return !(
      a.pos.x > b.pos.x + b.size.x ||
      a.pos.x + a.size.x < b.pos.x ||
      a.pos.y > b.pos.y + b.size.y ||
      a.pos.y + a.size.y < b.pos.y
    );
  }

  checkX(entity) {
    const { ground } = this;
    if (this.isIntersect(entity, ground)) {
      if (entity.vel.x > 0) {
        entity.pos.x = ground.pos.x - entity.size.x - 0.1;
      } else if (entity.vel.x < 0) {
        entity.pos.x = ground.pos.x + ground.size.x + 0.1;
      }
      entity.vel.x = 0;
    }
  }

  checkY(entity) {
    const { ground } = this;
    if (this.isIntersect(entity, ground)) {
      if (entity.vel.y > 0) {
        entity.pos.y = ground.pos.y - entity.size.y - 0.1;
      } else if (entity.vel.y < 0) {
        entity.pos.y = ground.pos.y + ground.size.y + 0.1;
      }
      entity.vel.y = 0;
    }
  }
}
