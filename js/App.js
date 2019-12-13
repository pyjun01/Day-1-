class App {
  constructor() {
    this.canvas = document.querySelector('#canvas');
    this.ctx = this.canvas.getContext('2d');
    
    this.addEvent();
    this.frame();
  }

  addEvent() {
    this.resize();

    window.addEventListener('resize', this.resize.bind(this))
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  frame() {
    this.update();
    this.render();

    window.requestAnimationFrame(() => {
      this.frame();
    });
  }

  update() {

  }

  render() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.fillStyle = '#5392A0';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    
  }
}

window.onload = e => {
  const app = new App();
}