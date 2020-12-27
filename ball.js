export class Ball {
    constructor(radius) {
        this.BallRadius = radius;
        this.speed = 0;
    }

    draw(ctx, stageWidth, stageHeight, num) {
        ctx.fillStyle = '#ffffff';

        let angle;
        let radius = stageWidth / 2;
        angle = 0;
        for (let i = 0; i < num; i++) {
            this.x = Math.cos(angle) * Math.sin(this.speed + i * Math.PI / num) * (radius - this.BallRadius) + radius;
            this.y = Math.sin(angle) * Math.sin(this.speed + i * Math.PI / num) * (radius - this.BallRadius) + radius;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.BallRadius, 0, 2 * Math.PI);
            ctx.fill();
            angle += Math.PI * 2 / num / 2;
        }
        this.speed += 0.03;
    }
}