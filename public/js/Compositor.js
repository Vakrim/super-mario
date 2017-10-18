export default class Compositor {
  constructor() {
    this.layers = [];
  }

  draw(context, camera) {
    context.clearRect(0, 0, 640, 640);

    this.layers.forEach(layer => {
      layer(context, camera);
    });
  }
}
