function mostrarSobre() {
    const home = document.getElementById("home");
    const sobre = document.getElementById("sobre");
    const cards = document.querySelectorAll(".sobre-card"); 

    home.classList.remove("visivel");
    home.classList.add("escondida");

    sobre.classList.remove("escondida");
    sobre.classList.add("visivel");

    document.body.classList.add("scrollable");

    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add("visivel");
        }, index * 200); 
    });
}

function mostrarHome() {
    const sobre = document.getElementById("sobre");
    const home = document.getElementById("home");
    const cards = document.querySelectorAll(".sobre-card");

    sobre.classList.remove("visivel");
    sobre.classList.add("escondida");

    cards.forEach((card) => {
        card.classList.remove("visivel");
    });

    home.classList.remove("escondida");
    home.classList.add("visivel");

    document.body.classList.remove("scrollable");
}