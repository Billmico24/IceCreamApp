(() => {
    const refs = {
        openMenuBtn: document.querySelectorAll("[data-modal-open]"),
        closeMenuBtn: document.querySelector("[data-modal-close]"),
        menu: document.querySelector("[data-modal]"),
    };



    refs.openMenuBtn.forEach(e => {
        e.addEventListener("click", toggleModal);
    });
    refs.closeMenuBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.menu.classList.toggle("is-hedden");
    }
})();