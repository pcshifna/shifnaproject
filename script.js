const aside = document.querySelector("aside");
const backdrop = document.querySelector(".backdrop");
const sidebar = document.querySelector(".sidebar");

function handleToggleDrawer() {
    aside.classList.toggle("visible");
    sidebar.classList.toggle("translate");
}

backdrop.addEventListener("click", () => {
    sidebar.classList.toggle("translate");
    aside.classList.toggle("visible");
});
