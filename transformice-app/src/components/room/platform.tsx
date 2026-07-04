import { useEffect, useRef } from "react";
import style from '../room/style.module.css';

function Platform() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;

        if (!canvas) return;

        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;

        const ctx = canvas.getContext("2d");

        if (!ctx) return;

        const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
        const color = colors[Math.floor(Math.random() * (colors.length - 0 + 1)) + 0];

        const player = {
            x: 0,
            y: 360,
            velocityY: 0,
            onGround: true,
            color: color
        };

        const gravity = 0.6;
        const groundY = 360;

        const keys = {
            left: false,
            right: false
        };

        window.addEventListener("keydown", e => {
            if (e.key.toUpperCase() === "A")
                keys.left = true;

            if (e.key.toUpperCase() === "D")
                keys.right = true;

            if (e.key.toUpperCase() === "W" && player.onGround) {
                player.velocityY = -12;
                player.onGround = false;
            }
        });

        window.addEventListener("keyup", e => {
            if (e.key.toUpperCase() === "A")
                keys.left = false;

            if (e.key.toUpperCase() === "D")
                keys.right = false;
        });

        function update() {
            if (!canvas || !ctx) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            player.velocityY += gravity;
            player.y += player.velocityY;

            if (player.y >= groundY) {
                player.y = groundY;
                player.velocityY = 0;
                player.onGround = true;
            }

            if (keys.left && player.x > 0)
                player.x -= 4;

            if (keys.right && player.x < canvas.width - 40) {
                player.x += 4;
            }

            ctx.fillStyle = player.color;
            ctx.fillRect(player.x, player.y, 40, 40);

            requestAnimationFrame(update);
        }

        update();
    }, []);

    return (
        <>
            <canvas className={style.platform + ' mt-3'}
                ref={canvasRef}
            />
        </>
    );
}

export default Platform;