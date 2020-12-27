import {
    Ball
} from './ball.js';

import {
    Lines
} from './lines.js';

class App {
    constructor(order) {
        this.target = 'box' + order;
        this.canvas = document.getElementById(this.target);
        this.ctx = this.canvas.getContext('2d');
        this.order = order;


        this.ball = new Ball(10);
        this.resize();
        this.lines = new Lines(this.order);
        window.requestAnimationFrame(this.animate.bind(this));
        window.addEventListener('resize', this.resize.bind(this), false);
    }

    resize() {
        this.stageWidth = this.canvas.clientWidth;
        this.stageHeight = this.canvas.clientWidth;

        this.canvas.width = this.stageWidth;
        this.canvas.height = this.stageHeight;
        this.ctx.scale(1, 1);
    }

    animate() {
        window.requestAnimationFrame(this.animate.bind(this));
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

        this.ball.draw(this.ctx, this.stageWidth, this.stageHeight, this.order);
        this.lines.drawLines(this.ctx, this.stageWidth, this.stageHeight);
        this.ctx.strokeStyle = '#ffffff';
        this.ctx.lineWidth = 1.5;
        this.ctx.beginPath();
        this.ctx.arc(
            this.stageWidth / 2,
            this.stageWidth / 2,
            this.stageWidth / 2,
            0, Math.PI * 2
        );

        this.ctx.closePath();
        this.ctx.stroke();
    }
}

window.onload = () => {

    for (let i = 0; i < 8; i++) {
        new App(i + 1);
    }
}
