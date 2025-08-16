function checkOrientation() {
    const overlay = document.getElementById("orientation-overlay");
    // Si está en mobile landscape → mostrar overlay
    if (window.innerHeight < window.innerWidth) {
        overlay.style.display = "none";
    } else {
        overlay.style.display = "flex";
    }
}

// Verificar al cargar
window.addEventListener("load", checkOrientation);
// Verificar cuando gira el dispositivo
window.addEventListener("resize", checkOrientation);
window.addEventListener("orientationchange", checkOrientation);
