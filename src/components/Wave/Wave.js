import { Point } from "./Point.js";

export class Wave {
    constructor(index, totalPoints, color, startHeight, endHeight) {
        this.index = index;
        this.totalPoints = totalPoints;
        this.color = color;
        this.startHeight = startHeight;
        this.endHeight = endHeight;
        this.points = [];
    }

    resize(stageWidth, stageHeight) {
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;

        this.pointGap = this.stageWidth / (this.totalPoints - 1);

        this.init();
    }

    init() {
        this.points = [];
        const heightDifference = this.endHeight - this.startHeight;
        for (let i = 0; i < this.totalPoints; i++) {
            const y = this.startHeight + (heightDifference * i) / (this.totalPoints - 1);
            const point = new Point(this.index + i, this.pointGap * i, y);
            this.points[i] = point;
        }
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = this.color;

        let prevX = this.points[0].x;
        let prevY = this.points[0].y;

        ctx.moveTo(prevX, prevY);

        for (let i = 1; i < this.totalPoints; i++) {
            this.points[i].update();

            const cx = (prevX + this.points[i].x) / 2;
            const cy = (prevY + this.points[i].y) / 2;
            ctx.quadraticCurveTo(prevX, prevY, cx, cy);
            prevX = this.points[i].x;
            prevY = this.points[i].y;
        }

        ctx.lineTo(prevX, prevY);
        ctx.lineTo(this.stageWidth, this.stageHeight);
        ctx.lineTo(this.points[0].x, this.stageHeight);

        // 그라데이션 생성 및 적용
        const gradient = ctx.createLinearGradient(900, 700, 800,  1000);
        if (typeof this.color === 'string') {
            ctx.fillStyle = this.color;
        } else {
            gradient.addColorStop(0, this.color[0]);
            gradient.addColorStop(1, this.color[1]);
            ctx.fillStyle = gradient;
        }

        ctx.fill();
        ctx.closePath();
    }
}

