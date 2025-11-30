
window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");
    if (window.scrollY > 40) {
        nav.style.background = "rgba(10,16,28,0.92)";
        nav.style.borderBottom = "1px solid rgba(255,255,255,0.08)";
    } else {
        nav.style.background = "rgba(10,16,28,0.75)";
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

const cards = document.querySelectorAll(".card");
cards.forEach(card => {
    card.addEventListener("mousemove", function (e) {
        card.style.transform = "translateY(-4px)";
    });

    card.addEventListener("mouseleave", function () {
        card.style.transform = "translateY(0)";
    });
});
