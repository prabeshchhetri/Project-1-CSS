/* PAGE TRANSITION */
document.querySelectorAll("a").forEach(link => {
    const href = link.getAttribute("href");
    if (!href || href.startsWith("#") || href.startsWith("http")) return;
    link.addEventListener("click", e => {
        e.preventDefault();
        document.body.classList.add("fade-out");
        setTimeout(() => window.location = href, 350);
    });
});

/* THUMBNAIL IMAGE SWITCHING */
const mainImage = document.getElementById("mainImage");
if (mainImage) {
    document.querySelectorAll(".thumb-img").forEach(thumb => {
        thumb.addEventListener("click", () => {
            mainImage.src = thumb.src.replace("_small", "_large");
        });
    });
}

/* FULLSCREEN ZOOM */
if (mainImage) {
    mainImage.addEventListener("click", () => {
        const overlay = document.createElement("div");
        overlay.style.position = "fixed";
        overlay.style.top = 0;
        overlay.style.left = 0;
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.background = "rgba(0,0,0,0.92)";
        overlay.style.display = "flex";
        overlay.style.alignItems = "center";
        overlay.style.justifyContent = "center";
        overlay.style.cursor = "zoom-out";
        overlay.style.zIndex = 9999;

        const img = document.createElement("img");
        img.src = mainImage.src;
        img.style.maxWidth = "90%";
        img.style.maxHeight = "90%";
        img.style.borderRadius = "12px";
        overlay.appendChild(img);

        overlay.addEventListener("click", () => overlay.remove());
        document.body.appendChild(overlay);
    });
}
