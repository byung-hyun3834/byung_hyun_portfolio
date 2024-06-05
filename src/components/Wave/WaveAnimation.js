import {useRef, useEffect} from "react";
import {WaveGroup} from "./WaveGroup";

const WaveAnimation = () => {
    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

        const waveGroup = new WaveGroup();

        const resize = () => {
            const stageWidth = document.body.clientWidth;
            const stageHeight = document.body.clientHeight;

            canvas.width = stageWidth * pixelRatio;
            canvas.height = stageHeight * pixelRatio;
            ctx.scale(pixelRatio, pixelRatio);
            waveGroup.resize(stageWidth, stageHeight);
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width / pixelRatio, canvas.height / pixelRatio);
            waveGroup.draw(ctx);
            window.requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resize);
        resize();
        animate();

        return () => {
            window.removeEventListener('resize', resize);
        };
    }, []);

    return <canvas ref={canvasRef}></canvas>;
}

export default WaveAnimation;