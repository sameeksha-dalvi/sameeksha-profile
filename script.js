import { inject } from "@vercel/analytics";

inject();

document.addEventListener("click", (e) => {
    const sparkleContainer = document.getElementById("sparkle-container");
    const sparkleCount = 12;

    for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement("span");
        sparkle.classList.add("sparkle");

        const angle = Math.random() * 2 * Math.PI;
        const distance = Math.random() * 40 + 20;

        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        sparkle.style.left = `${e.clientX}px`;
        sparkle.style.top = `${e.clientY}px`;
        sparkle.style.setProperty("--x", `${x}px`);
        sparkle.style.setProperty("--y", `${y}px`);

        sparkleContainer.appendChild(sparkle);

        setTimeout(() => sparkle.remove(), 700);
    }
});