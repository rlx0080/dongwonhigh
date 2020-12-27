export class Lines{
    constructor(num){
        this.num = num;
    }

    drawLines(ctx, stageWidth, stageHeight){
        ctx.strokeStyle = '#ffffff';
        // console.log(stageWidth);
        let baseangle;
        let angle;
        let Opposite_angle;
        let radius = stageWidth / 2;
        // console.log(radius);
        baseangle = 0;
        for(let i = 0; i < this.num; i ++){
            angle = baseangle * Math.PI / 180;
            Opposite_angle = (baseangle + 180) * Math.PI / 180;
            ctx.beginPath();
            ctx.moveTo(Math.cos(angle) * radius + radius, Math.sin(angle) * radius + radius);
            ctx.lineTo(Math.cos(Opposite_angle) * radius + radius, Math.sin(Opposite_angle) * radius + radius);
            ctx.stroke();
            baseangle += 180 / (this.num);
        }

      
    }
}