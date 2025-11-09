window.addEventListener("scroll", () => {
    let scroll = scrollY;
    const section = document.querySelector("section");
    const overlay = document.querySelector(".overlay");

    section.style.backgroundSize = `${100 + (scroll * 0.1)}%`;
    overlay.style.background = `rgba(0, 0, 0, ${scroll * 1.7 /
        window.innerHeight})`
})