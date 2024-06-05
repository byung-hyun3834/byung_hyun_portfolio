import { Wave } from "./Wave.js";

export class WaveGroup {
    constructor() {
        this.totalWaves = 5;
        this.totalPoints = 6;

        this.colors = [
            "#1884f1",
            "#BBDCFD",
            "rgba(255,166,22,0.75)",
            "rgba(254,49,79,0.77)",
            ["rgba(241,9,121,1)", "rgba(49,68,98,1)"] // 그라데이션 색상 추가
        ];
        this.waves = [];

        for (let i = 0; i < this.totalWaves; i++) {
            const startHeight = 200; // 각 파도의 시작 높이를 다르게 설정
            const endHeight = 400 + i * 10;
            // const startHeight = -10; // 시작점 높이 (위에서 시작)
            // const endHeight = 500; // 끝점 높이 (아래로 향함)
            const wave = new Wave(i, this.totalPoints, this.colors[i], startHeight, endHeight);

            this.waves[i] = wave;
        }
    }

    resize(stageWidth, stageHeight) {
        for (let i = 0; i < this.totalWaves; i++) {
            const wave = this.waves[i];
            wave.resize(stageWidth, stageHeight);
        }
    }

    draw(ctx) {
        for (let i = 0; i < this.totalWaves; i++) {
            const wave = this.waves[i];
            wave.draw(ctx);
        }
    }
}