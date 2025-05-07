let score = 0;
let currentInterval = 2000;

function startGame() {
    score = 0;
    currentInterval = 2000;
    document.getElementById("pontuacao").innerText = "Pontos: 0";
    spawnStar();
}

function spawnStar() {
    const star = document.createElement("div");
    const starSize = 50;
    const gameArea = document.getElementById("gameArea");
    star.classList.add("star");

    const x = Math.random() * (gameArea.offsetWidth - starSize);
    const y = Math.random() * (gameArea.offsetHeight - starSize);
    star.style.left = x + "px";
    star.style.top = y + "px";

    star.onclick = () => {
        score++;
        document.getElementById("pontuacao").innerText = `Pontos: ${score}`;
        star.remove();
        currentInterval = Math.max(500, currentInterval - 100);
    };

    document.getElementById("gameArea").innerHTML = "";
    document.getElementById("gameArea").appendChild(star);

    setTimeout(spawnStar, currentInterval);
}